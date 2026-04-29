import { Box, Container, Typography } from "@mui/material";

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
            React · TypeScript · UI architecture · Component design <br />
            — Clean, fast, scalable interfaces <br />— Reusable components that
            keep products consistent
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 200px" }}>
          <Typography fontWeight={500}>Backend & Data</Typography>
          <Typography color="text.secondary">
            C# · .NET · SQL · Data modeling · API design <br />
            — Structured, reliable backend services <br />— Clear APIs and data
            models that scale
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 200px" }}>
          <Typography fontWeight={500}>Product & Insight</Typography>
          <Typography color="text.secondary">
            User workflows · Analytics · Dashboards · Decision‑support tools{" "}
            <br />
            — Creating software that adds real value for users <br />—
            Optimizing workflows to make daily work simpler and faster
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
