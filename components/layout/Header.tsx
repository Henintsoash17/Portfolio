"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

const links = ["#apropos", "#experience", "#projets", "#competences", "#contact"];

export default function Header() {
    const [dark, setDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    useEffect(() => {
        document.documentElement.dataset.theme = dark ? "dark" : "light";
    }, [dark]);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="nav">
            <div className="wrap navinner">
                <a className="brand" href="#accueil" onClick={closeMenu}>
                    {profile.initials}
                    <span>.</span>
                </a>
                <nav className={menuOpen ? "navlinks open" : "navlinks"}>
                    {links.map((href, index) => (
                        <a key={href} href={href} onClick={closeMenu}>
                            {t.nav[index]}
                        </a>
                    ))}
                </nav>
                <div className="navright">
                    <button
                        className="iconbtn"
                        onClick={() => setDark(!dark)}
                        aria-label={t.changeTheme}
                        title={t.changeTheme}
                    >
                        {dark ? "☼" : "☾"}
                    </button>
                    <button
                        className="iconbtn languageButton"
                        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                        aria-label={t.changeLanguage}
                        title={t.changeLanguage}
                    >
                        {language === "fr" ? "EN" : "FR"}
                    </button>
                    <a
                        className="btn secondary cvmini"
                        href="/CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t.cv}
                    </a>
                    <button
                        className="iconbtn menuButton"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={
                            menuOpen ? t.menuClose : t.menuOpen
                        }
                    >
                        {menuOpen ? "×" : "☰"}
                    </button>
                </div>
            </div>
        </header>
    );
}
