import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Cormorant_Garamond } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const cormorant = Cormorant_Garamond({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
//   variable: '--font-cormorant',
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Casa Solaz",
  description: "Experience the perfect blend of modern comfort and peaceful tranquility at Casa Solaz Tagaytay. Our boutique stay offers beautifully curated spaces and premium comfort tailored to complement Tagaytay's signature chilly climate. Leave the noise behind, unwind in style, and enjoy a seamless, rejuvenating staycation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
