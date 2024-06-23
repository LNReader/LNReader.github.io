import Layout from "@components/Layout";
import { useTheme } from "@hooks/useTheme";
import { Box, Button, Typography } from "@mui/material";

const lnreaderPluginsRepo =
  "https://raw.githubusercontent.com/LNReader/lnreader-plugins/plugins/v3.0.0/.dist/plugins.min.json";

export default function Plugins() {
  const theme = useTheme();
  return (
    <Layout>
      <Box sx={{ textAlign: "left", px: { xs: 2, sm: 8 } }}>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Plugins
        </Typography>
        <Box sx={{ my: 2, textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 12,
              background: theme.primary,
              color: theme.onPrimary,
              textTransform: "none",
            }}
            href={
              "lnreader://repo/add?url=" +
              encodeURIComponent(lnreaderPluginsRepo)
            }
          >
            Add repository
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography>Requires </Typography>
            <Typography sx={{ fontWeight: "600", mx: 1 }}>
              {" "}
              LNReader 2.0.0
            </Typography>
            <Typography>or newer.</Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
