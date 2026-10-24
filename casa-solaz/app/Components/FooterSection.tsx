import Image from "next/image";
import { Icon } from "@iconify/react";
import ScrollReveal from "./ScrollReveal";
import Link from "next/dist/client/link";

export default function FooterSection() {
    return (
            <footer className="flex h-auto min-h-[65vh] w-full items-center justify-center bg-[#E5E5E5] px-4 py-8 text-[#3C4032] sm:h-auto sm:min-h-[65vh] sm:px-8 sm:py-10 lg:h-[65vh] lg:min-h-0 lg:px-12">
            <ScrollReveal className="h-full w-full">
            <main className="flex h-auto min-h-0 w-full sm:w-full flex-col justify-between rounded-xl bg-[#E9DCD9] p-7 sm:h-auto sm:min-h-87.5 sm:px-20 sm:py-14 lg:h-[90%] lg:min-h-0 lg:px-12 lg:py-12 xl:px-20 xl:py-16">
                <div className="flex flex-1 w-full flex-col items-start justify-start gap-5 sm:gap-8 md:flex-row lg:gap-4 xl:gap-8">
                    <div className="flex w-full justify-center self-start md:w-1/2 lg:w-1/4 xl:w-1/3">
                        <Image
                            src="/Green%20Logo%20with%20trade%20line.svg"
                            alt="Casa Solaz"
                            width={300}
                            height={300}
                            className="h-auto w-full max-w-100"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-5 sm:gap-8 md:w-1/2 lg:w-3/4 lg:flex-row lg:items-start lg:gap-6 xl:w-2/3 xl:gap-20">
                        <div className="w-full p-0 sm:p-6 lg:p-3 lg:pt-0 sm:pt-0">
                            <h2 className="mb-3 text-xl italic text-center xl:text-2xl">Quick Links</h2>
                            <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-base lg:text-start text-center xl:gap-y-10 xl:gap-x-10 xl:text-lg">
                                <Link href="/AboutUs">About Us</Link>
                                <Link href="/ContactUs">Contact Us</Link>
                                <Link href="/Blog">Blog</Link>
                                <Link href="/FAQs">FAQs</Link>
                                <Link href="/Gallery">Gallery</Link>
                            </nav>
                        </div>
                        <div className="w-full p-0 sm:p-6 lg:p-3 lg:pt-0 sm:pt-0">
                            <h2 className="mb-3 text-xl italic text-center xl:text-2xl">Our Information</h2>
                            <div className="flex flex-col items-center gap-7 text-center text-base lg:items-start lg:text-start xl:text-lg">
                                <a href="mailto:inquiries@casasolaztagaytay.com" className="flex items-center justify-center gap-2 lg:justify-start">
                                    <Icon icon="carbon:email" />inquiries@casasolaztagaytay.com
                                </a>
                                <a href="tel:+639175963432" className="flex items-center justify-center gap-2 lg:justify-start">
                                    <Icon icon="carbon:phone" />+63 917 596 3432</a>
                                <address className="flex items-center justify-center gap-2 not-italic lg:justify-start">
                                    <Icon icon="carbon:location" />
                                    SMDC Wind Residences, Tagaytay City, Cavite</address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5 py-2 px-0 sm:p-2 text-lg sm:mt-0 mt-3">
                    <p>&copy; 2026 All rights reserved</p>
                    <div className="flex items-center gap-3" aria-label="Social media links">
                        <Link href="https://www.facebook.com/casasolazph" aria-label="Facebook">
                            <Icon icon="ri:facebook-fill" />
                        </Link>
                        <Link href="https://www.threads.com/@casasolaz.ph" aria-label="X">
                            <Icon icon="ri:threads-fill" />
                        </Link>
                        <Link href="https://www.instagram.com/casasolaz.ph/" aria-label="Instagram">
                            <Icon icon="ri:instagram-line" />
                        </Link>
                        <Link href="https://www.tiktok.com/@casasolazph" aria-label="TikTok">
                            <Icon icon="ri:tiktok-fill" />
                        </Link>
                    </div>
                </div>
            </main>
            </ScrollReveal>
        </footer>
    );
}