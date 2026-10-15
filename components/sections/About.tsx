"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
    const { t } = useLanguage();
    return (
        <section id="apropos">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">{t.about.kicker}</div>
                        <h2>
                            {t.about.titleFirst}
                            <br />
                            {t.about.titleSecond}
                        </h2>
                    </div>
                    <p className="sectionDesc">
                        {t.about.intro}
                    </p>
                </div>
                <div className="aboutGrid">
                    <div className="aboutPanel">
                        <div className="big">{t.about.engineer}</div>
                        <h3>{t.about.degree}</h3>
                        <p>{t.about.school}</p>
                        <div className="chips">
                            {t.about.qualities.map((quality) => <span className="chip" key={quality}>{quality}</span>)}
                        </div>
                    </div>
                    <div className="aboutCopy">
                        <p>{t.about.paragraphOne}</p>
                        <p>{t.about.paragraphTwo}</p>
                        <div className="chips">
                            {t.about.languages.map((language) => <span className="chip" key={language}>{language}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
