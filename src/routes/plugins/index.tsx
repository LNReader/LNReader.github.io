import Layout from "@components/Layout";
import { useTheme } from "@hooks/useTheme";
import { Box, Button, Card, Divider, Typography } from "@mui/material";

const lnreaderPluginsRepo =
  "https://raw.githubusercontent.com/LNReader/lnreader-plugins/plugins/v3.0.0/.dist/plugins.min.json";

export default function Plugins() {
  const theme = useTheme();
  const isAndroid = /android/i.test(navigator.userAgent);

  return (
    <Layout>
      <Box
        sx={{
          textAlign: "left",
          px: { xs: 2, sm: 4, md: 16 },
          maxWidth: 800,
          height: "100vh",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Plugins
        </Typography>
        <Typography sx={{ mt: 2 }}>
          By default, <b>LNReader</b> comes without any plugins. You can choose
          to read local content or include an external repository.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <b>LNReader</b> maintains only one official repository; any other
          repositories are unofficial and have no affiliation with us.
        </Typography>
        {isAndroid ? (
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
        ) : (
          <Card
            sx={{
              bgcolor: theme.tertiaryContainer,
              my: 2,
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography sx={{ mb: 2, fontWeight: "600" }}>
              Unsupported operating system
            </Typography>
            <Typography sx={{ fontSize: 16 }}>
              <b>LNReader</b> is an <b>Android app</b> only. Use an{" "}
              <b>Android</b> device with <b>LNReader</b> installed to add this
              extension repo.
            </Typography>
          </Card>
        )}
        <Divider />
      </Box>
    </Layout>
  );
}
