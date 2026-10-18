"use client";

import Logo from "@/app/Components/Logo";
import { Icon } from "@iconify/react";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

export default function NavBar({ darkText = false }: { darkText?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const glass = "bg-[#E8D8D8]/80 backdrop-blur-lg";

    return (
        <nav className="fixed z-10 flex h-[10vh] w-full justify-center font-cormorant">
            <div
                className={`absolute inset-0 h-[10vh] transition-[background-color,backdrop-filter] duration-200 ease-in ${
                    isScrolled ? glass : ""
                }`}
                aria-hidden="true"
            />

            <main
                className={`container relative z-10 flex w-full items-center justify-between sm:px-0 px-5 transition-colors duration-200 ${
                    isScrolled || darkText ? "text-[#3A4235]" : "text-[#E8D8D8]"
                }`}
            >
                <div>
                    <Logo className="sm:h-12 h-10 w-auto transition-colors duration-300 ease-in-out" />
                </div>
                <button
                    type="button"
                    className="md:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                    <Icon
                        icon={isMenuOpen ? "material-symbols:close" : "material-symbols:menu"}
                        className="h-7 w-7"
                        aria-hidden="true"
                    />
                </button>
                <ul className="hidden md:flex md:items-center md:gap-8">
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/AboutUs">About Us</Link>
                    </li>
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/FAQs">FAQs</Link>
                    </li>
                    <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                        <Link href="/ContactUs">Contact Us</Link>
                    </li>
                </ul>
            </main>
            <ul
                className={`absolute left-0 top-full z-10 flex w-full flex-col gap-4 overflow-hidden px-4 py-5 text-[#3A4235] transition-[background-color,backdrop-filter,max-height,opacity] duration-300 ease-in-out md:hidden ${glass} ${
                    isMenuOpen
                        ? "pointer-events-auto max-h-60 opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                }`}
            >
                <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                    <Link href="/">Home</Link>
                </li>
                <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                    <Link href="/AboutUs">About Us</Link>
                </li>
                <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                    <Link href="/FAQs">FAQs</Link>
                </li>
                <li className="transition-colors duration-300 ease-in-out hover:text-[#E8D8D8]">
                    <Link href="/ContactUs">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}