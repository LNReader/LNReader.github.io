import { Link } from 'react-router-dom';
import Layout from "@components/Layout";
import Page from "@components/Page";
import { useTheme } from "@hooks/useTheme";
import { Typography, Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { GetApp as GetAppIcon, Extension as ExtensionIcon, Settings as SettingsIcon, Backup as BackupIcon, Book as BookIcon } from '@mui/icons-material';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" gutterBottom sx={{ fontWeight: '600', mt: 3, mb: 2 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const StyledButton = ({ to, startIcon, children }: { to: string; startIcon: React.ReactNode; children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button
        variant="outlined"
        startIcon={startIcon}
        sx={{
          borderRadius: 12,
          borderColor: theme.outline,
          color: theme.onBackground,
          textTransform: "none",
          mb: 2,
        }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default function GettingStarted() {
  const theme = useTheme();

  const content = (
    <Box>
      <Typography sx={{ mt: 2 }}>
        Welcome to <b>LNReader</b>! This guide will help you get started with the app and make the most of its features.
      </Typography>

      <Section title="1. Download and Install">
        <Typography sx={{ mb: 2 }}>
          First, you'll need to download and install LNReader on your Android device.
        </Typography>
        <StyledButton to="/download" startIcon={<GetAppIcon />}>
          Go to Download Page
        </StyledButton>
      </Section>

      <Section title="2. Add Plugins">
        <Typography sx={{ mb: 2 }}>
          LNReader comes without pre-installed plugins. To start reading, you'll need to add content sources.
        </Typography>
        <StyledButton to="/plugins" startIcon={<ExtensionIcon />}>
          Explore Plugins
        </StyledButton>
      </Section>

      <Section title="3. Customize Reader Settings">
        <Typography sx={{ mb: 2 }}>
          Personalize your reading experience by adjusting the settings to your preferences.
        </Typography> 
        <StyledButton to="/guides/reader-settings" startIcon={<SettingsIcon />}>
          Learn About Reader Settings
        </StyledButton>
      </Section>

      <Section title="4. Backup Your Library">
        <Typography sx={{ mb: 2 }}>
          Don't forget to regularly backup your library to avoid losing your reading progress and favorites.
        </Typography>
        <StyledButton to="/guides/backups" startIcon={<BackupIcon />}>
          Learn About Backups
        </StyledButton>
      </Section>

      <Typography sx={{ mt: 4, fontStyle: 'italic' }}>
        For more detailed information on specific features, check out our other guides:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText 
            primary={<Link to="/guides/reader-settings" style={{ color: theme.primary }}>Reader Settings</Link>}
            secondary="Customize your reading experience"
            secondaryTypographyProps={{ color: theme.onSurface }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><GetAppIcon /></ListItemIcon>
          <ListItemText 
            primary={<Link to="/guides/upgrade" style={{ color: theme.primary }}>Upgrade Helper</Link>}
            secondary="Migrate from an older version"
            secondaryTypographyProps={{ color: theme.onSurface }}
          />
        </ListItem>
      </List>

      <Box sx={{ my: 4, textAlign: "center" }}>
        <Link to="/download" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            startIcon={<BookIcon />}
            sx={{
              borderRadius: 12,
              background: theme.primaryContainer,
              color: theme.onPrimaryContainer,
              textTransform: "none",
            }}
          >
            Get Started with LNReader
          </Button>
        </Link>
      </Box>
      <Divider />
    </Box>
  );

  return (
    <Layout>
      <Page
        title="Getting Started with LNReader"
        content={content}
      />
    </Layout>
  );
}