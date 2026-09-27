"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        category: "Romantic",
        quote: "An absolute paradise! From the warm welcome at check-in to the breathtaking ocean view from our room, every detail was thought out. The evening view from the rooftop was the highlight of our stay.",
        author: "Sarah & Mark T.",
    },
    {
        category: "Best for Travel",
        quote: "As someone who travels constantly for work, finding a hotel with reliable Wi-Fi, comfortable workspaces, and quiet rooms is crucial. This place exceeded my expectations.",
        author: "David L.",
    },
    {
        category: "Family Vacation",
        quote: "Traveling with two young kids isn't always easy, but the hotel staff made us feel so welcome. The kids loved the heated pool, and the concierge gave us the best local recommendations.",
        author: "Elena R. & Family",
    },
    {
        category: "A Perfect Escape",
        quote: "Casa Solaz gave us exactly the quiet weekend we needed. The space was beautiful, the bed was incredibly comfortable, and every little detail felt considered.",
        author: "Nina & Paolo C.",
    },
    {
        category: "Worth Coming Back To",
        quote: "A beautiful stay with thoughtful service from start to finish. We enjoyed every morning, every meal, and the peaceful atmosphere that made leaving surprisingly difficult.",
        author: "Miguel A.",
    },
];

const carouselTestimonials = [...testimonials, ...testimonials];

export default function TestimonialSection() {
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

        if (activeIndex !== testimonials.length) {
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
        }, 3000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <main className="flex min-h-[90vh] w-full items-center bg-[#E5E5E5] px-6 py-16 text-[#3C4032] sm:px-10 lg:px-16">
            <section className="mx-auto flex w-full container flex-col">
                <p className="text-xl uppercase tracking-[0.16em] text-[#3A4235]/90">Testimonials</p>
                <div ref={carouselRef} className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none sm:mt-10">
                    {carouselTestimonials.map((testimonial, index) => (
                        <article
                            key={`${testimonial.category}-${index}`}
                            className="relative flex h-76 w-full shrink-0 snap-start flex-col items-center rounded-lg bg-[#EADBD8] px-7 py-6 text-center sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
                        >
                            <div className="flex gap-1 text-[#E8BD22]" aria-label="5 out of 5 stars">
                                {Array.from({ length: 5 }, (_, starIndex) => (
                                    <Icon key={starIndex} icon="material-symbols:star" className="h-6 w-6" aria-hidden="true" />
                                ))}
                            </div>
                            <h2 className="mt-4 text-xl font-semibold uppercase leading-none">{testimonial.category}</h2>
                            <p className="mt-4 max-w-sm text-lg leading-[1.2] text-[#3C4032]/90">&quot;{testimonial.quote}&quot;</p>
                            <p className="mt-auto text-sm">{testimonial.author}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}