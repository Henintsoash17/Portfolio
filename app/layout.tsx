import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Henintsoa Nirina | Développeur Fullstack",
    description:
        "Portfolio de Henintsoa Nirina Ranjoanison, développeur fullstack à Antananarivo, Madagascar. Next.js, TypeScript, .NET et développement web.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}
