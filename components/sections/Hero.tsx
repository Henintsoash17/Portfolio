"use client";

import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { language, t } = useLanguage();
  return (
    <section className="hero" id="accueil">
      <div className="wrap heroGrid">
        <div>
          <div className="eyebrow">
            <span className="dot" /> {t.profile.availability}
          </div>

          <h1>
            {t.hero.headlineFirst}
            <br />
            {t.hero.headlineSecond} <span className="green">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="lead">
            {t.hero.introPrefix} <strong>{profile.shortName}</strong>, {t.profile.summary}
          </p>

          <div className="actions">
            <a className="btn primary" href="#projets">
              {t.hero.projects} <span>↘</span>
            </a>
            <a className="btn secondary" href="#contact">
              {t.hero.contact} <span>↗</span>
            </a>
          </div>

          <div className="heroMeta">
            <span>📍 {profile.location}</span>
            <span>•</span>
            <span>Fullstack Web</span>
          </div>
        </div>

        <div className="heroCard" aria-label={t.hero.codePreview}>
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
              role: <span className="c-green">&quot;{language === "fr" ? "Développeur Fullstack" : "Full-stack Developer"}&quot;</span>,
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
              <span>{t.hero.fullstack}</span>
            </div>

            <div className="stat">
              <strong>{t.hero.curious}</strong>
              <span>{t.hero.learning}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}