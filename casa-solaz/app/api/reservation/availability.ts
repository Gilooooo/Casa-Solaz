type Booking = {
    Check_In: string;
    Check_Out: string;
};

function dateOnly(value: string) {
    return value.slice(0, 10);
}

export function getReservedDates(bookings: Booking[]) {
    const reservedDates = new Set<string>();

    for (const booking of bookings) {
        const checkIn = new Date(`${dateOnly(booking.Check_In)}T00:00:00Z`);
        const checkOut = new Date(`${dateOnly(booking.Check_Out)}T00:00:00Z`);

        for (const date = checkIn; date < checkOut; date.setUTCDate(date.getUTCDate() + 1)) {
            reservedDates.add(date.toISOString().slice(0, 10));
        }
    }

    return [...reservedDates].sort();
}
