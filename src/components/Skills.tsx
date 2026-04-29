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
            React · TypeScript · UI architecture · Component design <br />—
            Building clean, scalable interfaces with reusable components <br />—
            Structuring UI logic for clarity and long‑term maintainability{" "}
            <br />— Turning complex workflows into intuitive, user‑friendly
            experiences
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 200px" }}>
          <Typography fontWeight={500}>Backend & Data</Typography>
          <Typography color="text.secondary">
            C# · .NET · SQL · Data modeling · API design <br />— Designing
            robust backend systems with clear domain boundaries <br />— Creating
            predictable, well‑structured APIs for real‑world usage <br />
            — Modeling data for consistency, scalability, and performance <br />
            — Working with both relational and NoSQL databases
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 200px" }}>
          <Typography fontWeight={500}>Product & Insight</Typography>
          <Typography color="text.secondary">
            User workflows · Analytics · Dashboards · Decision‑support tools{" "}
            <br />
            — Understanding how people work and shaping software around their
            needs <br />— Simplifying messy processes into structured, efficient
            workflows <br />— Building dashboards and insights that support
            better decisions <br />— Focusing on usability and real‑world impact
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
