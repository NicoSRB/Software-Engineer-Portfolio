import { Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container id="contact" maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={500} sx={{ mb: 2 }}>
        Contact
      </Typography>

      <Typography color="text.secondary">
        Reach me at <a href="mailto:broloes2@gmail.com">broloes2@gmail.com</a>
      </Typography>
    </Container>
  );
}
