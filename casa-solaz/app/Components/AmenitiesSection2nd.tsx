import { Icon } from "@iconify/react";
import ScrollReveal from "./ScrollReveal";

const amenities = [
    { name: "Kitchenette", icon: "mdi:pot-mix" },
    { name: "Smart Aircon", icon: "mdi:air-conditioner" },
    { name: "Wi-fi", icon: "material-symbols:wifi" },
    { name: "Netflix", icon: "simple-icons:netflix" },
    { name: "Games", icon: "mdi:cards-playing" },
    { name: "Self Check-in", icon: "mdi:key" },
    { name: "Smart lock", icon: "mdi:lock" },
];

export default function AmenitiesSection2nd() {
    return (
        <main className="w-full min-h-[65vh] bg-moss-green px-6 py-16 text-beige sm:px-10 sm:py-20 lg:px-16 grid place-items-center">
            <ScrollReveal className="w-full">
                <section className="container mx-auto flex flex-col items-center text-center">
                    <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl">Comfort Awaits You</h2>

                    <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-8 sm:mt-14">
                        {amenities.map((amenity) => (
                            <li key={amenity.name} className="flex w-24 flex-col items-center gap-2 sm:w-28">
                                <Icon icon={amenity.icon} className="h-9 w-9" aria-hidden="true" />
                                <span className="text-xs font-medium sm:text-sm">{amenity.name}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-12 max-w-3xl text-sm font-semibold sm:mt-14 sm:text-base">
                        Every detail of your stay is designed for comfort, so you can relax, recharge, and feel right at home.
                    </p>
                </section>
            </ScrollReveal>
        </main>
    );
}
