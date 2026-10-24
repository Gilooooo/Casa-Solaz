"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type DateField = "checkIn" | "checkOut";

const NIGHTLY_RATE = 1999;
const FIELDS = [["checkIn", "Check-in"], ["checkOut", "Check-out"]] as const;
const today = new Date();
today.setHours(0, 0, 0, 0);
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });
const monthStart = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);
const formatDate = (date: Date | null) => (date ? dateFormat.format(date) : "-");
const reserved = new Set([new Date(2026, 9, 12).getTime(), new Date(2026, 9, 13).getTime()]);

export default function HeroSection() {
	const [isSticky, setIsSticky] = useState(false);
	const [checkIn, setCheckIn] = useState<Date | null>(null);
	const [checkOut, setCheckOut] = useState<Date | null>(null);
	const [activeField, setActiveField] = useState<DateField | null>(null);
	const [reservationModal, setReservationModal] = useState(false);
	const [visibleMonth, setVisibleMonth] = useState(monthStart(today));
	const heroRef = useRef<HTMLElement>(null);
	const bookingRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const hero = heroRef.current;
			const booking = bookingRef.current;

			if (!hero || !booking) return;

			const navbarHeight = window.innerHeight * 0.12;
			const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
			const bookingTop = heroBottom - booking.offsetHeight / 2;
			setIsSticky(window.scrollY >= bookingTop - navbarHeight);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

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

	function openReservation() {
		if (nights) setReservationModal(true);
	}

	return (
		<section
			ref={heroRef}
			className="relative flex min-h-screen sm:min-h-[90vh] w-full items-center justify-center bg-cover bg-center pb-28 sm:pb-24"
			style={{ backgroundImage: "url('/Image/HeroPage/Hero.webp')" }}
		>
			<div className="absolute inset-0 bg-black/25" />
			<ScrollReveal className="container relative z-0 text-center text-[#E8D8D8]">
				<div className="flex flex-col items-center justify-center gap-2">
					<h6 className="text-xs lowercase tracking-[0.3em] italic md:text-lg">
						A place where comfort meets calm.
					</h6>
					<Image
						src="/Image/HeroPage/Casa Solaz.webp"
						alt="Casa Solaz Logo"
						width={1000}
						height={250}
						className="relative z-0 mx-auto mt-4 h-auto w-[min(100vw,1000px)] md:mt-6 px-10 sm:px-0"
					/>
					<button
						type="button"
						onClick={openReservation}
						className=" mt-6 rounded-full border border-[#3A4235] bg-[#3A4235] px-6 py-3 text-sm font-semibold uppercase text-[#E8D8D8] transition hover:bg-[#E8D8D8] hover:text-[#3A4235] disabled:cursor-not-allowed disabled:opacity-60 sm:hidden"
					>
						Book Now
					</button>
				</div>
			</ScrollReveal>
			<ScrollReveal
				className={`hidden left-0 w-full sm:block ${
					isSticky ? "fixed top-[12vh] z-40" : "absolute bottom-0 z-20"
				}`}
			>
				<div
					ref={bookingRef}
					className={`container relative left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-4xl border border-[#A7AAA4] bg-[#E5E5E5]/95 p-3 text-[#3C4032] shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur transition-transform duration-200 ease-out will-change-transform sm:w-[calc(100%-3rem)] sm:px-7 sm:py-7 md:rounded-full ${isSticky ? "" : "translate-y-1/2"}`}
				>
					<div className="flex flex-col gap-3 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_148px_84px_142px] md:items-center md:gap-3">
						<div className="flex w-full gap-2 sm:gap-3 md:contents">
							{FIELDS.map(([field, label]) => (
								<button
									key={field}
									type="button"
									onClick={() => openPicker(field)}
									className={`flex h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border bg-[#F8F6F3] px-3 text-left focus:outline-none focus:ring-2 focus:ring-[#3A4235]/20 sm:h-13 md:rounded-full ${activeField === field ? "border-[#3A4235]" : "border-[#000000]"}`}
									aria-label={`Choose ${label.toLowerCase()} date`}
								>
									<Icon icon="material-symbols:calendar-month-outline" className="h-4 w-4 shrink-0 text-[#3A4235]" aria-hidden="true" />
									<span className="flex min-w-0 flex-col leading-none">
										<span className="text-[0.55rem] uppercase tracking-wide text-gray">{label}</span>
										<span className="mt-1 truncate text-[0.65rem]">{formatDate(field === "checkIn" ? checkIn : checkOut)}</span>
									</span>
								</button>
							))}
						</div>
						<div className="flex w-full items-center justify-end gap-4 md:contents">
							<div className="px-1 text-[0.8rem] leading-tight text-gray sm:px-0">
								<p>Estimated Total</p>
								<p className="mt-1 whitespace-nowrap text-[0.65rem] text-[#3C4032]">{nights} {nights === 1 ? "Night" : "Nights"} &bull; ₱{NIGHTLY_RATE.toLocaleString()} / night</p>
							</div>
							<p className="whitespace-nowrap text-[0.8rem] text-[#3C4032]">₱{estimatedTotal.toFixed(2)}</p>
							<button
								type="button"
								onClick={openReservation}
								disabled={!nights}
								className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#3A4235] px-4 text-xs font-medium uppercase text-[#F8F6F3] transition hover:bg-[#E8D8D8] hover:text-[#3A4235] disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:px-5 md:rounded-full"
							>
								Book Now
								<Icon icon="material-symbols:arrow-forward-rounded" className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</ScrollReveal>

			{activeField && typeof document !== "undefined" && createPortal(
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D211B]/45 p-4 backdrop-blur-sm" onClick={() => setActiveField(null)} role="presentation">
					<div className="flex max-h-[calc(100vh-2rem)] w-full max-w-120 flex-col overflow-y-auto rounded-xl border border-[#E5E0DC] bg-[#F8F6F3] p-5 text-[#3C4032] shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:p-6" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Choose accommodation dates">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-xl font-medium">Choose Dates</p>
								<p className="text-sm text-gray">1 room</p>
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
						<div className="mt-3 grid grid-cols-7 gap-1 text-center text-sm text-gray">{dayNames.map((day) => <span key={day}>{day}</span>)}</div>
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
				</div>,
				document.body,
			)}

			{reservationModal && !activeField && typeof document !== "undefined" && createPortal(
				<div className="fixed inset-0 z-40 flex items-center justify-center bg-[#1D211B]/45 p-4 backdrop-blur-sm" onClick={() => setReservationModal(false)} role="presentation">
					<div className="max-h-[calc(100dvh-1rem)] w-full max-w-2xl overflow-y-auto rounded-xl border border-[#E5E0DC] bg-[#F8F6F3] p-4 text-[#3C4032] shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:max-h-[calc(100vh-2rem)] sm:p-7" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="hero-reservation-title">
						<div className="flex items-start justify-between gap-4">
							<div>
								<p id="hero-reservation-title" className="text-lg font-medium sm:text-2xl">Reserve Your Stay</p>
								<p className="mt-1 text-xs text-gray sm:text-sm">Tell us how to reach you and we will confirm your reservation.</p>
							</div>
							<button type="button" onClick={() => setReservationModal(false)} className="rounded-full border border-[#E5E0DC] p-2 sm:p-2.5" aria-label="Close reservation form"><Icon icon="material-symbols:close" className="h-5 w-5" aria-hidden="true" /></button>
						</div>
						<form className="mt-4 space-y-3 sm:mt-6 sm:space-y-4" onSubmit={(event) => event.preventDefault()}>
							<div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
								<label className="text-sm">
									<span className="mb-1.5 block">Full Name</span>
									<input type="text" name="fullName" required className="h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-12" />
								</label>
								<label className="text-sm">
									<span className="mb-1.5 block">Contact Number</span>
									<input type="tel" name="contactNumber" required className="h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-12" />
								</label>
							</div>

							<label className="block text-sm">
								<span className="mb-1.5 block">Email Address</span>
								<input type="email" name="email" required className="h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-12" />
							</label>

							<div>
								<p className="mb-1.5 text-sm">Stay Dates</p>
								<div className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2">
									{FIELDS.map(([field, label]) => (
										<button
											key={field}
											type="button"
											onClick={() => openPicker(field)}
											className={`flex h-12 items-center gap-3 rounded-lg border bg-[#F3F1EE] px-4 text-left transition-colors hover:border-[#3A4235] focus:outline-none focus:ring-2 focus:ring-[#3A4235]/40 sm:h-14 ${activeField === field ? "border-[#3A4235]" : "border-[#E5E0DC]"}`}
										>
											<Icon icon="material-symbols:calendar-month-outline" className="h-5 w-5 shrink-0 text-[#3A4235]" aria-hidden="true" />
											<span className="flex flex-col leading-none">
												<span className="text-xs text-gray">{label}</span>
												<span className="mt-1.5 text-sm">{formatDate(field === "checkIn" ? checkIn : checkOut)}</span>
											</span>
										</button>
									))}
								</div>
							</div>

							<label className="block text-sm">
								<span className="mb-1.5 block">Estimated Price</span>
								<input type="text" name="estimatedPrice" value={`₱${estimatedTotal.toFixed(2)}`} readOnly className="h-11 w-full rounded-lg border border-[#E5E0DC] bg-[#EDEAE6] px-4 outline-none sm:h-12" />
							</label>

							<label className="block text-sm">
								<span className="mb-1.5 block">Message</span>
								<textarea name="message" rows={4} className="h-24 w-full resize-y rounded-lg border border-[#E5E0DC] bg-[#F3F1EE] px-4 py-3 outline-none transition focus:border-[#3A4235] focus:ring-2 focus:ring-[#3A4235]/20 sm:h-auto" />
							</label>

							<div className="flex justify-end border-t border-[#E5E0DC] pt-4">
								<button type="submit" className="flex items-center gap-2 rounded-lg bg-[#3A4235] px-6 py-3 text-sm text-[#F8F6F3] transition hover:bg-[#53604B]">
									Submit Reservation
									<Icon icon="material-symbols:arrow-forward-rounded" className="h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</form>
					</div>
				</div>,
				document.body,
			)}
		</section>
	);
}
