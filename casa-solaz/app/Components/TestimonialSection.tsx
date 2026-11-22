"use client";

import { Icon } from "@iconify/react";
import { useRef } from "react";
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
    const trackRef = useRef<HTMLDivElement>(null);

    // Scrolls one card at a time; 16 = the gap-4 between cards
    function scrollCards(direction: 1 | -1) {
        const track = trackRef.current;
        const card = track?.firstElementChild;
        if (!track || !card) return;
        track.scrollBy({ left: direction * (card.clientWidth + 16), behavior: "smooth" });
    }

    return (
        <main className="flex min-h-[75vh] w-full items-center justify-center bg-soft-white px-6 pb-16 pt-16 text-walnut sm:px-10 lg:px-16">
            <ScrollReveal className="container w-full">
                <section className="flex w-full flex-col items-center">
                    <p className="text-lg font-bold uppercase tracking-widest text-moss-green sm:text-xl">Testimonials</p>
                    <h2 className="mt-1 text-center text-2xl font-bold uppercase sm:text-3xl">A space for your stories.</h2>

                    <div
                        ref={trackRef}
                        role="region"
                        aria-label="Guest testimonials"
                        tabIndex={0}
                        className="mt-10 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
                    >
                        {testimonials.map(({ quote, author }) => (
                            <article
                                key={author}
                                className="flex w-full shrink-0 snap-start flex-col rounded-xl bg-beige p-5 md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
                            >
                                <p className="text-sm font-medium">{author}</p>
                                <p className="mt-4 text-sm leading-relaxed">&quot;{quote}&quot;</p>
                                <div className="mt-auto flex gap-0.5 self-end pt-3 text-moss-green" role="img" aria-label="5 out of 5 stars">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Icon key={i} icon="material-symbols:star" className="h-4 w-4" aria-hidden="true" />
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                        {([["Previous testimonial", "chevron-left", -1], ["Next testimonial", "chevron-right", 1]] as const).map(([label, icon, direction]) => (
                            <button
                                key={label}
                                type="button"
                                onClick={() => scrollCards(direction)}
                                aria-label={label}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-moss-green text-moss-green transition hover:bg-moss-green hover:text-beige focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-green"
                            >
                                <Icon icon={`material-symbols:${icon}`} className="h-6 w-6" aria-hidden="true" />
                            </button>
                        ))}
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}