"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
    {
        quote: "An absolute paradise! From the warm welcome at check-in to the breathtaking ocean view from our room, every detail was thought out. The evening view from the rooftop was the highlight of our stay.",
        author: "Sarah & Mark T.",
    },
    {
        quote: "As someone who travels constantly for work, finding a hotel with reliable Wi-Fi, comfortable workspaces, and quiet rooms is crucial. This place exceeded my expectations.",
        author: "David L.",
    },
    {
        quote: "Traveling with two young kids isn't always easy, but the hotel staff made us feel so welcome. The kids loved the heated pool, and the concierge gave us the best local recommendations.",
        author: "Elena R. & Family",
    },
    {
        quote: "Casa Solaz gave us exactly the quiet weekend we needed. The space was beautiful, the bed was incredibly comfortable, and every little detail felt considered.",
        author: "Nina & Paolo C.",
    },
    {
        quote: "A beautiful stay with thoughtful service from start to finish. We enjoyed every morning, every meal, and the peaceful atmosphere that made leaving surprisingly difficult.",
        author: "Miguel A.",
    },
];

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonial = testimonials[activeIndex];

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((index) => (index + 1) % testimonials.length);
        }, 2000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <main className="flex min-h-screen w-full items-start justify-center bg-[#E5E5E5] px-6 pb-16 pt-34 text-[#3C4032] sm:px-10 lg:px-16">
            <ScrollReveal className="w-full container">
                <section className="flex w-full container flex-col">
                    <p className="text-xl font-bold uppercase tracking-widest text-[#3A4235]/90">Testimonials</p>
                    <article
                        key={activeIndex}
                        className="mx-auto mt-8 flex min-h-[calc(100vh-13rem)] w-full max-w-4xl flex-col items-center justify-center text-center md:mt-9"
                        aria-live="polite"
                    >
                        <div className="flex gap-1 text-[#E8BD22]" aria-label="5 out of 5 stars">
                            {Array.from({ length: 5 }, (_, starIndex) => (
                                <Icon
                                    key={starIndex}
                                    icon="material-symbols:star"
                                    className="h-7 w-7 sm:h-8 sm:w-8"
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <p className="mt-8 max-w-4xl text-lg leading-[1.55] text-[#3C4032]/90 sm:text-xl">
                            &quot;{testimonial.quote}&quot;
                        </p>
                        <p className="mt-14 text-sm sm:text-base">{testimonial.author}</p>
                    </article>
                </section>
            </ScrollReveal>
        </main>
    );
}
