import React from 'react';
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
        <Button
          variant="contained"
          startIcon={<GetAppIcon />}
          sx={{
            borderRadius: 12,
            background: theme.primaryContainer,
            color: theme.onPrimaryContainer,
            textTransform: "none",
            mb: 2,
          }}
          href="/download"
        >
          Go to Download Page
        </Button>
      </Section>

      <Section title="2. Add Plugins">
        <Typography sx={{ mb: 2 }}>
          LNReader comes without pre-installed plugins. To start reading, you'll need to add content sources.
        </Typography>
        <Button
          variant="outlined"
          startIcon={<ExtensionIcon />}
          sx={{
            borderRadius: 12,
            borderColor: theme.outline,
            color: theme.onBackground,
            textTransform: "none",
            mb: 2,
          }}
          href="/plugins"
        >
          Explore Plugins
        </Button>
      </Section>

      <Section title="3. Customize Reader Settings">
        <Typography sx={{ mb: 2 }}>
          Personalize your reading experience by adjusting the settings to your preferences.
        </Typography> 
        <Button
          variant="outlined"
          startIcon={<SettingsIcon />}
          sx={{
            borderRadius: 12,
            borderColor: theme.outline,
            color: theme.onBackground,
            textTransform: "none",
            mb: 2,
          }}
          href="/guides/reader-settings"
        >
          Learn About Reader Settings
        </Button>
      </Section>

      <Section title="4. Backup Your Library">
        <Typography sx={{ mb: 2 }}>
          Don't forget to regularly backup your library to avoid losing your reading progress and favorites.
        </Typography>
        <Button
          variant="outlined"
          startIcon={<BackupIcon />}
          sx={{
            borderRadius: 12,
            borderColor: theme.outline,
            color: theme.onBackground,
            textTransform: "none",
            mb: 2,
          }}
          href="/guides/backups"
        >
          Learn About Backups
        </Button>
      </Section>

      <Typography sx={{ mt: 4, fontStyle: 'italic' }}>
        For more detailed information on specific features, check out our other guides:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText 
            primary={<a href="/guides/reader-settings" style={{ color: theme.primary }}>Reader Settings</a>}
            secondary="Customize your reading experience"
            secondaryTypographyProps={{ color: theme.onSurface }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><GetAppIcon /></ListItemIcon>
          <ListItemText 
            primary={<a href="/guides/upgrade" style={{ color: theme.primary }}>Upgrade Helper</a>}
            secondary="Migrate from an older version"
            secondaryTypographyProps={{ color: theme.onSurface }}
          />
        </ListItem>
      </List>

      <Box sx={{ my: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          startIcon={<BookIcon />}
          sx={{
            borderRadius: 12,
            background: theme.primaryContainer,
            color: theme.onPrimaryContainer,
            textTransform: "none",
          }}
          href="/download"
        >
          Get Started with LNReader
        </Button>
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