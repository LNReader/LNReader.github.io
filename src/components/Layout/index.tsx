import AppBar from "@components/AppBar";
import SideBar from "@components/SideBar";
import { useTheme } from "@hooks/useTheme";
import { Box, SxProps } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "../../../routes.json";

export default function Layout({
  children,
  sx,
}: {
  sx?: SxProps;
  children: ReactNode;
}) {
  const location = useLocation();
  const theme = useTheme();
  useEffect(() => {
    const route = routes.find(
      (r) => r.path === location.pathname.replace(/^\//, "")
    );
    if (route) {
      document.title = route.title;
    } else {
      document.title = "Home | LNReader";
    }
  }, [location.pathname]);
  return (
    <Box>
      <AppBar />
      <Box
        sx={{
          bgcolor: theme.background,
          width: "100%",
          pt: { xs: 12, sm: 14 },
          display: "flex",
          ...sx,
        }}
      >
        {location.pathname === "/" ? null : <SideBar />}
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
}
