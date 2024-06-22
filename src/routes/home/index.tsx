import { Box, Container, Divider, Stack } from "@mui/material";
import Footer from "./components/Footer";
import Article, { ArticleProps } from "./components/Article";
import ExtensionIcon from "@mui/icons-material/Extension";
import TuneIcon from "@mui/icons-material/Tune";
import Banner from "./components/Banner";

const articles: ArticleProps[] = [
  {
    title: "Extensions",
    content: "Bring your own content from a variety of sources.",
    icon: <ExtensionIcon />,
  },
  {
    title: "Customization",
    content:
      "Make it yours with multiple reading modes, custom color filters, and many other settings.",
    icon: <TuneIcon />,
  },
];

export default function HomePage() {
  return (
    <Container>
      <Box sx={{ pb: 16 }}>
        <Banner />
        <Stack direction={{ sx: "column", md: "row" }} sx={{ gap: 2 }}>
          {articles.map((article, index) => (
            <Article {...article} key={"article_" + index} />
          ))}
        </Stack>
      </Box>
      <Divider />
      <Footer />
    </Container>
  );
}
