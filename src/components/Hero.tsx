import { Container, Typography, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Container
      maxWidth="md"
      sx={{ height: "70vh", display: "flex", alignItems: "center" }}
    >
      <Stack spacing={2} textAlign="center" width="100%">
        <Typography variant="h3" fontWeight={600}>
          Building software solutions where data, technology and user needs come together. 
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Software development · Data-driven solutions · C#/.NET,
          React/TypeScript · Azure · AI integration · Cloud architecture ·
          User‑Centered Design
        </Typography>
      </Stack>
    </Container>
  );
}
