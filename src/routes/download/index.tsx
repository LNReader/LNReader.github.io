import Layout from "@components/Layout";
import Page from "@components/Page";
import { useTheme } from "@hooks/useTheme";
import {
  Box,
  Button,
  Card,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { useEffect, useState } from "react";
import { ThemeColors } from "@themes/types";
import Markdown from "react-markdown";

const api_url = "https://api.github.com/repos/LNReader/lnreader/releases";

interface Asset {
  download_count: number;
  size: number;
  browser_download_url: string;
}
interface AppRelease {
  name: string;
  tag_name: string;
  assets: Asset[];
  body: string;
  draft: boolean;
  prerelease: boolean;
}

const DownloadButton = ({
  release,
  theme,
  stable,
}: {
  release: AppRelease;
  theme: ThemeColors;
  stable?: boolean;
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 12,
        background: stable ? theme.primaryContainer : theme.tertiaryContainer,
        color: stable ? theme.onPrimaryContainer : theme.onTertiaryContainer,
        textTransform: "none",
        py: 1,
        px: 3,
        fontSize: "1.1rem",
        display: "flex",
        gap: 1,
      }}
      href={release.assets[0].browser_download_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Typography>{release.name}</Typography>
      <Box sx={{ display: "flex" }}>
        <Typography color={theme.onTertiaryContainer}>
          {Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1,
          }).format(release.assets[0].download_count)}
        </Typography>
        <DownloadDoneIcon
          sx={{ fontSize: 22, fill: theme.onTertiaryContainer }}
        />
      </Box>
    </Button>
  );
};

export default function Download() {
  const [stable, setStable] = useState<AppRelease | undefined>();
  const [preview, setPreview] = useState<AppRelease | undefined>();
  useEffect(() => {
    fetch(api_url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    })
      .then((res) => res.json())
      .then((releases: AppRelease[]) => {
        const _stable = releases.find((r) => !r.prerelease && !r.draft);
        const _preview = releases.find((r) => r.prerelease);
        setStable(_stable);
        setPreview(_preview);
      });
  }, []);
  const theme = useTheme();

  return (
    <Layout>
      <CssBaseline />
      <Page
        title="Download LNReader"
        content={
          <Box sx={{}}>
            <Typography sx={{ mt: 2 }}>
              <b>LNReader</b> is a Tachiyomi-like, free and open source light
              novel reader for Android. Download it now and start enjoying your
              favorite stories!
            </Typography>
            <Box
              sx={{
                my: 4,
                textAlign: "center",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
              }}
            >
              {stable ? (
                <DownloadButton release={stable} theme={theme} stable />
              ) : null}
              {preview ? (
                <DownloadButton release={preview} theme={theme} />
              ) : null}
            </Box>
            <Card
              sx={{
                bgcolor: theme.primaryContainer,
                my: 2,
                p: 2,
                borderRadius: 2,
                color: theme.onPrimaryContainer,
                maxWidth: { xs: 360, md: 1024 },
                overflowX: "auto",
              }}
            >
              <Markdown>{`## ${stable?.name}\n${stable?.body}`}</Markdown>
            </Card>
            <Card
              sx={{
                bgcolor: theme.tertiaryContainer,
                my: 2,
                p: 2,
                borderRadius: 2,
                color: theme.onTertiaryContainer,
                maxWidth: { xs: 360, md: 1024 },
                overflowX: "auto",
              }}
            >
              <Markdown>{`## ${preview?.name}\n${preview?.body}`}</Markdown>
            </Card>
            <Divider sx={{ my: 4 }} />
          </Box>
        }
      />
    </Layout>
  );
}
