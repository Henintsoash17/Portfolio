"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getTranslations, type Language } from "@/data/translations";

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: ReturnType<typeof getTranslations>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("fr");

    useEffect(() => {
        const savedLanguage = window.localStorage.getItem("portfolio-language");
        if (savedLanguage === "fr" || savedLanguage === "en") {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        const description = document.querySelector<HTMLMetaElement>("meta[name='description']");
        if (description) {
            description.content = language === "en"
                ? "Portfolio of Henintsoa Nirina Ranjoanison, full-stack developer based in Antananarivo, Madagascar. Next.js, TypeScript, .NET, and web development."
                : "Portfolio de Henintsoa Nirina Ranjoanison, développeur fullstack à Antananarivo, Madagascar. Next.js, TypeScript, .NET et développement web.";
        }
        window.localStorage.setItem("portfolio-language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: getTranslations(language) }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}