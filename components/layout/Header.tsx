"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
    ["À propos", "#apropos"],
    ["Expérience", "#experience"],
    ["Projets", "#projets"],
    ["Compétences", "#competences"],
    ["Contact", "#contact"],
];

export default function Header() {
    const [dark, setDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
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
                    {links.map(([label, href]) => (
                        <a key={href} href={href} onClick={closeMenu}>
                            {label}
                        </a>
                    ))}
                </nav>
                <div className="navright">
                    <button
                        className="iconbtn"
                        onClick={() => setDark(!dark)}
                        aria-label="Changer le thème"
                        title="Changer le thème"
                    >
                        {dark ? "☼" : "☾"}
                    </button>
                    <a
                        className="btn secondary cvmini"
                        href="/CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Voir mon CV ↗
                    </a>
                    <button
                        className="iconbtn menuButton"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={
                            menuOpen ? "Fermer le menu" : "Ouvrir le menu"
                        }
                    >
                        {menuOpen ? "×" : "☰"}
                    </button>
                </div>
            </div>
        </header>
    );
}
