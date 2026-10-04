"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

type DateField = "checkIn" | "checkOut";

const FIELDS = [["checkIn", "Check-in"], ["checkOut", "Check-out"]] as const;
const NIGHTLY_RATE = 1999;
const today = new Date(2026, 9, 4);
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

const formatDate = (date: Date | null) => (date ? dateFormat.format(date) : "-");
const monthStart = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);

const reserved = new Set([new Date(2026, 9, 12).getTime(), new Date(2026, 9, 13).getTime()]);

export default function OfferSection() {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [activeField, setActiveField] = useState<DateField | null>(null);
    const [visibleMonth, setVisibleMonth] = useState(monthStart(today));

    const nights = checkIn && checkOut ? Math.round((+checkOut - +checkIn) / 86400000) : 0;
    const estimatedTotal = nights * NIGHTLY_RATE;
    const firstDay = visibleMonth.getDay();
    const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
    const calendarDays = Array.from({ length: firstDay + daysInMonth }, (_, index) =>
        index < firstDay ? null : new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), index - firstDay + 1),
    );

    function openPicker(field: DateField) {
        setActiveField(field);
        const date = field === "checkIn" ? checkIn : checkOut;
        if (date) setVisibleMonth(monthStart(date));
    }

    function selectDate(date: Date) {
        if (activeField === "checkOut" && checkIn && date > checkIn) {
            setCheckOut(date);
            setActiveField(null);
            return;
        }
        setCheckIn(date);
        if (activeField === "checkOut" || (checkOut && date >= checkOut)) setCheckOut(null);
        setActiveField("checkOut");
    }

    function moveMonth(amount: number) {
        const next = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + amount, 1);
        if (next >= monthStart(today)) setVisibleMonth(next);
    }

    return (
        <main className="flex min-h-[60vh] w-full items-center bg-[#E8D8D8] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16">
            <section className="container mx-auto flex min-h-[30vh] w-full flex-col justify-center rounded-xl bg-[#F8F6F3] px-4 py-5 shadow-[0_14px_35px_rgba(0,0,0,0.16)] sm:px-7 sm:py-6">
                <h2 className="text-xl font-medium sm:text-2xl">Select Accommodation Dates</h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {FIELDS.map(([field, label]) => (
                        <button
                            key={field}
                            type="button"
                            onClick={() => openPicker(field)}
                            className={`flex h-14 items-center gap-3 rounded-lg border bg-[#F3F1EE] px-4 text-left transition-colors hover:border-[#3A4235] focus:outline-none focus:ring-2 focus:ring-[#3A4235]/40 ${activeField === field ? "border-[#3A4235]" : "border-[#E5E0DC]"}`}
                            aria-label={`Choose ${label.toLowerCase()} date`}
                        >
                            <Icon icon="material-symbols:calendar-month-outline" className="h-5 w-5 shrink-0 text-[#3A4235]" aria-hidden="true" />
                            <span className="flex flex-col leading-none">
                                <span className="text-xs text-gray">{label}</span>
                                <span className="mt-1.5 text-sm">{formatDate(field === "checkIn" ? checkIn : checkOut)}</span>
                            </span>
                        </button>
                    ))}
                </div>

                <div className="mt-5 border-t border-[#E5E0DC] pt-3 text-sm sm:flex sm:items-end sm:justify-between">
                    <div>
                        <p className="text-gray text-lg">Selected Dates</p>
                        <p className="mt-1 text-md">{checkIn && checkOut ? `${formatDate(checkIn)} - ${formatDate(checkOut)}` : "-"}</p>
                        <p className="mt-3 text-gray text-lg">Estimated Total (Single Pricing)</p>
                        <p className="mt-1 text-md">{nights} {nights === 1 ? "Night" : "Nights"} &bull; &#8369;{NIGHTLY_RATE}.00 / night</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-6 sm:mt-0 sm:items-end">
                        <button type="button" disabled={!nights} className="flex items-center gap-2 rounded-lg bg-[#3A4235] px-6 py-3 text-sm text-[#F8F6F3] transition hover:bg-[#53604B] disabled:cursor-not-allowed disabled:opacity-50">
                            Reserve Now
                            <Icon icon="material-symbols:arrow-forward-rounded" className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <p className="text-lg font-medium">&#8369;{estimatedTotal.toFixed(2)}</p>
                    </div>
                </div>

                {activeField && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D211B]/45 p-4 backdrop-blur-sm"
                        onClick={() => setActiveField(null)}
                        role="presentation"
                    >
                        <div
                            className="flex max-h-[calc(100vh-2rem)] w-full max-w-120 flex-col overflow-y-auto rounded-xl border border-[#E5E0DC] bg-[#F8F6F3] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:p-6"
                            onClick={(event) => event.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Choose accommodation dates"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xl font-medium">Choose Dates</p>
                                    <p className="text-sm text-gray">{nights || 2} guests &bull; 1 room</p>
                                </div>
                                <button type="button" onClick={() => setActiveField(null)} className="rounded-full border border-[#E5E0DC] p-2.5" aria-label="Close date picker">
                                    <Icon icon="material-symbols:close" className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                {FIELDS.map(([field, label]) => (
                                    <button key={field} type="button" onClick={() => openPicker(field)} className={`rounded-md border px-3 py-2.5 text-left ${activeField === field ? "border-[#3A4235]" : "border-[#E5E0DC]"}`}>
                                        <span className="block text-xs text-gray">{label}</span>
                                        <span className="text-base">{formatDate(field === "checkIn" ? checkIn : checkOut)}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-lg">{visibleMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
                                <div className="flex gap-2">
                                    <button type="button" onClick={() => moveMonth(-1)} className="rounded border border-[#E5E0DC] p-1.5" aria-label="Previous month"><Icon icon="material-symbols:chevron-left" className="h-5 w-5" /></button>
                                    <button type="button" onClick={() => moveMonth(1)} className="rounded border border-[#E5E0DC] p-1.5" aria-label="Next month"><Icon icon="material-symbols:chevron-right" className="h-5 w-5" /></button>
                                </div>
                            </div>
                            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-sm text-gray">
                                {dayNames.map((day) => <span key={day}>{day}</span>)}
                            </div>
                            <div className="mt-1 grid grid-cols-7 gap-1">
                                {calendarDays.map((date, index) => {
                                    if (!date) return <span key={`empty-${index}`} className="aspect-square" />;
                                    const time = date.getTime();
                                    const isReserved = reserved.has(time);
                                    const disabled = date < today || isReserved;
                                    const isSelected = time === checkIn?.getTime() || time === checkOut?.getTime();
                                    const isBetween = checkIn && checkOut && date > checkIn && date < checkOut;
                                    return <button key={time} type="button" disabled={disabled} onClick={() => selectDate(date)} aria-label={`${date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}${isReserved ? " - reserved" : ""}`} className={`aspect-square rounded-md text-base transition-colors ${isSelected ? "bg-[#3A4235] text-[#F8F6F3]" : isBetween ? "bg-[#E8E1DE]" : isReserved ? "bg-[url('/Reserved.svg')] bg-contain bg-center bg-no-repeat text-transparent" : "hover:bg-[#E8E1DE]"} ${disabled ? "cursor-not-allowed" : ""}`}>{date.getDate()}</button>;
                                })}
                            </div>
                            <div className="mt-3 flex items-center justify-between border-t border-[#E5E0DC] pt-3 text-sm">
                                <span>{nights} nights selected</span>
                                <button type="button" onClick={() => setActiveField(null)} disabled={!nights} className="rounded-md bg-[#3A4235] px-5 py-2.5 text-[#F8F6F3] disabled:opacity-50">Apply Dates</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
