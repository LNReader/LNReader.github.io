import AppBar from "@components/AppBar";
import SideBar from "@components/SideBar";
import { useTheme } from "@hooks/useTheme";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const theme = useTheme();
  return (
    <Box>
      <AppBar />
      <Box
        sx={{
          bgcolor: theme.background,
          width: "100%",
          pt: { xs: 12, sm: 14 },
          display: "flex",
        }}
      >
        {location.pathname === "/" ? null : <SideBar />}
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
}
