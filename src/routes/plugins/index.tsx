import Layout from "@components/Layout";
import Page from "@components/Page";
import { useTheme } from "@hooks/useTheme";
import { Box, Button, Divider, Typography } from "@mui/material";

const lnreaderPluginsRepo =
  "https://raw.githubusercontent.com/LNReader/lnreader-plugins/plugins/v3.0.0/.dist/plugins.min.json";

export default function Plugins() {
  const theme = useTheme();

  return (
    <Layout>
      <Page
        title="Plugins"
        content={
          <Box>
            <Typography sx={{ mt: 2 }}>
              By default, <b>LNReader</b> comes without any plugins. You can
              choose to read local content or include an external repository.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <b>LNReader</b> maintains only one official repository; any other
              repositories are unofficial and have no affiliation with us.
            </Typography>
            <Box sx={{ my: 2, textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 12,
                  background: theme.primaryContainer,
                  color: theme.onPrimaryContainer,
                  textTransform: "none",
                }}
                href={
                  "lnreader://repo/add?url=" +
                  encodeURIComponent(lnreaderPluginsRepo)
                }
              >
                Add repository
              </Button>
              <Typography sx={{ mt: 2 }}>
                Requires <b>LNReader 2.0.0</b> or newer.
              </Typography>
            </Box>
            <Divider />
          </Box>
        }
      />
    </Layout>
  );
}
