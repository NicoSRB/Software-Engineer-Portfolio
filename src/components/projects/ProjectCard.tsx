import { Paper, Typography, Stack, Chip } from "@mui/material";

interface ProjectCardProps {
  title: string;
  tagline: string;
  tech: string[];
}

export default function ProjectCard({
  title,
  tagline,
  tech,
}: ProjectCardProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        borderRadius: 3,
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <Typography variant="h6" fontWeight={500}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {tagline}
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: "wrap" }}>
        {tech.map((t, i) => (
          <Chip
            key={i}
            label={t}
            size="small"
            variant="outlined"
            sx={{ mb: 3 }}
          />
        ))}
      </Stack>
      
    </Paper>
  );
}
