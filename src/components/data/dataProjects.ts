import type { Project } from "./softwareProjects";

export const dataProjects: Project[] = [
  {
    id: "WhiskeyChatbot",
    title: "ML‑baseret chatbot til whiskey‑anbefalinger",
    tagline:
      "Chatbot der giver anbefalinger baseret på smagsprofiler og NLP‑modeller.",
    tech: ["Python", "Flask", "NLP", "React", "TypeScript"],
    problem:
      "Brugere mangler et let tilgængeligt værktøj til at finde whiskey‑anbefalinger baseret på individuelle smagspræferencer.",
    approach:
      "Udviklede en ML‑drevet chatbot, der kombinerer klassifikation, content‑based filtering og sentiment analysis. Byggede et Flask‑API og en React‑frontend som et digitalt beslutningsstøtteværktøj. Arbejdede med databehandling, feature engineering og iterative model‑forbedringer.",
    results:
      "Leverede en funktionel prototype, der kan matche brugere med relevante whiskey‑profiler baseret på data og smagskarakteristika.",
    github: "#",
    demo: null,
  },
];
