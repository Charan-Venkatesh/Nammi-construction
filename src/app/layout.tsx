import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import PersistentLayout from "@/components/PersistentLayout";
import CustomCursor from "@/components/CustomCursor";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nammi Construction | Foundations of Strength",
  description: "Creating Landmarks, Earning Trust. Precision construction and design services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${oswald.variable} antialiased font-sans bg-white text-nammi-navy overflow-x-hidden`}
      >
        <CustomCursor />
        <PersistentLayout>
          {children}
        </PersistentLayout>
      </body>
    </html>
  );
}
