import { projects } from "@/data/portfolio";
import TechnologyTag from "@/components/TechnologyTag";

export default function Projects() {
    return (
        <section id="projets">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">03 / Réalisations</div>
                        <h2>Quelques projets choisis.</h2>
                    </div>
                    <p className="sectionDesc">
                        Une sélection de projets représentatifs de mon parcours.
                        Les liens de démonstration pourront être ajoutés lorsque
                        disponibles.
                    </p>
                </div>
                <div className="projectGrid">
                    {projects.map((project) => (
                        <article className="project" key={project.number}>
                            <div
                                className={`projectVisual projectVisual-${project.number}`}
                                aria-hidden="true"
                            >
                                <span className="projectVisualIndex">
                                    {project.number} / SELECTED WORK
                                </span>
                                <div className="projectMock">
                                    <div className="projectMockBar">
                                        <span />
                                        <span />
                                        <span />
                                        <i>{project.tags[0]}</i>
                                    </div>
                                    <div className="projectMockBody">
                                        <span className="projectMockEyebrow">
                                            {project.note}
                                        </span>
                                        <strong>{project.title}</strong>
                                        <span className="projectMockLine" />
                                        <span className="projectMockLine short" />
                                    </div>
                                </div>
                                <span className="projectVisualOrbit" />
                            </div>
                            <div className="projectTop">
                                <span className="projectNum">
                                    {project.number} / PROJECT
                                </span>
                            </div>
                            <h3>{project.title}</h3>
                            <div className="projectNote">{project.note}</div>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag) => (
                                    <TechnologyTag key={tag} name={tag} />
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
