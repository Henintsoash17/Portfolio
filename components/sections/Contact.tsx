import { profile } from "@/data/portfolio";

export default function Contact() {
    return (
        <section id="contact">
            <div className="wrap">
                <div className="contactBox">
                    <div>
                        <div className="kicker">06 / Contact</div>
                        <h2>Construisons quelque chose ensemble.</h2>
                        <p>
                            Vous recrutez un développeur fullstack ou souhaitez
                            échanger autour d’un projet ? Je serai ravi de
                            discuter avec vous.
                        </p>
                        <a
                            className="btn primary"
                            href={`mailto:${profile.email}`}
                        >
                            Envoyer un e-mail ↗
                        </a>
                    </div>
                    <div className="contactLinks">
                        <a
                            className="contactLink"
                            href={`mailto:${profile.email}`}
                        >
                            <span>
                                <small>E-MAIL</small>
                                <br />
                                {profile.email}
                            </span>
                            <span>↗</span>
                        </a>
                        <a
                            className="contactLink"
                            href={`tel:${profile.phoneHref}`}
                        >
                            <span>
                                <small>TÉLÉPHONE</small>
                                <br />
                                {profile.phone}
                            </span>
                            <span>↗</span>
                        </a>
                        <a
                            className="contactLink"
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Voir le profil GitHub de Henintsoa (nouvel onglet)"
                        >
                            <span>
                                <small>GITHUB</small>
                                <br />
                                github.com/Henintsoash17
                            </span>
                            <span>↗</span>
                        </a>
                        <a
                            className="contactLink"
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Voir le profil LinkedIn de Henintsoa (nouvel onglet)"
                        >
                            <span>
                                <small>LINKEDIN</small>
                                <br />
                                Henintsoa Nirina Ranjohanison
                            </span>
                            <span>↗</span>
                        </a>
                        <div className="contactLink">
                            <span>
                                <small>LOCALISATION</small>
                                <br />
                                {profile.location}
                            </span>
                            <span>⌖</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
