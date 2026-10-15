"use client";

import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
    const { language, t } = useLanguage();
    return (
        <footer>
            <div className="wrap footerin">
                <span>
                    © {new Date().getFullYear()} {profile.name}
                </span>
                <span>{language === "fr" ? "Conçu avec Next.js · React · TypeScript" : "Built with Next.js · React · TypeScript"}</span>
                <a href="#accueil">{t.footer}</a>
            </div>
        </footer>
    );
}
