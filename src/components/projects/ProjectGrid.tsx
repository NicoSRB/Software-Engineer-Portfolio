import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/softwareProjects";

interface Props {
  projects: Project[];
  onSelect: (p: Project) => void;
}

export default function ProjectGrid({ projects, onSelect }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      {projects.map(p => (
        <Box
          key={p.id}
          onClick={() => onSelect(p)}
          sx={{
            flex: "1 1 280px",
            cursor: "pointer",
            maxWidth: "350px",
          }}
        >
          <ProjectCard title={p.title} tagline={p.tagline} tech={p.tech} />
        </Box>
      ))}
    </Box>
  );
}
