import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ScrollReveal from "./ScrollReveal";

const columns = [
    { title: "Explore", links: [["Home", "/"], ["Gallery", "/Gallery"], ["Booking Policy", "/BookingPolicy"]] },
    { title: "Guest guide", links: [["Reservation", "/Reservation"], ["House rules", "/HouseRules"], ["FAQs", "/FAQs"], ["Contact us", "/ContactUs"]] },
] as const;

const socials = [
    ["Facebook", "ri:facebook-circle-fill", "https://www.facebook.com/casasolazph"],
    ["Threads", "ri:threads-fill", "https://www.threads.com/@casasolaz.ph"],
    ["Instagram", "ri:instagram-line", "https://www.instagram.com/casasolaz.ph/"],
    ["TikTok", "ri:tiktok-fill", "https://www.tiktok.com/@casasolazph"],
] as const;

export default function FooterSection() {
    return (
        <footer className="w-full bg-beige px-6 py-10 text-moss-green sm:px-10 lg:px-16">
            <ScrollReveal className="mx-auto w-full max-w-6xl 2xl:max-w-352">
                <div className="flex flex-col gap-4 border-b border-moss-green/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-bold sm:text-2xl">Your next pause starts here.</h2>
                        <p className="mt-1 text-sm">A little less rush. A little more—</p>
                    </div>
                    <Link
                        href="/Reservation"
                        className="inline-flex w-fit items-center gap-2 rounded-md bg-moss-green px-5 py-3 text-xs font-semibold uppercase text-beige transition hover:bg-soft-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-green"
                    >
                        Book Now
                        <Icon icon="material-symbols:arrow-outward" className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-x-10">
                    <div className="col-span-2 lg:col-span-1">
                        <Image
                            src="/Green%20Logo%20with%20trade%20line.svg"
                            alt="Casa Solaz"
                            width={300}
                            height={300}
                            className="h-auto w-full max-w-64"
                        />
                    </div>

                    {columns.map(({ title, links }) => (
                        <nav key={title} aria-label={title}>
                            <h3 className="text-base font-bold">{title}</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                {links.map(([label, href]) => (
                                    <li key={label}>
                                        <Link href={href} className="hover:underline">{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    <div className="col-span-2 lg:col-span-1">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image
                                src="/Image/Footer/FooterImage.webp"
                                alt="Casa Solaz bedroom"
                                fill
                                sizes="(min-width: 1024px) 25vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-2 flex justify-end" aria-label="Social media links">
                            {socials.map(([label, icon, href]) => (
                                <Link key={label} href={href} aria-label={label} className="p-2">
                                    <Icon icon={icon} className="h-7 w-7" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; 2026. All Rights Reserved</p>
                    <p className="flex items-center gap-2 uppercase">
                        <Link href="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
                        <span aria-hidden="true">|</span>
                        <Link href="/Terms" className="hover:underline">Terms &amp; Condition</Link>
                    </p>
                </div>
            </ScrollReveal>
        </footer>
    );
}