const PHILIPPINE_TIME_ZONE = "Asia/Manila";

export function getPhilippineToday() {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: PHILIPPINE_TIME_ZONE,
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

    return new Date(Number(values.year), Number(values.month) - 1, Number(values.day));
}

export function getDateKey(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export function getPhilippineReservationTimestamp(date: Date, hour: number) {
    return `${getDateKey(date)}T${String(hour).padStart(2, "0")}:00:00`;
}
