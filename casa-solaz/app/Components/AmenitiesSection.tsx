"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const amenityImages = Array.from({ length: 13 }, (_, index) => ({
    id: index + 1,
    src: `/Image/AmenitiesPage/Amenities${index + 1}.jpg`,
}));

const carouselImages = [...amenityImages, ...amenityImages.slice(0, 4)];

export default function AmenitiesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const skipNextScroll = useRef(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        });

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        const activeCard = carousel?.children[activeIndex] as HTMLElement | undefined;

        if (!isInView || !carousel || !activeCard) {
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

        if (activeIndex !== amenityImages.length) {
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
    }, [activeIndex, isInView]);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        const interval = window.setInterval(() => {
            setActiveIndex((index) => index + 1);
        }, 2000);

        return () => window.clearInterval(interval);
    }, [isInView]);

    return (    
        <main className="w-full bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16">
            <section ref={sectionRef} className="mx-auto w-full container">
                <p className="text-xl uppercase tracking-[0.16em] text-[#3A4235]/90">Amenities</p>
                <div ref={carouselRef} className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none rounded-sm">
                    {carouselImages.map((image, index) => (
                        <div key={`${image.id}-${index}`} className="relative aspect-[0.78] max-h-128 max-w-100 w-full shrink-0 snap-start overflow-hidden rounded-sm sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]">
                                <Image
                                    src={image.src}
                                    alt={`Casa Solaz amenity ${image.id}`}
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