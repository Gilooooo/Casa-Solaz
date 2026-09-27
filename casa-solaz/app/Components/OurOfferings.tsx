"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const serviceImages = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    src: `/Image/OurServicesPage/OurService${index + 1}.jpg`,
}));

const carouselImages = [...serviceImages, ...serviceImages.slice(0, 4)];

export default function OurOfferingSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const skipNextScroll = useRef(false);

    useEffect(() => {
        const carousel = carouselRef.current;
        const activeCard = carousel?.children[activeIndex] as HTMLElement | undefined;

        if (!carousel || !activeCard) {
            return;
        }

        if (skipNextScroll.current) {
            skipNextScroll.current = false;
            return;
        }

        carousel.scrollTo({
            left: activeCard.offsetLeft,
            behavior: "smooth",
        });

        if (activeIndex !== serviceImages.length) {
            return;
        }

        const resetLoop = window.setTimeout(() => {
            const firstCard = carousel.children[0] as HTMLElement;

            carousel.style.scrollBehavior = "auto";
            carousel.scrollLeft = firstCard.offsetLeft;
            carousel.style.scrollBehavior = "";
            skipNextScroll.current = true;
            setActiveIndex(0);
        }, 1000);

        return () => window.clearTimeout(resetLoop);
    }, [activeIndex]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((index) => index + 1);
        }, 2000);

        return () => window.clearInterval(interval);
    }, []);

    return (    
        <main className="w-full bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16">
            <section className="mx-auto w-full container">
                <p className="text-xl uppercase tracking-[0.16em] text-[#3A4235]/90">What we Offer</p>
                <div ref={carouselRef} className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none rounded-sm">
                    {carouselImages.map((image, index) => (
                        <div key={`${image.id}-${index}`} className="relative aspect-[0.78] w-full shrink-0 snap-start overflow-hidden rounded-sm sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]">
                                <Image
                                    src={image.src}
                                    alt={`Casa Solaz service ${image.id}`}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, 80vw"
                                    className="border rounded-sm border-[#3C4032] object-cover"
                                />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}