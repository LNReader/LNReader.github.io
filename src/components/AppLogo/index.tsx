import { useTheme } from "@hooks/useTheme";
import { Box, ButtonBase, Typography } from "@mui/material";

export default function AppLogo() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <ButtonBase href="/" disableRipple={true}>
        <img src="/ico.png" height={45} width={45} />
      </ButtonBase>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
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
    </Box>
  );
}
