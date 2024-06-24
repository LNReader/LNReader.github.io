import Layout from "@components/Layout";
import { useTheme } from "@hooks/useTheme";
import { Box, Button, Divider, Typography } from "@mui/material";
import Footer from "@routes/home/components/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Layout
      showSideBar={false}
      sx={{ height: "calc(100vh - 7rem)", display: "flex" }}
    >
      <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            404
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            PAGE NOT FOUND
          </Typography>
          <Typography sx={{ mt: 4, mb: 1, px: { xs: 1, md: 0 } }}>
            Trying to visit a page that doesn't even exist?
          </Typography>
          <Typography sx={{ color: theme.error }}>How cute !</Typography>
          <Box sx={{ my: 4 }}>
            <Link to="/">
              <Button variant="outlined" sx={{ borderRadius: 20 }}>
                Back to Home
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Divider />
          <Footer />
        </Box>
      </Box>
    </Layout>
  );
}
