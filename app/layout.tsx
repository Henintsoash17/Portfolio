import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
    title: "Henintsoa Nirina | Full-Stack Developer",
    description:
        "Portfolio de Henintsoa Nirina Ranjoanison, développeur fullstack à Antananarivo, Madagascar. Next.js, TypeScript, .NET et développement web.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
