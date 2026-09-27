export default function HeroSection() {
	return (
		<section
			className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: "url('/Image/HeroPage/Hero.jpg')" }}
		>
			<div className="text-center text-[#E8D8D8] container">
				<h6 className="text-xs sm:text-sm uppercase tracking-[0.3em]">
					Where Comfort Meets Elegance
				</h6>
				<h1 className="text-7xl font-semibold sm:text-[10rem] md:text-[13rem]">Casa Solaz</h1>
				<button
					type="button"
					className="mt-4 text-[#E8D8D8] bg-[#3A4235] rounded-lg px-8 py-3 text-sm uppercase tracking-widest transition hover:bg-[#E8D8D8] hover:text-[#3A4235] focus:outline-none focus:ring-2 focus:ring-[#3A4235] focus:ring-offset-2 transtition-colors duration-200 ease-in-out" 
				>
					Reserve Now
				</button>
			</div>
		</section>
	);
}
