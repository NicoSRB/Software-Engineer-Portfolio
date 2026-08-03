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
    id: "Collectily",
    title: "Collectily — Digital platform for organizing physical collections",
    tagline:
      "A self-driven product built to help collectors structure, search, and personalize their physical collections. Github can be shown upon request.",
    tech: [
      "C#",
      ".NET Core",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Azure Cloud",
      "xUnit",
      "GitHub Actions",
    ],
    problem:
      "Collectors often struggle to maintain an overview of large or diverse physical collections. Existing tools are rigid, lack personalization, and do not scale well across different collection types.",
    myRole:
      "I designed and built the full system end-to-end: backend architecture, frontend application, database design, testing strategy, and product direction based on user research.",
    technicalHighlights: [
      "C#/.NET SOLID REST API with clean architecture and modular domain boundaries",
      "PostgreSQL schema designed for flexible item types and metadata",
      "CI/CD pipeline for automated builds, tests, and deployments via Azure",
      "React/TypeScript frontend with reusable UI components",
      "Automated test suite with 85% coverage (unit + integration)",
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
    github: "https://github.com/NicoSRB/Collectily",
  },

  {
    id: "BookTracker",
    title: "Book Tracker — A modern reading management app",
    tagline:
      "A lightweight, full‑stack application for tracking reading progress with a clean UI, GraphQL backend, and real‑time status updates. (Under constuction)",
    tech: [
      "C#",
      ".NET",
      "GraphQL",
      "React",
      "TypeScript",
      "Material UI",
      "Apollo Client",
    ],
    problem:
      "Readers often lack a simple, intuitive way to track what they want to read, what they’re currently reading, and what they’ve finished. Existing tools are cluttered, slow, or overly complex for everyday use.",
    myRole:
      "I designed and built the entire system: backend GraphQL API, frontend UI with Material UI, state management with Apollo Client, and a clean developer‑friendly architecture.",
    technicalHighlights: [
      "C#/.NET GraphQL API with strongly typed schema and mutation support",
      "In‑memory data store with clean domain boundaries and extensible service layer",
      "React + TypeScript frontend using Material UI with a custom dark theme",
      "Apollo Client integration with mutations, refetching, and network‑only queries",
      "Reusable UI components including dynamic status dropdowns and creation forms",
      "Environment‑based configuration for API endpoints",
    ],
    engineeringChallenges: [
      "Ensured consistent ID generation and state synchronization across backend mutations",
      "Resolved TypeScript/MUI inference issues to maintain clean component typing",
      "Implemented a responsive layout with flexible card‑based UI elements",
      "Designed a smooth UX for updating book status directly from the list view",
    ],
    results:
      "Delivered a polished, responsive reading tracker with instant updates, clean UI, and a scalable backend foundation ready for persistence, authentication, and future features.",
    github: "https://github.com/NicoSRB/BookTracker",
  },

  {
    id: "Termnet",
    title:
      "Termnet — Search platform for exploring relationships in large datasets",
    tagline:
      "A project focused on refactoring a console-based search engine and database crawler into a microservice architecture, enforcing scalability policies with Kubernetes, and developing a search optimization workflow.",
    tech: [
      "C#",
      "Microservices",
      "Docker",
      "Kubernetes",
      "Redis",
      "React",
      "TypeScript",
    ],
    problem:
      "Large datasets often contain valuable information that can be difficult to discover because relevant concepts are distributed across many sources. THe goal was to build a search solution that could identify r occurences and exand searches through related concepts.  ",
    myRole:
      "I redesigned the existing architecture, improved search workflows, potimized data handling, and developed visualization tools to make complex search results easier to understand. ",
    technicalHighlights: [
      "Developed search functionality for finding relevant terms across large datasets.",
      "Implemented weighted search explansion based on predefined relationships between concepts.",
      "Refactored the solution into a modular architecture with improved seperation of responsibilities.",
      "Built docker based environments and deployed via Azure services and kubernetes.",
      "Developed react/typescript visualization tools for exploring search results and relationships.",
    ],
    engineeringChallenges: [
      "Simplified and redesigned entity models to reduce complexity and improve data quality",
      "Implemented consistent API flows across multiple systems and data sources",
      "Built visualization tools that made large, complex datasets understandable and navigable",
      "Improved performance through caching, optimized queries, and reduced redundancy",
    ],
    results:
      "Delivered a more scalable, robust, and understandable data platform with improved data quality, faster response times, and a significantly better developer and user experience.",
    github: "https://github.com/NicoSRB/SearchEngineV2",
  },
  {
    id: "FestivalBooking",
    title: "Festival Volunteer Shift Booking System",
    tagline:
      "A system for managing volunteer shifts with a focus on stability, usability, and automation.",
    tech: ["C#", ".NET", "Blazor", "Azure", "Agile development"],
    problem:
      "The festival’s existing shift booking system was inefficient, error‑prone, and difficult for non‑technical volunteers to use, leading to manual mistakes and unnecessary administrative work.",
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
    github: "Not available",
  },
  {
    id: "AuctionService",
    title: "Auction Service — Distributed real‑time bidding backend",
    tagline:
      "A distributed auction backend built with C#, MongoDB, and RabbitMQ, designed for real‑time bid processing, event‑driven workflows, and scalable auction management.",
    tech: [
      "C#",
      ".NET",
      "MongoDB",
      "RabbitMQ",
      "Async/Await",
      "Clean Architecture",
      "Docker",
    ],
    problem:
      "Building a reliable auction system requires handling real‑time bids, ensuring data consistency, and coordinating multiple services. The original prototype lacked structure, scalability, and proper separation of concerns, making it difficult to extend or maintain.",
    myRole:
      "I designed and implemented the core backend architecture, including repositories, controllers, bid‑processing pipeline, RabbitMQ messaging, and MongoDB integration. I also established logging, validation, and error‑handling patterns to ensure a stable and maintainable system.",
    technicalHighlights: [
      "Modular C# architecture with clear separation between controllers, services, repositories, and messaging components",
      "MongoDB integration using strongly typed collections and async operations",
      "RabbitMQ producer/consumer pipeline for real‑time bid ingestion and event handling",
      "BidHandler + BidProcessor pipeline for validating and processing incoming bids",
      "Repository pattern with full CRUD support for auctions and bids",
      "Robust logging and exception handling across all layers",
      "Enum‑based auction status system with safe parsing and validation",
      "Highest‑bid calculation using LINQ and optimized MongoDB queries",
    ],
    engineeringChallenges: [
      "Ensuring consistency between bid events and stored auction state",
      "Designing a repository that supports both admin‑level operations and user‑level queries",
      "Handling real‑time bid ingestion without blocking API threads",
      "Managing RabbitMQ connections safely through a custom connection factory",
      "Avoiding race conditions when multiple bids arrive simultaneously",
      "Structuring the system so it can later scale into microservices",
    ],
    results:
      "Delivered a stable, event‑driven auction backend capable of handling real‑time bidding, consistent auction state, and scalable data operations. The system now has clear boundaries, strong validation, and a messaging pipeline ready for future expansion.",
    github: "https://github.com/NicoSRB/AuctionService",
  },
];
