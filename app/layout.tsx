import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    subsets: ["latin"],
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "Brushify",
    description: "Open source graphic design tool",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${rubik.variable} antialiased font-sans`}>
                {children}
            </body>
        </html>
    );
}
