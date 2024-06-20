import {
  Box,
  IconButton,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscordIcon from "@assets/discord.svg";

export default function AppBar() {
  return (
    <MUIAppBar sx={{ px: { lg: 6, md: 4 } }}>
      <Toolbar>
        <img src="/ico.png" height={45} width={45} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            ml: 1,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LNReader
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            href="https://github.com/LNReader/lnreader"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://discord.com/invite/QdcWN4MD63"
            target="_blank"
          >
            <img src={DiscordIcon} height={25} width={25} />
          </IconButton>
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
}
