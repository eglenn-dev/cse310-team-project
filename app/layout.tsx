import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PyCode Educator",
    description:
        "Educational resources for Python programming geared towards beginners.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
            </head>
            <body className={inter.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
