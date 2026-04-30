import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import type { Project } from "../data/softwareProjects";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{project.title}</DialogTitle>

      <DialogContent dividers>
        <Typography>
          <strong>Problem:</strong> {project.problem}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>My Role:</strong> {project.myRole}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Technical Highlights:</strong>
        </Typography>
        <List dense>
          {project.technicalHighlights?.map((item: string, index: number) => (
            <ListItem key={index} sx={{ display: "list-item", pl: 4 }}>
              - {item}
            </ListItem>
          ))}
        </List>
        <Typography sx={{ mt: 1 }}>
          <strong>Engineering challenges & solutions:</strong>
        </Typography>
        <List dense>
          {project.engineeringChallenges?.map((item: string, index: number) => (
            <ListItem key={index} sx={{ display: "list-item", pl: 4 }}>
              - {item}
            </ListItem>
          ))}
        </List>
        <Typography sx={{ mt: 1 }}>
          <strong>Results:</strong> {project.results}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Github:</strong> {project.github}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Demo:</strong> {project.demo}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
