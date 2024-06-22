import { Box, createTheme, ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "@routes/home";
import GettingStarted from "@routes/guides/gettingStarted";
import AppBar from "@components/AppBar";
import SideBar from "@components/SideBar";
import { isHomePage } from "./utils/pathUtils";
import Download from "@routes/download";
import { useTheme } from "@hooks/useTheme";
import Color from "color";
import Backups from "@routes/guides/backups";
import ReaderSettings from "@routes/guides/readerSettings";
import Changelogs from "@routes/changelogs";
import Contribute from "@routes/contribute";
import Plugins from "@routes/plugins";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="/download" element={<Download />} />
      <Route path="/changelogs" element={<Changelogs />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/plugins" element={<Plugins />} />
      <Route path="guides">
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="backups" element={<Backups />} />
        <Route path="reader-settings" element={<ReaderSettings />} />
      </Route>
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
