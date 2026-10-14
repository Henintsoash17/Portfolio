import { profile } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer>
            <div className="wrap footerin">
                <span>
                    © {new Date().getFullYear()} {profile.name}
                </span>
                <span>Conçu avec Next.js · React · TypeScript</span>
                <a href="#accueil">Retour en haut ↑</a>
            </div>
        </footer>
    );
}
