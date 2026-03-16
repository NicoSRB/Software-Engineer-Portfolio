import { Container, Typography, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Container
      maxWidth="md"
      sx={{ height: "70vh", display: "flex", alignItems: "center" }}
    >
      <Stack spacing={2} textAlign="center" width="100%">
        <Typography variant="h3" fontWeight={600}>
          Building full‑stack software that makes complex workflows simple.
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Software Development · User Centered · Usability
        </Typography>
      </Stack>
    </Container>
  );
}
