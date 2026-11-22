"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const MIN_MS = 1500; // shortest time the screen stays up
const MAX_MS = 6000; // stop waiting for slow assets after this
const GLIDE_MS = 900; // logo glides to the hero while the green fades out
const FADE_MS = 300; // final cross-fade with the hero's logo (keep equal to duration-300 in HeroSection)

const HERO_FIT = { x: 0, w: 1, cy: 0.5 };
const LIFT_PX = 6;

function glideTo(from: HTMLElement) {
    const hero = document.querySelector<HTMLElement>("[data-hero-logo]");
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

    // the <img> has padding on phones, and the picture is drawn inside it
    const box = hero.getBoundingClientRect();
    const css = getComputedStyle(hero);
    const left = box.left + parseFloat(css.paddingLeft);
    const top = box.top + parseFloat(css.paddingTop);
    const width = box.width - parseFloat(css.paddingLeft) - parseFloat(css.paddingRight);
    const height = box.height - parseFloat(css.paddingTop) - parseFloat(css.paddingBottom);
    if (top + height < 0 || top > window.innerHeight) return null;

    const cur = from.getBoundingClientRect();
    const scale = (width * HERO_FIT.w) / cur.width;
    const x = left + width * HERO_FIT.x - cur.left;
    const y = top + height * HERO_FIT.cy - (cur.height * scale) / 2 - cur.top - LIFT_PX;
    return `translate(${x}px, ${y}px) scale(${scale})`;
}

export default function LoadingScreen() {
    const pathname = usePathname();
    const logoRef = useRef<HTMLDivElement>(null);
    const [readyPath, setReadyPath] = useState<string | null>(null);
    const [donePath, setDonePath] = useState<string | null>(null);
    const [glide, setGlide] = useState<string | null>(null);
    const phase = donePath === pathname ? "done" : readyPath === pathname ? "exit" : "loading";

    useEffect(() => {
        let minPassed = false;
        let loaded = document.readyState === "complete";
        let doneTimer: number | undefined;
        const finish = () => {
            if (!minPassed || !loaded || doneTimer) return;
            setGlide(logoRef.current ? glideTo(logoRef.current) : null);
            setReadyPath(pathname);
            doneTimer = window.setTimeout(() => setDonePath(pathname), GLIDE_MS);
        };
        const onLoad = () => {
            loaded = true;
            finish();
        };
        const minTimer = window.setTimeout(() => {
            minPassed = true;
            finish();
        }, MIN_MS);
        const maxTimer = window.setTimeout(() => {
            minPassed = loaded = true;
            finish();
        }, MAX_MS);

        window.addEventListener("load", onLoad);
        return () => {
            window.clearTimeout(minTimer);
            window.clearTimeout(maxTimer);
            window.clearTimeout(doneTimer);
            window.removeEventListener("load", onLoad);
        };
    }, [pathname]);

    useEffect(() => {
        const root = document.documentElement;
        const locked = phase !== "done";
        root.toggleAttribute("data-loading", locked);
        root.style.overflow = locked ? "hidden" : "";
    }, [phase]);

    return (
        <div
            role="status"
            aria-label="Loading"
            aria-hidden={phase === "done"}
            className={`fixed inset-0 z-100 flex items-center justify-center ${
                phase === "done" ? "invisible transition-[visibility] delay-300" : "visible"
            } ${phase === "loading" ? "touch-none" : "pointer-events-none"}`}
        >
            <div
                className={`absolute inset-0 bg-moss-green transition-opacity ${phase === "loading" ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDuration: `${phase === "exit" ? GLIDE_MS : 500}ms` }}
            />
            <div
                ref={logoRef}
                className="relative w-[min(80vw,32rem)] origin-top-left"
                style={{
                    transform: phase === "loading" ? "none" : (glide ?? "none"),
                    opacity: phase === "loading" || (phase === "exit" && glide) ? 1 : 0,
                    transition: `opacity ${FADE_MS}ms${
                        phase === "exit" ? `, transform ${GLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)` : ""
                    }`,
                }}
            >
                <Logo className="block h-auto w-full" />
            </div>
        </div>
    );
}