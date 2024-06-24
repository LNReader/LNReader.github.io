import { Box, Divider, Stack } from "@mui/material";
import Footer from "./components/Footer";
import Article, { ArticleProps } from "./components/Article";
import ExtensionIcon from "@mui/icons-material/Extension";
import TuneIcon from "@mui/icons-material/Tune";
import SyncIcon from "@mui/icons-material/Sync";
import Banner from "./components/Banner";
import Layout from "@components/Layout";

const articles: ArticleProps[] = [
  {
    title: "Plugins",
    content: "Bring your own content from a variety of sources.",
    icon: (
      <ExtensionIcon
        sx={{ stroke: "orange", fill: "transparent", strokeWidth: 2 }}
      />
    ),
    link: "/plugins",
  },
  {
    title: "Customization",
    content:
      "Make it yours with multiple reading modes, custom color filters, and many other settings.",
    icon: <TuneIcon sx={{ stroke: "dodgerblue", fill: "transparent" }} />,
    link: "/guides/reader-settings",
  },
  {
    title: "Backup",
    content:
      "Backup and restore your novels, progesses,... in just one click with Google Drive",
    icon: <SyncIcon sx={{ fill: "limegreen", stroke: "transparent" }} />,
    link: "/guides/backups",
  },
];

export default function HomePage() {
  return (
    <Layout showSideBar={false}>
      <Box sx={{ pb: 16, px: { xs: 2, md: 4, lg: 16 } }}>
        <Banner />
        <Stack direction={{ sx: "column", sm: "row" }} sx={{ gap: 2 }}>
          {articles.map((article, index) => (
            <Article {...article} key={"article_" + index} />
          ))}
        </Stack>
      </Box>
      <Divider />
      <Footer />
    </Layout>
  );
}
