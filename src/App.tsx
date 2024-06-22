import { Box, createTheme, ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "@routes/home";
import GettingStarted from "@routes/docs/guides/gettingStarted";
import AppBar from "@components/AppBar";
import SideBar from "@components/SideBar";
import { isHomePage } from "./utils/pathUtils";
import Download from "@routes/download";
import { useTheme } from "@hooks/useTheme";
import Color from "color";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="docs">
        <Route path="guides">
          <Route index element={<GettingStarted />} />
          <Route path="getting-started" element={<GettingStarted />} />
        </Route>
      </Route>
      <Route path="/download" element={<Download />} />
    </Route>
  )
);

function App() {
  const theme = useTheme();
  const overrideTheme = createTheme({
    palette: {
      mode: theme.isDark ? "dark" : "light",
      primary: {
        main: theme.primary,
      },
      secondary: {
        main: theme.secondary,
      },
      background: {
        default: theme.background,
        paper: theme.surface,
      },
      text: {
        primary: theme.onPrimary,
        secondary: theme.onSecondary,
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            background: "transparent",
            width: "100%",
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          color: theme.onSurface,
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fill: theme.onSurface,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: theme.surface2,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: Color(theme.surface).alpha(0.5).toString(),
            backdropFilter: "blur(20px)",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={overrideTheme}>
      <Box
        sx={{
          bgcolor: theme.background,
          width: "100%",
          pt: { xs: 12, sm: 14 },
          display: "flex",
        }}
      >
        <AppBar />
        {isHomePage() ? null : <SideBar />}
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
