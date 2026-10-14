import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="wrap heroGrid">
        <div>
          <div className="eyebrow">
            <span className="dot" /> {profile.availability}
          </div>

          <h1>
            Je construis
            <br />
            des produits <span className="green">web utiles.</span>
          </h1>

          <p className="lead">
            Je suis <strong>{profile.name}</strong>, {profile.summary}
          </p>

          <div className="actions">
            <a className="btn primary" href="#projets">
              Découvrir mes projets <span>↘</span>
            </a>
            <a className="btn secondary" href="#contact">
              Me contacter <span>↗</span>
            </a>
          </div>

          <div className="heroMeta">
            <span>📍 {profile.location}</span>
            <span>•</span>
            <span>Fullstack Web</span>
          </div>
        </div>

        <div className="heroCard" aria-label="Aperçu de code">
          <div className="codeTop">
            <span>developer.ts</span>
            <span className="lights">
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="code">
            <div>
              <span className="c-muted">const</span> developer = {"{"}
            </div>

            <div className="indent">
              name: <span className="c-green">&quot;Henintsoa&quot;</span>,
            </div>

            <div className="indent">
              role: <span className="c-green">&quot;Fullstack Développeur&quot;</span>,
            </div>

            <div className="indent">stack: [</div>

            <div className="indent2">
              <span className="c-orange">&quot;Next.js&quot;</span>,{" "}
              <span className="c-orange">&quot;TypeScript&quot;</span>,
            </div>

            <div className="indent2">
              <span className="c-orange">&quot;.NET&quot;</span>,{" "}
              <span className="c-orange">&quot;LARAVEL&quot;</span>,{" "}
              <span className="c-orange">&quot;SQL&quot;</span>
            </div>

            <div className="indent">],</div>

            <div className="indent">
              mindset:{" "}
              <span className="c-green">&quot;Always learning&quot;</span>
            </div>

            <div>{"};"}</div>

            <div className="codeComment">
              {"// Let’s build something great."}
            </div>
          </div>

          <div className="miniStats">
            <div className="stat">
              <strong>Fullstack</strong>
              <span>Du front au back</span>
            </div>

            <div className="stat">
              <strong>Curieux</strong>
              <span>Apprentissage continu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}