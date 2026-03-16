import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          NicoSRB |
        </Typography>

        <Stack direction="row" spacing={3}>
          <Button href="#about">About</Button>
          <Button href="#projects">Projects</Button>
          <Button href="#skills">Skills</Button>
          <Button href="#contact">Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
