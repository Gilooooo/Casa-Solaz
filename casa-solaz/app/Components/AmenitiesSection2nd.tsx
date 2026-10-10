import { Icon } from "@iconify/react";

const amenities = [
    {
        name: "Wi-Fi",
        description: "Reliable internet keeps you connected and productive from every corner of your stay.",
        icon: "material-symbols:wifi",
        className: "lg:col-span-3",
    },
    {
        name: "Alexa Powered",
        description: "Voice control makes it easy to adjust lighting, temperature, and entertainment with a few words.",
        icon: "material-symbols:mic",
        className: "lg:col-span-3",
    },
    {
        name: "Air-conditioned",
        description: "Cool, quiet comfort keeps every room calm and restful no matter the day outside.",
        icon: "material-symbols:air",
        className: "lg:col-span-3",
    },
    {
        name: "Netflix",
        description: "End the day with your favorite shows and movies in a cozy, cinematic atmosphere.",
        icon: "simple-icons:netflix",
        className: "lg:col-span-3",
    },
    {
        name: "Games",
        description: "A curated selection of board games and entertainment for relaxed evenings together.",
        icon: "material-symbols:stadia-controller",
        className: "lg:col-span-4",
    },
    {
        name: "Fresh Linens",
        description: "Soft bedding and crisp towels are refreshed regularly for a restful, hotel-like feel.",
        icon: "material-symbols:bed",
        className: "lg:col-span-4",
    },
    {
        name: "Private Entry",
        description: "Come and go at your own pace with a secure, self-contained arrival experience.",
        icon: "material-symbols:key",
        className: "lg:col-span-4",
    },
];

export default function AmenitiesSection2nd() {
    return (
        <main className="min-h-[70vh] w-full bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16">
            <section className="mx-auto flex min-h-[calc(70vh-8rem)] w-full container flex-col">
                <h2 className="text-4xl leading-none sm:text-5xl">Comfort Awaits You</h2>
                <p className="mt-2 max-w-2xl text-sm text-[#3C4032]/75 sm:text-base">
                    Every detail of your stay is designed for comfort, so you can relax, recharge, and feel right at home.
                </p>

                <div className="mt-6 grid flex-1 auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
                    {amenities.map((amenity) => (
                        <article
                            key={amenity.name}
                            className={`flex h-full min-h-32 flex-col rounded-lg bg-white p-[clamp(1rem,2vw,1.5rem)] shadow-sm ${amenity.className}`}
                        >
                            <div className="flex h-[clamp(2.25rem,4vw,3rem)] w-[clamp(2.25rem,4vw,3rem)] shrink-0 items-center justify-center rounded-md bg-[#EADBD8] text-[#3C4032]">
                                <Icon icon={amenity.icon} className="h-[clamp(1.25rem,2.5vw,1.75rem)] w-[clamp(1.25rem,2.5vw,1.75rem)]" aria-hidden="true" />
                            </div>
                            <h3 className="mt-4 text-[clamp(1rem,1.6vw,1.25rem)] font-medium leading-tight">{amenity.name}</h3>
                            <p className="mt-2 max-w-md text-[clamp(0.75rem,1.1vw,0.95rem)] leading-[1.35] text-[#3C4032]/70">{amenity.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
