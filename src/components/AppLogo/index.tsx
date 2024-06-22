import { useTheme } from "@hooks/useTheme";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AppLogo() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="/ico.png" height={45} width={45} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            ml: 1,
            display: { xs: "none", sm: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            color: theme.onSurface,
            textDecoration: "none",
          }}
        >
          LNReader
        </Typography>
      </Link>
    </Box>
  );
}
