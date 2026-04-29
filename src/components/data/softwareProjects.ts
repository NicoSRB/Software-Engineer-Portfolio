export interface Project {
  id: string;
  title: string;
  tagline: string;
  tech: string[];
  myRole: string;
  problem: string;
  technicalHighlights: string[];
  engineeringChallenges: string[];
  results: string;
  github?: string;
  demo?: string | null;
}

export const softwareProjects: Project[] = [
  {
    id: "Collectivly",
    title: "Collectivly — Digital platform for organizing physical collections",
    tagline:
      "A self-driven product built to help collectors structure, search, and personalize their physical collections.",
    tech: [
      "C#",
      ".NET Core",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Jest",
      "xUnit",
      "GitHub Actions",
    ],
    problem:
      "Collectors often struggle to maintain an overview of large or diverse physical collections. Existing tools are rigid, lack personalization, and do not scale well across different collection types.",
    myRole:
      "I designed and built the full system end-to-end: backend architecture, frontend application, database design, testing strategy, and product direction based on user research.",
    technicalHighlights: [
      "C#/.NET REST API with clean architecture and modular domain boundaries",
      "PostgreSQL schema designed for flexible item types and metadata",
      "React/TypeScript frontend with reusable UI components",
      "Automated test suite with 85% coverage (unit + integration)",
      "CI/CD pipeline for automated builds, tests, and deployments",
      "Performance-focused data access layer using async patterns and optimized queries",
    ],
    engineeringChallenges: [
      "Designed a flexible data model that supports many collection types without schema explosion",
      "Implemented search and filtering logic optimized for large datasets and user-defined metadata",
      "Built an extensible architecture that supports future features like recommendations and tagging",
      "Balanced user-driven requirements with technical constraints through iterative prototyping and testing",
    ],
    results:
      "Delivered a stable, scalable platform with fast data retrieval, high test coverage, and a clear roadmap for future expansion.",
    github: "#",
    demo: null,
  },
  {
    id: "Termnet",
    title: "Termnet — Search engine refactor and search optimization",
    tagline:
      "A project focused on refactoring a console search engine, and database crawler to a microservice architecture and inforcing scalability policies with kubernetes. Along with developing a search optimization wt",
    tech: [
      "C#",
      "Modular arkitektur",
      "Docker",
      "Kubernetes",
      "Redis",
      "React",
      "TypeScript",
    ],
    problem:
      "Refactor monolidich console datacrawler + search engine Complex dataset and entitymodels made it hard to ensure scalability, consistency and effective data handling on the platform. ",
    myRole:
      "I redesigned core data structures, optimized API flows, and built visualization tools that made complex entity relationships easier to understand for both developers and domain experts.",
    technicalHighlights: [
      "Modular C# architecture with clear domain boundaries and improved data consistency",
      "Optimized data structures and relationships for better performance and scalability",
      "Docker-based development environment and Kubernetes deployment",
      "Redis caching layer for faster lookups and reduced API loadt",
      "React/TypeScript frontend for visualizing complex datasets and relationships",
    ],
    engineeringChallenges: [
      "Simplified and redesigned entity models to reduce complexity and improve data quality",
      "Implemented consistent API flows across multiple systems and data sources",
      "Built visualization tools that made large, complex datasets understandable and navigable",
      "Improved performance through caching, optimized queries, and reduced redundancy",
    ],
    results:
      "Delivered a more scalable, robust, and understandable data platform with improved data quality, faster response times, and a significantly better developer and user experience.",
    github: "#",
    demo: null,
  },
  {
    id: "FestivalBooking",
    title: "Festival Vagt Booking System",
    tagline:
      "A system for managing volunteer shifts with a focus on stability, usability, and automation.",
    tech: ["C#", ".NET", "Blazor", "Azure", "Agil udvikling"],
    problem:
      "Festivalens eksisterende vagtbooking var ineffektiv, fejlbehæftet og svær at bruge for ikke‑tekniske frivillige, hvilket førte til manuelle fejl og unødvendigt administrativt arbejde.",
    myRole:
      "I designed and implemented core backend features, developed a user-friendly Blazor UI, and set up a full CI/CD pipeline to ensure stability, automation, and rapid iteration.",
    technicalHighlights: [
      "C#/.NET backend with strong validation and error‑reduction logic",
      "Blazor UI with intuitive workflows for data retrieval and submission",
      "Azure deployment with automated build and release pipelines",
      "CI/CD using GitHub Workflows for continuous integration and deployment",
      "Domain‑driven architecture shaped by real user needs and user stories",
    ],
    engineeringChallenges: [
      "Strengthened backend validation and logic to reduce scheduling errors",
      "Designed a UI accessible to non‑technical volunteers with no training required",
      "Automated the entire build and deployment process for stable, repeatable releases",
      "Built an architecture capable of handling both high load and frequent changes",
    ],
    results:
      "Significantly improved shift planning and administration, reduced manual errors, and delivered faster, more intuitive workflows for volunteers and coordinators.",
    github: "#",
    demo: null,
  },
];
