import Image from "next/image";
import { Cormorant_Garamond } from 'next/font/google';
import ScrollReveal from "./ScrollReveal";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function AboutUsSection() {
    return (
        <main className="flex min-h-screen w-full justify-center items-center bg-[#E5E5E5] px-6 pb-16 pt-34 text-[#3C4032] sm:px-10 lg:px-16">
            <ScrollReveal className="w-full container">
                <section className="flex w-full container flex-col">
                    <p className="text-xl uppercase tracking-widest text-[#3A4235]/90 font-bold">About Us</p>
                    <div className="mt-8 flex flex-col gap-12 md:mt-9 md:flex-row md:justify-evenly md:items-center md:gap-16 lg:gap-24">
                        <div className="w-full max-w-md md:flex-1">
                            <h1 className={` ${cormorant.className} text-6xl font-semibold leading-none sm:text-7xl`}>Casa <span className="italic">Sol</span>az</h1>
                            <p className="mt-5 sm:ms-4 max-w-lg text-lg leading-[1.4] text-[#3C4032]/80 sm:text-xl">
                                Experience the perfect blend of modern comfort and peaceful tranquility at Casa Solaz Tagaytay. Our boutique stay offers beautifully curated spaces and premium comfort tailored to complement Tagaytay&apos;s signature chilly climate. Leave the noise behind, unwind in style, and enjoy a seamless, rejuvenating staycation.
                            </p>
                        </div>
                        <div className="relative mx-auto h-136 w-full max-w-xl sm:h-152 md:mx-0 md:flex-1">
                            <Image src="/Image/HeroPage/Hero.webp" alt="Casa Solaz interior" width={300} height={300} className="absolute left-0 top-0 h-72 w-72 rounded-lg object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"/>
                            <Image src="/Image/HeroPage/Hero.webp" alt="Casa Solaz interior" width={300} height={300} className="absolute bottom-0 right-0 h-72 w-72 rounded-lg object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"/>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}