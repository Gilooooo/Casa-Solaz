"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
};

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = revealRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={revealRef} className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}>
            {children}
        </div>
    );
}
