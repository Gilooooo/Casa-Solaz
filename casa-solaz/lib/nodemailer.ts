import nodemailer from "nodemailer";

export type ReservationDetails = {
    fullName: string;
    contactNumber: string;
    email: string;
    pax: string;
    checkIn: string;
    checkOut: string;
    estimatedPrice: string;
    message: string;
};

const senderEmail = process.env.SMTP_EMAIL;
const businessEmail = process.env.BUSINESS_EMAIL;

function getTransporter() {
    const password = process.env.SMTP_PASSWORD;

    if (!password) {
        throw new Error("SMTP_PASSWORD is not configured");
    }

    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: senderEmail,
            pass: password,
        },
    });
}

function reservationSummary(reservation: ReservationDetails) {
    return [
        `Full Name: ${reservation.fullName}`,
        `Contact Number: ${reservation.contactNumber}`,
        `Email Address: ${reservation.email}`,
        `Pax / Guest Number: ${reservation.pax}`,
        `Check In: ${reservation.checkIn}`,
        `Check Out: ${reservation.checkOut}`,
        `Estimated Price: ${reservation.estimatedPrice}`,
        `Message: ${reservation.message || "-"}`,
    ].join("\n");
}

export async function sendReservationEmails(reservation: ReservationDetails) {
    const transporter = getTransporter();
    const summary = reservationSummary(reservation);

    await transporter.sendMail({
        from: senderEmail,
        to: businessEmail,
        replyTo: reservation.email,
        subject: `New reservation request from ${reservation.fullName}`,
        text: summary,
    });

    await transporter.sendMail({
        from: senderEmail,
        to: reservation.email,
        subject: "Casa Solaz reservation request received",
        text: `Hello ${reservation.fullName},\n\nYour reservation request has been sent and is being processed. Please wait for confirmation of your completed reservation by email.\n\nReservation details:\n${summary}\n\nCasa Solaz`,
    });
}