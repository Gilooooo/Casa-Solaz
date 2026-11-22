import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
    { name: "Gallery", icon: "material-symbols:photo-library-outline" },
    { name: "Unit Inclusions", icon: "material-symbols:checklist" },
    { name: "Amenities", icon: "material-symbols:room-service-outline" },
];

export default function GallerySection() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-beige px-6 py-16 sm:px-10 lg:px-16">
            <ScrollReveal className="container w-full 2xl:max-w-none">
                <section className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-xl bg-natural md:grid-cols-2 2xl:max-w-352">
                    <div className="relative h-64 md:h-auto md:min-h-96 2xl:min-h-136">
                        <Image
                            src="/Image/Gallery/GalleryHomePage.webp"
                            alt="Casa Solaz bedroom with city view"
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 2xl:p-16">
                        <h1 className="text-3xl font-bold leading-tight text-walnut sm:text-4xl lg:text-5xl 2xl:text-6xl">
                            Explore Every Detail of Your Stay
                        </h1>
                        <p className="mt-3 text-sm text-walnut/70 sm:text-base 2xl:mt-4 2xl:text-lg">
                            From cozy interiors to thoughtful amenities, discover everything waiting for you at Casa Solaz.
                        </p>
                        <Link
                            href="/gallery"
                            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-moss-green px-6 py-3 text-xs font-semibold uppercase text-beige transition hover:bg-soft-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-green 2xl:mt-8 2xl:px-8 2xl:py-4 2xl:text-sm"
                        >
                            Discover Casa Solaz
                            <Icon icon="material-symbols:arrow-forward-rounded" className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <ul className="mt-8 grid grid-cols-3 divide-x divide-moss-green text-moss-green 2xl:mt-12">
                            {highlights.map(({ name, icon }) => (
                                <li key={name} className="flex flex-col items-center gap-2 px-2 text-center">
                                    <Icon icon={icon} className="h-8 w-8 2xl:h-11 2xl:w-11" aria-hidden="true" />
                                    <span className="text-xs font-semibold sm:text-sm 2xl:text-base">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}