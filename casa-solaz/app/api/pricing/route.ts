import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
    const { data, error } = await supabase
        .from("Price_List")
        .select("Pax, WeekD_Price, WeekE_Price")
        .order("Pax", { ascending: true });

    if (error) {
        console.error("Price list lookup failed:", error);
        return NextResponse.json({ error: "We could not load pricing." }, { status: 500 });
    }

    return NextResponse.json({ prices: data ?? [] });
}

