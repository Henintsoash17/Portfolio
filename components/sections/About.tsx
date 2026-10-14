export default function About() {
    return (
        <section id="apropos">
            <div className="wrap">
                <div className="sectionHead">
                    <div>
                        <div className="kicker">01 / À propos</div>
                        <h2>
                            Un profil polyvalent,
                            <br />
                            orienté solutions.
                        </h2>
                    </div>
                    <p className="sectionDesc">
                        Du besoin métier jusqu’à la mise en œuvre technique, je
                        m’intéresse à toutes les étapes d’un produit logiciel.
                    </p>
                </div>
                <div className="aboutGrid">
                    <div className="aboutPanel">
                        <div className="big">Ingénieur en informatique</div>
                        <h3>Master Professionnel en Informatique</h3>
                        <p>
                            ENI — École Nationale d’Informatique, Fianarantsoa
                        </p>
                        <div className="chips">
                            <span className="chip">Autonomie</span>
                            <span className="chip">Esprit d’équipe</span>
                            <span className="chip">Rigueur</span>
                            <span className="chip">Adaptabilité</span>
                        </div>
                    </div>
                    <div className="aboutCopy">
                        <p>
                            Mon expérience chez TOMATE m’a permis de travailler
                            sur un module de gestion commerciale au sein d’un
                            ERP, en reliant une interface moderne en Next.js à
                            des API .NET. J’ai également participé à la création
                            d’une plateforme e-commerce et d’un outil de gestion
                            de stock.
                        </p>
                        <p>
                            Je cherche à continuer à progresser au contact
                            d’équipes techniques, à contribuer à des projets
                            concrets et à écrire du code maintenable. J’apprends
                            rapidement de nouveaux outils et j’accorde de
                            l’importance à la communication et à la
                            compréhension du besoin.
                        </p>
                        <div className="chips">
                            <span className="chip">Français — courant</span>
                            <span className="chip">Anglais — technique</span>
                            <span className="chip">Madagascar</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
