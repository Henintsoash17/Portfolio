const technologyIcons: Record<string, string> = {
    "Next.js": "nextdotjs",
    TypeScript: "typescript",
    React: "react",
    ".NET": "dotnet",
    "C#": "csharp",
    "SQL Server": "microsoftsqlserver",
    SQL: "sqlite",
    Supabase: "supabase",
    Laravel: "laravel",
    PHP: "php",
};

function getMark(name: string) {
    const marks: Record<string, string> = {
        "Next.js": "N",
        TypeScript: "TS",
        React: "R",
        ".NET": ".N",
        "C#": "C#",
        "SQL Server": "SQL",
        SQL: "SQL",
        Supabase: "S",
        Laravel: "L",
        PHP: "PHP",
    };

    return marks[name] ?? name.slice(0, 2).toUpperCase();
}

export default function TechnologyTag({ name }: { name: string }) {
    const icon = technologyIcons[name];

    return (
        <span className="tag techTag">
            <span
                className={`tagLogo${icon ? " hasTagLogo" : ""}`}
                aria-hidden="true"
                style={
                    icon
                        ? {
                              backgroundImage: `url(https://cdn.simpleicons.org/${icon})`,
                          }
                        : undefined
                }
            >
                {getMark(name)}
            </span>
            <span>{name}</span>
        </span>
    );
}
