import Image from "next/image";

export default function AboutUsSection() {
    return (
        <main className="flex justify-center min-h-[75vh] bg-amber-700 w-full text-white py-12 px-4">
            <section className="flex flex-col justify-center items-center container max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-start mb-12">About Us</h1>
                <div className="flex flex-col md:flex-row items-center gap-8">    
                    <div className="flex-1 w-full">
                        <h2 className="text-3xl font-semibold">Casa Solaz</h2>
                        <p className="text-lg mt-4 leading-relaxed">
                            Experience the perfect blend of modern comfort and peaceful tranquility at Casa Solaz Tagaytay. Our boutique stay offers beautifully curated spaces and premium comfort tailored to complement Tagaytay’s signature chilly climate. Leave the noise behind, unwind in style, and enjoy a seamless, rejuvenating staycation.
                        </p>
                    </div>
                    <div className="flex-1 w-full flex justify-center items-center gap-4">
                        <Image src="/Hero.jpg" alt="Casa Solaz interior" width={300} height={300} className="rounded-lg object-cover w-1/2 h-auto"/>
                        <Image src="/Hero.jpg" alt="Casa Solaz interior" width={300} height={300} className="rounded-lg object-cover w-1/2 h-auto"/>
                    </div>
                </div>
            </section>
        </main>
    );
}