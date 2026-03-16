import type { Project } from "./softwareProjects";

export const dataProjects: Project[] = [
  {
    id: "WhiskeyChatbot",
    title: "WhiskeyChatbot — ML‑based recommendation assistant",
    tagline:
      "A chatbot that recommends whiskeys based on flavor profiles and NLP‑driven models.",
    tech: ["Python", "Flask", "NLP", "React", "TypeScript"],

    problem:
      "Users often struggle to find whiskey recommendations that match their personal taste preferences. Existing tools are generic, static, and lack personalization based on flavor profiles or user input.",

    myRole:
      "I designed and built an ML‑driven chatbot that combines NLP, classification models, and flavor‑based filtering. I developed both the Flask API and the React interface, and worked on data processing, feature engineering, and iterative model improvements.",

    technicalHighlights: [
      "Python‑based ML pipeline combining classification, content‑based filtering, and sentiment analysis",
      "Flask API for serving recommendations and handling conversational logic",
      "React/TypeScript frontend for a smooth, interactive chat experience",
      "Custom feature engineering based on whiskey flavor profiles and tasting notes",
      "Iterative model tuning using real user queries and feedback",
    ],

    engineeringChallenges: [
      "Built a recommendation model that balances flavor similarity with user‑specific preferences",
      "Processed unstructured tasting notes using NLP techniques to extract meaningful features",
      "Designed a conversational flow that feels natural while still being data‑driven",
      "Integrated ML inference into a lightweight API without compromising performance",
    ],

    results:
      "Delivered a functional prototype capable of matching users with relevant whiskey profiles based on flavor characteristics, user input, and ML‑driven insights.",

    github: "#",
    demo: null,
  },
];
