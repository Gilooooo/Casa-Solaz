"use client";

import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
const faqs = [
    {
        question: "What time are check-in and check-out?",
        answer:
            "Check-in begins at 6:00 PM and check-out is at 4:00 PM. Early check-in and late check-out may be available upon request.",
    },
    {
        question: "Where is Casa Solaz located?",
        answer:
            "Casa Solaz is located in SMDC Wind Residences, Tower 4 Tagaytay City, Cavite, Philippines.",
    },
    {
        question: "Is parking available?",
        answer:
            "Yes, but there is limited parking available and there is a fee for parking.",
    },
];

export default function FAQsSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#e5e5e3] px-6 py-28 text-[#3a4235] sm:px-10 lg:px-14">
            <ScrollReveal className="h-full w-full">
                <div className="mx-auto flex min-h-[calc(100vh-14rem)] max-w-6xl flex-col justify-center">
                    <h1 className="mb-12 text-center font-cormorant text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                        Frequently asked Questions
                    </h1>

                    <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
                        {[0, 1].map((column) => (
                            <div key={column} className="flex flex-col gap-5">
                                {faqs.map(({ question, answer }, index) => index % 2 === column && (
                            <details
                                key={question}
                                open={openFaq === index}
                                className="group bg-[#f7f7f7] px-6 py-5 shadow-sm rounded-lg"
                            >
                                <summary
                                    onClick={() =>
                                        setOpenFaq((current) =>
                                            current === index ? null : index,
                                        )
                                    }
                                    className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden"
                                >
                                    {question}
                                    <span
                                        className="text-2xl font-light transition-transform duration-200 group-open:rotate-45"
                                        aria-hidden="true"
                                    >
                                        +
                                    </span>
                                </summary>
                                <p className="max-w-2xl pt-4 leading-relaxed text-[#596052]">
                                    {answer}
                                </p>
                            </details>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </main>
    );
}
