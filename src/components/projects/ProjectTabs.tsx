import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

interface Props {
  software: React.ReactNode;
  data: React.ReactNode;
}

export default function ProjectTabs({ software, data }: Props) {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={value} onChange={(_, v) => setValue(v)} sx={{ mb: 3 }}>
        <Tab label="Software" />
        <Tab label="Data Science" />
      </Tabs>

      {value === 0 && software}
      {value === 1 && data}
    </Box>
  );
}
