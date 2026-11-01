export type PriceRecord = {
    Pax: number;
    WeekD_Price: number;
    WeekE_Price: number;
};

export type StayPricing = {
    nights: number;
    weekdayNights: number;
    weekendNights: number;
    total: number;
};

export function calculateStayPricing(
    checkIn: string,
    checkOut: string,
    pax: number,
    prices: PriceRecord[],
): StayPricing {
    const price = prices.find((record) => record.Pax === pax);
    if (!price || !checkIn || !checkOut) {
        return { nights: 0, weekdayNights: 0, weekendNights: 0, total: 0 };
    }

    const start = new Date(`${checkIn}T00:00:00Z`);
    const end = new Date(`${checkOut}T00:00:00Z`);
    let weekdayNights = 0;
    let weekendNights = 0;

    for (const date = new Date(start); date < end; date.setUTCDate(date.getUTCDate() + 1)) {
        if (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
            weekendNights += 1;
        } else {
            weekdayNights += 1;
        }
    }

    return {
        nights: weekdayNights + weekendNights,
        weekdayNights,
        weekendNights,
        total: weekdayNights * Number(price.WeekD_Price) + weekendNights * Number(price.WeekE_Price),
    };
}

