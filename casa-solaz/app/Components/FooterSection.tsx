import Image from "next/image";
import { Icon } from "@iconify/react";

export default function FooterSection() {
    return (
            <footer className="flex h-auto min-h-[65vh] w-full items-center justify-center bg-[#E5E5E5] px-4 py-8 text-[#3C4032] sm:h-[65vh] sm:px-8 sm:py-10 lg:px-12">
            <main className="flex h-auto min-h-0 w-full sm:w-[90%] flex-col justify-between rounded-xl bg-[#E9DCD9] p-7 sm:h-[90%] sm:min-h-87.5 sm:px-20 sm:py-14 lg:px-20 lg:py-16">
                <div className="flex flex-1 w-full flex-col items-start justify-center gap-5 sm:flex-row sm:gap-8">
                    <div className="flex w-full sm:w-1/3 self-center">
                        <Image
                            src="/Green%20Logo%20with%20trade%20line.svg"
                            alt="Casa Solaz"
                            width={300}
                            height={300}
                            className="h-auto w-full max-w-100"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-evenly gap-5 sm:w-2/3 sm:flex-row sm:gap-12 lg:gap-20">
                        <div className="w-full p-0 sm:p-6 lg:p-8">
                            <h2 className="mb-3 text-lg italic text-center">Quick Links</h2>
                            <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-base">
                                <a href="#about">About Us</a>
                                <a href="#contact">Contact Us</a>
                                <a href="#blog">Blog</a>
                                <a href="#faq">Frequently Q&amp;As</a>
                                <a href="#gallery">Gallery</a>
                            </nav>
                        </div>
                        <div className="w-full p-0 sm:p-6 lg:p-8">
                            <h2 className="mb-3 text-lg italic text-center">Our Information</h2>
                            <div className="flex flex-col gap-2 text-base text-center sm:text-start">
                                <a href="mailto:inquiries@casasolaztagaytay.com">
                                    inquiries@casasolaztagaytay.com
                                </a>
                                <a href="tel:+639175963432">+63 917 596 3432</a>
                                <address className="not-italic">SMDC Wind Residences, Tagaytay City, Cavite</address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 py-2 px-0 sm:p-2 text-md sm:mt-0 mt-3">
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
        </footer>
    );
}