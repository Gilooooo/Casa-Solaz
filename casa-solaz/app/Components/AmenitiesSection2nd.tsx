import { Icon } from "@iconify/react";
import ScrollReveal from "./ScrollReveal";

const amenities = [
    {
        name: "Wi-Fi",
        icon: "material-symbols:wifi",
    },
    {
        name: "Pets Allowed",
        icon: "material-symbols:pets",
    },
    {
        name: "Netflix",
        icon: "simple-icons:netflix",
    },
    {
        name: "Air-conditioned",
        icon: "material-symbols:air",
    },
    {
        name: "Alexa Powered",
        icon: "material-symbols:mic",
    },
    {
        name: "Games",
        icon: "material-symbols:stadia-controller",
    },
];

export default function AmenitiesSection2nd() {
    return (
        <main className="min-h-[70vh] w-full bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16">
            <ScrollReveal className="w-full">
            <section className="mx-auto flex min-h-[calc(70vh-8rem)] w-full container flex-col justify-center">
                <h2 className="text-4xl leading-none sm:text-5xl font-semibold">Comfort Awaits You</h2>
                <p className="mt-2 w-full text-sm text-[#3C4032]/75 sm:text-base">
                    Every detail of your stay is designed for comfort, so you can relax, recharge, and feel right at home.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
                    {amenities.map((amenity) => (
                        <article
                            key={amenity.name}
                            className="flex items-center gap-3 rounded-lg bg-[#E5E5E5] p-3 sm:p-4"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#EADBD8] text-[#3C4032]">
                                <Icon icon={amenity.icon} className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <h3 className="text-[clamp(1rem,1.6vw,1.25rem)] font-medium leading-tight">{amenity.name}</h3>
                        </article>
                    ))}
                </div>
            </section>
            </ScrollReveal>
        </main>
    );
}
