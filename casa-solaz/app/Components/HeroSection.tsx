export default function HeroSection() {
	return (
		<section
			className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: "url('/Hero.jpg')" }}
		>
			<div className="text-center text-[#E8D8D8]">
				<h6 className="text-sm uppercase tracking-[0.3em]">
					Where Comfort Meets Elegance
				</h6>
				<h1 className="text-5xl font-semibold md:text-[13rem]">Casa Solaz</h1>
				<button
					type="button"
					className="mt-4 border border-[#3A4235] text-[#3A4235] rounded-lg px-8 py-3 text-sm uppercase tracking-widest transition hover:bg-[#3A4235] hover:text-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#3A4235] focus:ring-offset-2"
				>
					Reserve Now
				</button>
			</div>
		</section>
	);
}
