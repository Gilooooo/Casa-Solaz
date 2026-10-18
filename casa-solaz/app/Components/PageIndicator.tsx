export default function PageIndicator({ namePage }: { namePage: string }) {
    return (
        <main className="flex h-[60vh] md:h-[70vh] items-center justify-center w-full bg-neutral-200">
            <div className="flex items-center justify-center bg-cover bg-center bg-black/35 bg-blend-multiply h-[65%] w-[82%] rounded-lg"
            style={{ backgroundImage: "url('/Image/HeroPage/Hero.webp')" }}>
                <h1 className="text-7xl font-semibold text-center text-[#EADBD8]">{namePage}</h1>
            </div>
        </main>
    );
}