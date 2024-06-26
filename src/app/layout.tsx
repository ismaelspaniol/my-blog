import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <div className="flex flex-col h-screen">
                    <article className="p-2 pb-5 text-center text-3xl">
                        <h1>Ismael Spaniol Dev</h1>
                    </article>
                    <nav>
                        <Navbar></Navbar>
                    </nav>
                    <div className="flex-grow mx-auto max-w-screen-md">
                        {children}
                    </div>

                    <footer className="bg-gray-800 text-white text-center py-4">
                        <p>&copy; 2024. Todos os direitos reservados.</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
