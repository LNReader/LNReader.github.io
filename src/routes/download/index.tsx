import Layout from "@components/Layout";
import Page from "@components/Page";
import { useTheme } from "@hooks/useTheme";
import { Box, Button, Card, Divider, Typography, Link } from "@mui/material";
import { Android } from "@mui/icons-material";

               {/* no direct link for now */}
const downloadLink = "https://github.com/LNReader/lnreader/releases/download/v2.0.0-beta.2/lnreader-v2.0.0-beta.2.apk";

export default function Download() {
  const theme = useTheme();

  return (
    <Layout>
      <Page
        title="Download LNReader"
        content={
          <Box>
            <Typography sx={{ mt: 2 }}>
              <b>LNReader</b> is a Tachiyomi-like, free and open source light novel reader for Android. Download it now and start enjoying your favorite stories!
            </Typography>
            <Box sx={{ my: 4, textAlign: "center" }}>
              <Button
                variant="contained"
                startIcon={<Android />}
                sx={{
                  borderRadius: 12,
                  background: theme.primaryContainer,
                  color: theme.onPrimaryContainer,
                  textTransform: "none",
                  py: 1,
                  px: 3,
                  fontSize: "1.1rem",
                }}
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download APK
              </Button>
            </Box>
            <Card
              sx={{
                bgcolor: theme.tertiaryContainer,
                my: 2,
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography sx={{ mb: 2, fontWeight: "600" }}>
                Important Note
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                <b>LNReader</b> comes without any pre-installed plugins. Visit our{" "}
                <Link href="/plugins" color="inherit">
                  <b>Plugins page</b>
                </Link>{" "}
                to add content sources.
              </Typography>
            </Card>
              {/* for later? thought I would find lines in Readme.*/}
            {/*
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Features
              </Typography>
              <ul>
                <li>
                  <Typography>Read light novels offline</Typography>
                </li>
                <li>
                  <Typography></Typography>
                </li>
                <li>
                  <Typography></Typography>
                </li>
                <li>
                  <Typography></Typography>
                </li>
              </ul>
            </Box>
            */}
            <Divider sx={{ my: 4 }} />
          </Box>
        }
      />
    </Layout>
  );
}