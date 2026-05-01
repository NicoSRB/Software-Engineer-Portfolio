import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectTabs from "./ProjectTabs";
import ProjectModal from "./ProjectModal";
import { softwareProjects } from "../data/softwareProjects";
import { dataProjects } from "../data/dataProjects";
import type { Project } from "../data/softwareProjects";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1rem" }}
    >
      <h2
        style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "1.5rem" }}
      >
        Projects
      </h2>

      <ProjectTabs
        software={
          <ProjectGrid projects={softwareProjects} onSelect={setSelected} />
        }
        data={<ProjectGrid projects={dataProjects} onSelect={setSelected} />}
      />

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
