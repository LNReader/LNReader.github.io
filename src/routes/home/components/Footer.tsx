import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Typography sx={{ fontSize: { xs: 12, sm: 16 } }}>
          Open-source MIT Licenced
        </Typography>
        <Typography sx={{ fontSize: { xs: 12, sm: 16 } }}>
          Privacy policy
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: { xs: 12, sm: 16 } }}>
          Copyright @ 2024 LNReader
        </Typography>
      </Box>
    </Box>
  );
}
