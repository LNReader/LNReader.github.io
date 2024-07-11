import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@routes/home";
import GettingStarted from "@routes/guides/gettingStarted";
import Download from "@routes/download";
import { useTheme } from "@hooks/useTheme";
import Color from "color";
import Backups from "@routes/guides/backups";
import ReaderSettings from "@routes/guides/readerSettings";
import Changelogs from "@routes/changelogs";
import Contribute from "@routes/contribute";
import Plugins from "@routes/plugins";
import NotFound from "./404";
import Upgrade from "@routes/guides/upgrade";

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
      <BrowserRouter>
        <Routes>
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
              <Route path="upgrade" element={<Upgrade />} />
            </Route>
          </Route>
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
