"use client";

import { education } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

export default function Education() {
    const { t } = useLanguage();
    return (
        <section id="formation">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">{t.education.kicker}</div>
                        <h2>{t.education.title}</h2>
                    </div>
                </div>
                <div className="education">
                    {education.map((item, index) => (
                        <article className="edu" key={item.year}>
                            <div className="year">{item.year}</div>
                            <h3>{t.education.items[index].title}</h3>
                            <p>{t.education.items[index].school}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
