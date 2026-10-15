"use client";

import { skillGroups } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

export default function Skills() {
    const { t } = useLanguage();
    return (
        <section id="competences" className="alternate">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">{t.skills.kicker}</div>
                        <h2>{t.skills.title}</h2>
                    </div>
                    <p className="sectionDesc">
                        {t.skills.intro}
                    </p>
                </div>
                <div className="skillsGrid">
                    {skillGroups.map((skill, index) => (
                        <article className="skill" key={skill.title}>
                            <div className="skillHead">
                                <div className="skillIcon" aria-hidden="true">
                                    {skill.icon}
                                </div>
                                <span className="skillCount">
                                    {String(skill.technologies.length).padStart(2, "0")}
                                </span>
                            </div>
                            <h3>{t.skills.items[index].title}</h3>
                            <p>{t.skills.items[index].description}</p>
                            <div
                                className="techGrid"
                                aria-label={`${t.skills.technologies} ${t.skills.items[index].title}`}
                            >
                                {skill.technologies.map((technology) => (
                                    <span className="techMini" key={technology.name}>
                                        <span
                                            className={`techLogo${technology.slug ? " hasLogo" : ""}`}
                                            aria-hidden="true"
                                            style={
                                                technology.slug
                                                    ? {
                                                          backgroundImage: `url(https://cdn.simpleicons.org/${technology.slug})`,
                                                      }
                                                    : undefined
                                            }
                                        >
                                            {technology.mark}
                                        </span>
                                        <span>{technology.name}</span>
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
