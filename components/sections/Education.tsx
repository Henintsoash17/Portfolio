import { education } from "@/data/portfolio";

export default function Education() {
    return (
        <section id="formation">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">05 / Formation</div>
                        <h2>Les bases de mon parcours.</h2>
                    </div>
                </div>
                <div className="education">
                    {education.map((item) => (
                        <article className="edu" key={item.year}>
                            <div className="year">{item.year}</div>
                            <h3>{item.title}</h3>
                            <p>{item.school}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
