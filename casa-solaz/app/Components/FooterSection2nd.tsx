"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import ScrollReveal from "./ScrollReveal";

export default function FooterSection2nd() {
    return (
            <footer className="flex h-auto min-h-[65vh] w-full items-center justify-center bg-[#E5E5E5] px-4 py-8 text-[#3C4032] sm:h-auto sm:min-h-[65vh] sm:px-8 sm:py-10 lg:h-[65vh] lg:min-h-0 lg:px-12">
            <ScrollReveal className="h-full w-full">
            <main className="flex h-auto min-h-0 w-full sm:w-full flex-col justify-between rounded-xl bg-[#E9DCD9] p-7 sm:h-auto sm:min-h-87.5 sm:px-20 sm:py-14 lg:h-[90%] lg:min-h-0 lg:px-12 lg:py-12 xl:px-20 xl:py-16">
                <div className="flex w-full flex-col items-start gap-6 border-b border-[#CDB9B2] pb-7 md:flex-row md:items-center md:justify-between md:gap-10 lg:pb-8">
                    <h2 className="max-w-xl text-center text-lg font-semibold leading-tight sm:text-left sm:text-xl lg:text-2xl">
                        Be the first to know about exclusive discounts and upcoming staycation packages at Casa Solaz
                    </h2>
                    <form className="flex w-full max-w-105 items-center rounded-full bg-white p-1.5 md:w-1/2" onSubmit={(event) => event.preventDefault()}>
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="newsletter-email"
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            className="min-w-0 flex-1 bg-transparent px-3 text-sm italic outline-none placeholder:text-[#3C4032] sm:px-4"
                        />
                        <button
                            type="submit"
                            className="rounded-full border border-white bg-[#E9DCD9] px-5 py-2.5 text-sm italic transition-colors hover:bg-[#DCCBC7] sm:px-7"
                        >
                            Join Now
                        </button>
                    </form>
                </div>
                <div className="flex flex-1 w-full flex-col items-start justify-center gap-5 sm:gap-8 md:flex-row lg:gap-4 xl:gap-8 ">
                    <div className="flex w-full justify-center self-center md:w-1/2 lg:w-1/4 xl:w-1/3">
                        <Image
                            src="/Green%20Logo%20with%20trade%20line.svg"
                            alt="Casa Solaz"
                            width={300}
                            height={300}
                            className="h-auto w-full max-w-100"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-evenly gap-5 sm:gap-8 md:w-1/2 lg:w-3/4 lg:flex-row lg:gap-6 xl:w-2/3 xl:gap-20">
                        <div className="w-full p-0 sm:p-6 lg:p-3 xl:p-8">
                            <h2 className="mb-3 text-xl italic text-center xl:text-2xl">Quick Links</h2>
                            <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-base lg:text-start text-center xl:gap-x-10 xl:text-lg">
                                <a href="#about">About Us</a>
                                <a href="#contact">Contact Us</a>
                                <a href="#blog">Blog</a>
                                <a href="#faq">FAQs</a>
                                <a href="#gallery">Gallery</a>
                            </nav>
                        </div>
                        <div className="w-full p-0 sm:p-6 lg:p-3 xl:p-8">
                            <h2 className="mb-3 text-xl italic text-center xl:text-2xl">Our Information</h2>
                            <div className="flex flex-col gap-2 text-base text-center lg:text-start xl:text-lg">
                                <a href="mailto:inquiries@casasolaztagaytay.com">
                                    inquiries@casasolaztagaytay.com
                                </a>
                                <a href="tel:+639175963432">+63 917 596 3432</a>
                                <address className="not-italic">SMDC Wind Residences, Tagaytay City, Cavite</address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 py-2 px-0 sm:p-2 text-lg sm:mt-0 mt-3">
                    <p>&copy; 2026 All rights reserved</p>
                    <div className="flex items-center gap-3" aria-label="Social media links">
                        <a href="#facebook" aria-label="Facebook">
                            <Icon icon="ri:facebook-fill" />
                        </a>
                        <a href="#x" aria-label="X">
                            <Icon icon="ri:twitter-x-fill" />
                        </a>
                        <a href="#instagram" aria-label="Instagram">
                            <Icon icon="ri:instagram-line" />
                        </a>
                        <a href="#tiktok" aria-label="TikTok">
                            <Icon icon="ri:tiktok-fill" />
                        </a>
                    </div>
                </div>
            </main>
            </ScrollReveal>
        </footer>
    );
}