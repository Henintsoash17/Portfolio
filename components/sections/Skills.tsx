import { skillGroups } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="competences" className="alternate">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">04 / Stack technique</div>
                        <h2>Les outils que j’utilise.</h2>
                    </div>
                    <p className="sectionDesc">
                        Un socle fullstack pour construire des applications web
                        et collaborer dans une équipe de développement.
                    </p>
                </div>
                <div className="skillsGrid">
                    {skillGroups.map((skill) => (
                        <article className="skill" key={skill.title}>
                            <div className="skillHead">
                                <div className="skillIcon" aria-hidden="true">
                                    {skill.icon}
                                </div>
                                <span className="skillCount">
                                    {String(skill.technologies.length).padStart(2, "0")}
                                </span>
                            </div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div
                                className="techGrid"
                                aria-label={`Technologies : ${skill.title}`}
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
