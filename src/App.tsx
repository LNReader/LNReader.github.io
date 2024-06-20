import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "@routes/home";
import GettingStarted from "@routes/docs/guides/gettingStarted";
import AppBar from "@components/AppBar";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    mode: "dark",
  },
});

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
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
