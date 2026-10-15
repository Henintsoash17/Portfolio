"use client";

import { experiences } from "@/data/portfolio";
import TechnologyTag from "@/components/TechnologyTag";
import { useLanguage } from "@/components/LanguageProvider";

export default function Experience() {
    const { t } = useLanguage();
    return (
        <section id="experience" className="alternate">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">{t.experience.kicker}</div>
                        <h2>{t.experience.title}</h2>
                    </div>
                    <p className="sectionDesc">
                        {t.experience.intro}
                    </p>
                </div>
                <div className="timeline">
                    {experiences.map((job, index) => (
                        <article className="job" key={job.company}>
                            <div>
                                <div className="date">{t.experience.items[index].date}</div>
                                <div className="role">{t.experience.items[index].role}</div>
                            </div>
                            <div>
                                <div className="company">{job.company}</div>
                                <p>{t.experience.items[index].description}</p>
                                <div className="tags">
                                    {job.tags.map((tag) => (
                                        <TechnologyTag key={tag} name={tag} />
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
