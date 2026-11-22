import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function LocationSection() {
    return (
        <main className="flex w-full min-h-[85vh] items-center justify-center bg-moss-green px-6 py-16 text-beige sm:px-10 sm:py-24 lg:px-16">
            <ScrollReveal className="container w-full">
                <section className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">Find your way to calm</p>
                        <h2 className="mt-4 text-3xl font-bold uppercase leading-snug sm:text-4xl lg:text-5xl">
                            <span className="block">A little planning.</span>
                            A lovely little escape.
                        </h2>
                        <p className="mt-4 text-sm sm:text-base">
                            Your guide to getting here and making the most of your time at Casa Solaz.
                        </p>
                    </div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/Image/Location/LocationImage.webp"
                            alt="Illustrated map of nearby places around Casa Solaz in Tagaytay, with travel times"
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}