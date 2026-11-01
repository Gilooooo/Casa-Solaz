import { NextResponse } from "next/server";
import { sendReservationEmails, type ReservationDetails } from "@/lib/nodemailer";
import { supabase } from "@/lib/supabase";
import { getReservedDates } from "./availability";
import { calculateStayPricing, type PriceRecord } from "@/lib/pricing";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;
const requestsByClient = new Map<string, number[]>();

export async function GET() {
    const { data, error } = await supabase
        .from("Guest_Booked")
        .select("Check_In, Check_Out")
        .eq("Booked", 1);

    if (error) {
        console.error("Reserved dates lookup failed:", error);
        return NextResponse.json({ error: "We could not load availability." }, { status: 500 });
    }

    return NextResponse.json({ reservedDates: getReservedDates(data ?? []) });
}

const requiredFields = [
    "fullName",
    "contactNumber",
    "email",
    "pax",
    "checkInDate",
    "checkOutDate",
    "checkIn",
    "checkOut",
    "estimatedPrice",
] as const;

function isReservationDetails(
    value: unknown,
): value is ReservationDetails & { checkInDate: string; checkOutDate: string } {
    if (!value || typeof value !== "object") {
        return false;
    }

    const body = value as Record<string, unknown>;
    return requiredFields.every(
        (field) => typeof body[field] === "string" && body[field].trim().length > 0,
    ) && (typeof body.message === "string" || typeof body.message === "undefined");
}

export async function POST(request: Request) {
    const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0].trim()
        || request.headers.get("x-real-ip")
        || "unknown";
    const now = Date.now();
    const recentRequests = (requestsByClient.get(clientKey) ?? []).filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
    );

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
        const retryAfter = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - recentRequests[0])) / 1000);
        return NextResponse.json(
            { error: "Too many reservation attempts. Please try again later." },
            { status: 429, headers: { "Retry-After": String(retryAfter) } },
        );
    }

    recentRequests.push(now);
    requestsByClient.set(clientKey, recentRequests);

    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid reservation data." }, { status: 400 });
    }

    if (!isReservationDetails(body)) {
        return NextResponse.json({ error: "Please complete all reservation fields." }, { status: 400 });
    }

    const reservation: ReservationDetails = {
        fullName: body.fullName.trim(),
        contactNumber: body.contactNumber.trim(),
        email: body.email.trim(),
        pax: body.pax.trim(),
        checkIn: body.checkIn.trim(),
        checkOut: body.checkOut.trim(),
        estimatedPrice: body.estimatedPrice.trim(),
        message: typeof body.message === "string" ? body.message.trim() : "",
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reservation.email)) {
        return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!/^[1-4]$/.test(reservation.pax)) {
        return NextResponse.json({ error: "Please provide a guest number between 1 and 4." }, { status: 400 });
    }

    if (!/^\d{4}-\d{2}-\d{2}T16:00:00$/.test(body.checkInDate) || !/^\d{4}-\d{2}-\d{2}T14:00:00$/.test(body.checkOutDate)) {
        return NextResponse.json({ error: "Please select valid reservation dates and times." }, { status: 400 });
    }

    try {
        const { data: priceRows, error: priceError } = await supabase
            .from("Price_List")
            .select("Pax, WeekD_Price, WeekE_Price")
            .eq("Pax", Number(reservation.pax))
            .limit(1);

        if (priceError || !priceRows?.length) {
            console.error("Reservation pricing lookup failed:", priceError);
            return NextResponse.json({ error: "We could not calculate your reservation price." }, { status: 500 });
        }

        const pricing = calculateStayPricing(
            body.checkInDate.slice(0, 10),
            body.checkOutDate.slice(0, 10),
            Number(reservation.pax),
            priceRows as PriceRecord[],
        );

        if (!pricing.nights) {
            return NextResponse.json({ error: "Please select a valid date range." }, { status: 400 });
        }

        reservation.estimatedPrice = `₱${pricing.total.toFixed(2)}`;

        const { error: bookingError } = await supabase.from("Guest_Booked").insert({
            FullName: reservation.fullName,
            Email_Address: reservation.email,
            Contact_Number: reservation.contactNumber,
            Check_In: body.checkInDate,
            Check_Out: body.checkOutDate,
            Guest_Number: Number(reservation.pax),
            Booked: 0,
            Message: reservation.message,
        });

        if (bookingError) {
            console.error("Reservation database insert failed:", bookingError);
            return NextResponse.json({ error: "We could not save your reservation right now." }, { status: 500 });
        }

        await sendReservationEmails(reservation);
        return NextResponse.json({ message: "Reservation submitted successfully." });
    } catch (error) {
        console.error("Reservation email delivery failed:", error);
        return NextResponse.json(
            { error: "We could not send your reservation right now. Please try again." },
            { status: 500 },
        );
    }
}
