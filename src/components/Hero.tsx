import { Container, Typography, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Container
      maxWidth="md"
      sx={{ height: "70vh", display: "flex", alignItems: "center" }}
    >
      <Stack spacing={2} textAlign="center" width="100%">
        <Typography variant="h3" fontWeight={600}>
          Building reliable full‑stack applications with a focus on usability,
          structure, and real‑world impact
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Full‑stack development · C#, .NET, React, TypeScript · Clean
          Architecture · User‑Centered Design · Workflow Automation · Usability
          & Accessibility · CI/CD
        </Typography>
      </Stack>
    </Container>
  );
}
