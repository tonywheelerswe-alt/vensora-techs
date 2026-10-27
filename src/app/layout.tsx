import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vensora Tech — IT Consulting That Moves Business Forward",
  description:
    "Vensora Tech is an IT consulting partner for cloud, cybersecurity, AI, and custom software. We design, build, and run technology that scales with your business.",
  keywords: [
    "IT consulting",
    "cloud migration",
    "cybersecurity",
    "AI solutions",
    "software development",
    "Vensora Tech",
  ],
  openGraph: {
    title: "Vensora Tech — IT Consulting",
    description: "Cloud, cybersecurity, AI, and custom software consulting.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
