import { Box, Container, Stack, Typography } from "@mui/material";

export default function Skills() {
  return (
    <Container id="skills" maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={500} sx={{ mb: 4 }}>
        Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Box sx={{ flex: "1 1 200px" }}>
          <Typography fontWeight={500}>Frontend Experience</Typography>
          <Typography color="text.secondary">
            React, TypeScript, UI architecture, component design
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 200px" }}>
          <Typography fontWeight={500}>Backend & Data</Typography>
          <Typography color="text.secondary">
            C#, .NET, SQL, data modeling, API design
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 200px" }}>
          <Typography fontWeight={500}>Product & Insight</Typography>
          <Typography color="text.secondary">
            User workflows, analytics, dashboards, decision‑support tools
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
