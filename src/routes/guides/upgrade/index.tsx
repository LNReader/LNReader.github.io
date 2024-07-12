import Layout from "@components/Layout";
import Page from "@components/Page";
import {
  Alert,
  Box,
  Button,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { useTheme } from "@hooks/useTheme";
import { useEffect, useState } from "react";
import { NovelInfo, PluginItem } from "../../../types";
import PublicIcon from "@mui/icons-material/Public";

interface OldNovelInfo {
  novelId: number;
  sourceUrl: string;
  novelUrl: string;
  sourceId: number;
  source: string;
  novelName: string;
  novelCover?: string;
  novelSummary?: string;
  genre?: string;
  author?: string;
  status?: string;
  followed: number;
  categoryIds: string;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const isUrlAbsolute = (url: string) => {
  if (url) {
    if (url.indexOf("//") === 0) {
      return true;
    } // URL is protocol-relative (= absolute)
    if (url.indexOf("://") === -1) {
      return false;
    } // URL has no protocol (= relative)
    if (url.indexOf(".") === -1) {
      return false;
    } // URL does not contain a dot, i.e. no TLD (= relative, possibly REST)
    if (url.indexOf("/") === -1) {
      return false;
    } // URL does not contain a single slash (= relative)
    if (url.indexOf(":") > url.indexOf("/")) {
      return false;
    } // The first colon comes after the first slash (= relative)
    if (url.indexOf("://") < url.indexOf(".")) {
      return true;
    } // Protocol is defined before first dot (= absolute)
  }
  return false; // Anything else must be relative
};

export default function Upgrade() {
  const theme = useTheme();
  const [plugins, setPlugins] = useState<PluginItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [migratedNovels, setMigratedNovel] = useState<NovelInfo[]>([]);
  const [requiredPlugins, setRequiredPlugins] = useState<PluginItem[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/LNReader/lnreader-plugins/plugins/v3.0.0/.dist/plugins.min.json"
    )
      .then((res) => res.json())
      .then((plugins) => {
        setPlugins(plugins);
        setLoading(false);
      });
  }, []);

  const findSuitedPlugin = (novel: OldNovelInfo) => {
    let novelSiteUrl;
    try {
      const url = novel.sourceUrl.replace(
        "https://www.wuxiap.com/",
        "https://www.wuxiabox.com/"
      );
      novelSiteUrl = new URL(url);
    } catch {
      return undefined;
    }
    const novelSiteDomain = novelSiteUrl.hostname.replace(/www\./, "");
    for (const plugin of plugins) {
      const pluginSiteUrl = new URL(plugin.site);
      const pluginSiteDomain = pluginSiteUrl.hostname.replace(/www\./, "");
      if (pluginSiteDomain === novelSiteDomain) {
        return plugin;
      }
    }

    return undefined;
  };

  const migrateNovels = (oldNovels: OldNovelInfo[]) => {
    const migratedNovels: NovelInfo[] = [];
    const requiredPlugins = new Set<PluginItem>();
    for (const oldNovel of oldNovels) {
      const plugin = findSuitedPlugin(oldNovel);
      let novelUrl = oldNovel.novelUrl;
      if (plugin) {
        if (isUrlAbsolute(novelUrl)) {
          novelUrl = oldNovel.novelUrl.replace(plugin.site, "");
        }
        if (plugin.id === "boxnovel") {
          novelUrl = "novel/" + novelUrl + "/";
        }
        migratedNovels.push({
          id: oldNovel.novelId,
          path: novelUrl,
          pluginId: plugin.id,
          name: oldNovel.novelName,
          cover: oldNovel.novelCover,
          summary: oldNovel.novelSummary,
          author: oldNovel.author,
          status: oldNovel.status,
          genres: oldNovel.genre,
          inLibrary: Boolean(oldNovel.followed),
          isLocal: false,
          totalPages: 0,
        });
        requiredPlugins.add(plugin);
      }
    }

    setMigratedNovel(migratedNovels);
    setRequiredPlugins(Array.from(requiredPlugins));
  };

  const PluginCard = ({ plugin }: { plugin: PluginItem }) => {
    return (
      <Button
        sx={{
          my: 1,
          display: "flex",
          backgroundColor: theme.surfaceVariant,
          p: 1,
          borderRadius: 2,
          width: "100%",
          justifyContent: "left",
          textTransform: "none",
        }}
        onClick={() => {
          navigator.clipboard
            .writeText(plugin.name)
            .then(() => setShowAlert(true));
        }}
      >
        <img src={plugin.iconUrl} alt="icon" height={30} width={30} />
        <Box sx={{ ml: 2, textAlign: "left" }}>
          <Typography>{plugin.name}</Typography>
          <Typography variant="caption">{plugin.id}</Typography>
        </Box>
        <Box sx={{ flex: 1 }}></Box>
        <IconButton sx={{ height: "100%" }} href={plugin.site} target="_blank">
          <PublicIcon />
        </IconButton>
      </Button>
    );
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => setShowAlert(false), 1000);
    }
  }, [showAlert]);

  return (
    <Layout>
      <Page
        title="Upgrade 1.x.x to 2.0.0"
        content={
          <Box
            sx={{
              pt: 2,
            }}
          >
            {showAlert ? (
              <Alert
                variant="filled"
                sx={{
                  position: "fixed",
                  top: 70,
                  right: 10,
                  zIndex: 1000,
                }}
                severity="success"
              >
                Copied name.
              </Alert>
            ) : null}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={
                  <UploadFileRoundedIcon sx={{ fill: theme.onSecondary }} />
                }
                disabled={loading}
                sx={{ textTransform: "none" }}
              >
                Upload 1.x.x backup file
                <VisuallyHiddenInput
                  type="file"
                  onChange={(ev) => {
                    try {
                      setLoading(true);
                      const file = ev.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          try {
                            if (typeof e.target?.result === "string") {
                              const oldNovels = JSON.parse(e.target.result);
                              migrateNovels(oldNovels);
                            }
                          } catch (e) {
                            alert(e);
                          }
                        };
                        reader.readAsText(file);
                      }
                    } finally {
                      setLoading(false);
                    }
                  }}
                />
              </Button>
              {!loading && migratedNovels.length ? (
                <Button
                  component="label"
                  variant="contained"
                  tabIndex={-1}
                  startIcon={
                    <SimCardDownloadIcon sx={{ fill: theme.onTertiary }} />
                  }
                  disabled={loading}
                  sx={{
                    textTransform: "none",
                    bgcolor: theme.tertiary,
                    color: theme.onTertiary,
                  }}
                  onClick={() => {
                    if (migratedNovels.length) {
                      const migratedBlob = new Blob(
                        [JSON.stringify(migratedNovels)],
                        {
                          type: "application/json",
                        }
                      );
                      const link = document.createElement("a");
                      link.href = window.URL.createObjectURL(migratedBlob);
                      link.setAttribute("download", `migrated-backup.json`);
                      document.body.appendChild(link);
                      link.click();
                      link.parentNode?.removeChild(link);
                    }
                  }}
                >
                  Download ({migratedNovels.length} novels)
                </Button>
              ) : null}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Required plugins</Typography>
              {requiredPlugins.map((plugin) => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </Box>
          </Box>
        }
      />
    </Layout>
  );
}
