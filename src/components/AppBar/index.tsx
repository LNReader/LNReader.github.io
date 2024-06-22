import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import useSideBar from "@hooks/useSideBar";
import AppLogo from "@components/AppLogo";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useTheme } from "@hooks/useTheme";
import DiscordIcon from "@components/Icons/DiscordIcon";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch } from "react-redux";
import { switchTheme } from "@redux/SettingsSlice";
import { Link, useLocation } from "react-router-dom";

export default function AppBar() {
  const theme = useTheme();
  const location = useLocation();
  const { openSideBar } = useSideBar();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const dispatch = useDispatch();

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ justifyContent: "center" }}>
        <Link to="/guides/getting-started">
          <Typography
            sx={{
              color: theme.onSurface,
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            Guides
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton
          onClick={() => {
            dispatch(switchTheme());
          }}
          color="inherit"
        >
          {theme.isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Typography>{theme.isDark ? "Dark" : "Light"}</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton href="https://github.com/LNReader/lnreader" target="_blank">
          <GitHubIcon />
        </IconButton>
        <Typography>Github</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton
          href="https://discord.com/invite/QdcWN4MD63"
          target="_blank"
        >
          <DiscordIcon />
        </IconButton>
        <Typography>Discord</Typography>
      </MenuItem>
    </Menu>
  );

  const renderMenu = (
    <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
      <Link to="/guides/getting-started">
        <Typography
          sx={{
            color: theme.onSurface,
            fontFamily: "monospace",
            fontWeight: 600,
            mx: 2,
          }}
        >
          Guides
        </Typography>
      </Link>
      <IconButton
        sx={{ mx: 2 }}
        onClick={() => {
          dispatch(switchTheme());
        }}
        color="inherit"
      >
        {theme.isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <IconButton href="https://github.com/LNReader/lnreader" target="_blank">
        <GitHubIcon />
      </IconButton>
      <IconButton href="https://discord.com/invite/QdcWN4MD63" target="_blank">
        <DiscordIcon />
      </IconButton>
    </Box>
  );

  return (
    <MUIAppBar sx={{ px: { sm: 2 } }}>
      <Toolbar>
        {location.pathname === "/" ? null : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={openSideBar}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <AppLogo />
        <Box sx={{ flexGrow: 1 }} />
        {renderMenu}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
    </MUIAppBar>
  );
}
