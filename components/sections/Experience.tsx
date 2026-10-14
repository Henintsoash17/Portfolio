import { experiences } from "@/data/portfolio";
import TechnologyTag from "@/components/TechnologyTag";

export default function Experience() {
    return (
        <section id="experience" className="alternate">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">02 / Parcours</div>
                        <h2>Expérience professionnelle.</h2>
                    </div>
                    <p className="sectionDesc">
                        Des projets concrets qui m’ont fait progresser sur le
                        développement frontend et backend.
                    </p>
                </div>
                <div className="timeline">
                    {experiences.map((job) => (
                        <article className="job" key={job.company}>
                            <div>
                                <div className="date">{job.date}</div>
                                <div className="role">{job.role}</div>
                            </div>
                            <div>
                                <div className="company">{job.company}</div>
                                <p>{job.description}</p>
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
