import { Box, Divider, Stack } from "@mui/material";
import Footer from "./components/Footer";
import Article, { ArticleProps } from "./components/Article";
import ExtensionIcon from "@mui/icons-material/Extension";
import TuneIcon from "@mui/icons-material/Tune";
import SyncIcon from "@mui/icons-material/Sync";
import Banner from "./components/Banner";

const articles: ArticleProps[] = [
  {
    title: "Plugins",
    content: "Bring your own content from a variety of sources.",
    icon: (
      <ExtensionIcon
        sx={{ stroke: "orange", fill: "transparent", strokeWidth: 2 }}
      />
    ),
  },
  {
    title: "Customization",
    content:
      "Make it yours with multiple reading modes, custom color filters, and many other settings.",
    icon: <TuneIcon sx={{ stroke: "dodgerblue", fill: "transparent" }} />,
  },
  {
    title: "Tracking",
    content:
      "Automatically keep track of your series with MyAnimeList, AniList, Kitsu, and more.",
    icon: <SyncIcon sx={{ fill: "limegreen", stroke: "transparent" }} />,
  },
];

export default function HomePage() {
  return (
    <Box>
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
    </Box>
  );
}
