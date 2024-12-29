import type { Metadata } from "next";
import "./globals.css";
import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import RootProvider from "@/components/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SnkrSearch | Search and Compare Sneaker from 10+ Platforms",
  description:
    "SnkrSearch is a web application designed to collect data from multiple sneaker retailers. The app automatically scrapes real-time sneaker prices, availability, and other product details from various online stores. Users can easily compare prices and find the best deals across different retailers without having to visit each site individually. Built using modern web technologies, this app offers a fast, user-friendly interface and provides insights like price history, stock status, and new sneaker releases. Ideal for sneakerheads and bargain hunters looking to stay ahead in the ever-changing sneaker market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased min-h-screen w-full",
          fontSans.variable
        )}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
