export const profile = {
  initials: "RHN",
  name: "RANJOHANISON Henintsoa Nirina",
  shortName: "Henintsoa",
  title: "Développeur Fullstack",
  location: "Antananarivo, Madagascar",
  email: "henintsoawrc@gmail.com",
  github: "https://github.com/Henintsoash17",
  linkedin: "https://www.linkedin.com/in/henintsoa-nirina-ranjohanison-025537399/",
  phone: "+261 34 79 183 73",
  phoneHref: "+261347918373",
  availability: "Disponible pour de nouvelles opportunités",
  summary: "Développeur fullstack diplômé d’un Master Professionnel en Informatique. J’aime transformer les besoins métier en applications fiables, claires et évolutives.",
};

export const experiences = [
  { date: "JUIN — NOV. 2025", company: "TOMATE Madagascar", role: "Stagiaire développeur fullstack · Antananarivo", description: "Développement du module de gestion commerciale TomVente pour une plateforme ERP d’entreprise. Création d’une interface Next.js connectée à des API .NET (C#) et intégration avec l’écosystème ERP existant.", tags: ["Next.js", "TypeScript", "C#", ".NET", "API REST"] },
  { date: "AOÛT — NOV. 2023", company: "UN-IT", role: "Stagiaire développeur web · Fianarantsoa", description: "Conception d’une plateforme e-commerce de produits électroniques. Modélisation des données avec Supabase et développement d’une interface Next.js fluide, avec attention portée au référencement.", tags: ["Next.js", "Supabase", "E-commerce", "SEO"] },
  { date: "OCT. — DÉC. 2022", company: "UPNNC / SSECALINA", role: "Stagiaire développeur web · Antananarivo", description: "Développement d’une application web de gestion de stock avec Laravel pour améliorer le suivi des mouvements de stock et automatiser les alertes de réapprovisionnement.", tags: ["Laravel", "PHP", "Gestion de stock", "SQL"] },
];

export const projects = [
  { number: "01", title: "TomVente — ERP commercial", description: "Module de gestion commerciale conçu pour s’intégrer à un ERP d’entreprise : clients, catalogue, devis, commandes, expéditions, factures et paiements.", tags: ["Next.js", "TypeScript", ".NET", "SQL Server"], note: "Projet professionnel" },
  { number: "02", title: "Plateforme e-commerce", description: "Application de vente en ligne de produits électroniques, avec une interface réactive et une base de données hébergée sur Supabase.", tags: ["Next.js", "React", "Supabase"], note: "Stage chez UN-IT" },
  { number: "03", title: "Gestion de stock", description: "Application web destinée au suivi des stocks et à l’automatisation des alertes de réapprovisionnement.", tags: ["Laravel", "PHP", "SQL"], note: "Stage UPNNC / SSECALINA" },
];

export const skillGroups = [
  {
    icon: "✳",
    title: "Frontend",
    description: "Des interfaces accessibles, réactives et soignées.",
    technologies: [
      { name: "React", mark: "R", slug: "react" },
      { name: "Next.js", mark: "N", slug: "nextdotjs" },
      { name: "TypeScript", mark: "TS", slug: "typescript" },
      { name: "Angular", mark: "A", slug: "angular" },
      { name: "Vue.js", mark: "V", slug: "vuedotjs" },
      { name: "Nuxt", mark: "N", slug: "nuxt" },
      { name: "HTML5", mark: "5", slug: "html5" },
      { name: "CSS3", mark: "3", slug: "css3" },
    ],
  },
  {
    icon: "⌘",
    title: "Backend",
    description: "Des API fiables et des services faciles à faire évoluer.",
    technologies: [
      { name: ".NET", mark: ".N", slug: "dotnet" },
      { name: "C#", mark: "C#", slug: "csharp" },
      { name: "ASP.NET", mark: "A", slug: "dotnet" },
      { name: "Node.js", mark: "N", slug: "nodedotjs" },
      { name: "Express", mark: "Ex", slug: "express" },
      { name: "NestJS", mark: "N", slug: "nestjs" },
      { name: "Java", mark: "J", slug: "openjdk" },
      { name: "Python", mark: "Py", slug: "python" },
      { name: "Go", mark: "Go", slug: "go" },
    ],
  },
  {
    icon: "▤",
    title: "Bases de données",
    description: "Modélisation, requêtes et stockage de données.",
    technologies: [
      { name: "SQL Server", mark: "SQL", slug: "microsoftsqlserver" },
      { name: "MySQL", mark: "My", slug: "mysql" },
      { name: "PostgreSQL", mark: "Pg", slug: "postgresql" },
      { name: "MongoDB", mark: "M", slug: "mongodb" },
      { name: "Supabase", mark: "S", slug: "supabase" },
      { name: "Firebase", mark: "F", slug: "firebase" },
    ],
  },
  {
    icon: "↗",
    title: "Outils & méthodes",
    description: "Du travail d’équipe aux workflows de livraison.",
    technologies: [
      { name: "Git", mark: "Git", slug: "git" },
      { name: "GitHub Actions", mark: "GH", slug: "githubactions" },
      { name: "Docker", mark: "D", slug: "docker" },
      { name: "Agile / Scrum", mark: "Ag", slug: null },
      { name: "UML", mark: "U", slug: null },
      { name: "Merise", mark: "M", slug: null },
      { name: "Selenium", mark: "Se", slug: "selenium" },
    ],
  },
  {
    icon: "▣",
    title: "Développement mobile",
    description: "Des expériences mobiles multiplateformes.",
    technologies: [
      { name: "Flutter", mark: "F", slug: "flutter" },
      { name: "React Native", mark: "RN", slug: "reactnative" },
      { name: "Expo", mark: "Ex", slug: "expo" },
    ],
  },
  {
    icon: "◉",
    title: "Données & automatisation",
    description: "Valoriser la donnée et automatiser les tâches répétitives.",
    technologies: [
      { name: "Power BI", mark: "BI", slug: "powerbi" },
      { name: "Science des données", mark: "SD", slug: null },
      { name: "Selenium", mark: "Se", slug: "selenium" },
    ],
  },
];

export const education = [
  { year: "2023 — 2025", title: "Master Professionnel en Informatique", school: "ENI — École Nationale d’Informatique, Fianarantsoa" },
  { year: "2020 — 2023", title: "Licence Professionnelle en Informatique", school: "ENI — École Nationale d’Informatique, Fianarantsoa" },
];
