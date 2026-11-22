"use client";

// import { Icon } from "@iconify/react";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

export default function NavBar({ darkText = false }: { darkText?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const glass = ""
    //"bg-[#E8D8D8]/80 backdrop-blur-lg";

    return (
        <nav className="absolute z-50 flex h-[7vh] sm:h-[9vh] w-full justify-center font-cormorant">
            <div
                className={`absolute inset-0 h-[7vh] sm:h-[9vh] transition-[background-color,backdrop-filter] duration-200 ease-in ${
                    isScrolled ? glass : ""
                }`}
                aria-hidden="true"
            />
            <main
                    style={{ paddingInline: "clamp(1.25rem, 5vw, 3rem)" }}
                    className={`container relative z-10 flex w-full items-center justify-center transition-colors duration-200 ${
                    isScrolled || darkText ? "text-walnut" : "text-[#E8D8D8]"
                }`}
            >

                <ul className="flex items-center gap-6 sm:gap-10 tracking-wider">
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/Gallery">GALLERY</Link>
                    </li>
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/FAQs">FAQs</Link>
                    </li>
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/ContactUs">CONTACT</Link>
                    </li>
                </ul>
            </main>
        </nav>
    );
}