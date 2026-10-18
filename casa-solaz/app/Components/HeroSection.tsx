import Link from 'next/dist/client/link';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function HeroSection() {
	return (
		<section
			className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: "url('/Image/HeroPage/Hero.webp')" }}
		>
			<div className="hero-content-enter container text-center text-[#E8D8D8]">
				<h6 className="text-xs md:text-sm uppercase tracking-[0.3em]">
					Where Comfort Meets Elegance
				</h6>
				<h1 className={`${cormorant.className} text-7xl font-semibold sm:text-[9rem] md:text-[10rem] lg:text-[13rem] mb-3`}>Casa <span className="italic">Sol</span>az</h1>
				<Link
					href="/ContactUs"
					type="button"
					className="text-[#E8D8D8] bg-[#3A4235] rounded-lg px-8 py-3 text-sm uppercase tracking-widest transition hover:bg-[#E8D8D8] hover:text-[#3A4235] focus:outline-none focus:ring-2 focus:ring-[#3A4235] focus:ring-offset-2 transtition-colors duration-200 ease-in-out" 
					
				>
					Reserve Now
				</Link>
			</div>
		</section>
	);
}
