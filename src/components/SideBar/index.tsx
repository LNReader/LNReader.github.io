import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import useSideBar from "@hooks/useSideBar";
import AppLogo from "@components/AppLogo";
import NavLink from "./components/NavLink";

const drawerWidth = 280;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

const generalNavs = [
  { title: "Download", link: "/download" },
  { title: "Changelogs", link: "/changelogs" },
  { title: "Contribute", link: "/contribute" },
  { title: "Plugins", link: "/plugins" },
];

const guideNavs = [
  { title: "Getting started", link: "/guides/getting-started" },
  { title: "Backups", link: "/guides/backups" },
  { title: "Reader settings", link: "/guides/reader-settings" },
  { title: "Upgrade", link: "/guides/upgrade" },
];

export default function SideBar(props: Props) {
  const { window } = props;
  const { mobileOpen, closeSideBar } = useSideBar();
  const drawer = (
    <Box sx={{ pl: { xs: 2, sm: 4 }, pr: 2, pt: { xs: 2, sm: 0 } }}>
      <Toolbar sx={{ display: { xs: "none", sm: "flex" }, pl: { xs: 0 } }}>
        <AppLogo />
      </Toolbar>
      <Divider sx={{ display: { xs: "none", sm: "block" } }} />
      <List>
        {generalNavs.map((item) => (
          <ListItem key={item.link} disablePadding>
            <NavLink title={item.title} link={item.link} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          Guides
        </Typography>
        {guideNavs.map((item) => (
          <ListItem key={item.link} disablePadding>
            <NavLink title={item.title} link={item.link} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={closeSideBar}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}
