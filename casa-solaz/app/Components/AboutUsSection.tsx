import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const GOALS = [
	["Our mission", "To provide guests with a safe, comfortable, and home-like stay while delivering excellent customer service."],
	["Our vision", "To become one of the top-rated short-term rentals in the area known for comfort, convenience, and quality service."],
] as const;

export default function AboutUsSection() {
	return (
		<main className="flex min-h-screen w-full items-center justify-center bg-soft-white px-6 pb-16 pt-16 text-walnut sm:px-10 lg:px-16">
			<ScrollReveal className="container w-full">
				<section className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] md:gap-16">
					<div className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-2xl md:max-w-none">
						<Image
							src="/Image/AboutUs/AboutUs.webp"
							alt="Casa Solaz interior"
							fill
							sizes="(min-width: 768px) 36vw, 90vw"
							className="object-cover"
						/>
					</div>
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.25em] text-moss-green sm:text-base">About Casa Solaz</p>
						<h1 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
							<span className="block">A cozy stay, just like home.</span>
							<span className="block">Your place to feel at home.</span>
						</h1>
						<p className="mt-8 text-base leading-relaxed">
							A cozy and thoughtfully designed staycation space where comfort meets calm. Whether you&rsquo;re unwinding, celebrating, or simply taking a break, Casa Solaz is your home away from home, made for moments worth remembering.
						</p>
						<div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
							{GOALS.map(([title, text]) => (
								<div key={title} className="border-t border-walnut/10 pt-3">
									<h2 className="text-sm font-bold text-moss-green">{title}</h2>
									<p className="mt-2 text-sm leading-[1.75] text-walnut/70">{text}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</ScrollReveal>
		</main>
	);
}
