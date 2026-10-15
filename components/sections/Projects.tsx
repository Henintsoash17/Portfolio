"use client";

import { projects } from "@/data/portfolio";
import TechnologyTag from "@/components/TechnologyTag";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function Projects() {
    const { t } = useLanguage();
    return (
        <section id="projets">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">{t.projects.kicker}</div>
                        <h2>{t.projects.title}</h2>
                    </div>
                    <p className="sectionDesc">
                        {t.projects.intro}
                    </p>
                </div>
                <div className="projectGrid">
                    {projects.map((project, index) => {
                        const content = (
                            <>
                                <div
                                    className={`projectVisual projectVisual-${project.number}`}
                                >
                                    <span className="projectVisualIndex">
                                        {project.number} / SELECTED WORK
                                    </span>
                                    <div
                                        className={`projectMock${project.image ? " projectMockWithScreenshot" : ""}`}
                                        aria-hidden={project.image ? undefined : true}
                                    >
                                        <div className="projectMockBar">
                                            <span />
                                            <span />
                                            <span />
                                            <i>{project.tags[0]}</i>
                                        </div>
                                        {project.image ? (
                                            <div className="projectScreenshotFrame">
                                                <Image
                                                    className="projectScreenshot"
                                                    src={project.image}
                                                    alt={`${t.projects.imageAlt} ${t.projects.items[index].title}`}
                                                    fill
                                                    sizes="(max-width: 700px) 100vw, 33vw"
                                                />
                                            </div>
                                        ) : (
                                            <div className="projectMockBody">
                                                <span className="projectMockEyebrow">
                                                    {t.projects.items[index].note}
                                                </span>
                                                <strong>{t.projects.items[index].title}</strong>
                                                <span className="projectMockLine" />
                                                <span className="projectMockLine short" />
                                            </div>
                                        )}
                                    </div>
                                    <span className="projectVisualOrbit" aria-hidden="true" />
                                </div>
                                <div className="projectTop">
                                    <span className="projectNum">
                                        {project.number} / PROJECT
                                    </span>
                                </div>
                                <h3>{t.projects.items[index].title}</h3>
                                <div className="projectNote">{t.projects.items[index].note}</div>
                                <p>{t.projects.items[index].description}</p>
                                <div className="tags">
                                    {project.tags.map((tag) => (
                                        <TechnologyTag key={tag} name={tag} />
                                    ))}
                                </div>
                            </>
                        );

                        return (
                            <article className="project" key={project.number}>
                                {project.href ? (
                                    <a
                                        className="projectLink"
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${t.projects.items[index].title} — ouvrir dans un nouvel onglet`}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
