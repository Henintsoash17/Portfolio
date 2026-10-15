"use client";

import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
    const { t } = useLanguage();
    return (
        <section id="contact">
            <div className="wrap">
                <div className="contactBox">
                    <div>
                        <div className="kicker">{t.contact.kicker}</div>
                        <h2>{t.contact.title}</h2>
                        <p>{t.contact.intro}</p>
                        <a
                            className="btn primary"
                            href={`mailto:${profile.email}`}
                        >
                            {t.contact.emailButton} ↗
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
                                <small>{t.contact.phone}</small>
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
                            aria-label={t.contact.githubLabel}
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
                            aria-label={t.contact.linkedinLabel}
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
                                <small>{t.contact.location}</small>
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
