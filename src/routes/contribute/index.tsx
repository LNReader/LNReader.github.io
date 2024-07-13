import React, { useState } from 'react';
import Layout from "@components/Layout";
import Page from "@components/Page";
import { useTheme } from "@hooks/useTheme";
import { Typography, Box, Button, Card, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton, Tooltip } from "@mui/material";
import { Code as CodeIcon, Android as AndroidIcon, Brush as BrushIcon, ContentCopy as ContentCopyIcon, Check as CheckIcon } from '@mui/icons-material';

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card sx={{ 
      p: 2, 
      my: 2, 
      bgcolor: theme.surfaceVariant,
      overflowX: 'auto',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Typography component="code" sx={{ 
        fontFamily: 'monospace', 
        fontSize: '0.875rem', 
        whiteSpace: 'pre-wrap',
        color: theme.onSurfaceVariant,
        flexGrow: 1
      }}>
        {children}
      </Typography>
      <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
        <IconButton onClick={handleCopy} size="small" sx={{ ml: 1 }}>
          {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
        </IconButton>
      </Tooltip>
    </Card>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" gutterBottom sx={{ fontWeight: '600', mt: 3, mb: 2 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const StepItem = ({ command, description }: { command: string; description: string }) => (
  <ListItem alignItems="flex-start" sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
    <Typography sx={{ mb: 1 }}>{description}</Typography>
    <CodeBlock>{command}</CodeBlock>
  </ListItem>
);

export default function Contribute() {
  const theme = useTheme();

  const content = (
    <Box>
      <Typography sx={{ mt: 2 }}>
        Contributions to <b>LNReader</b> are welcome and greatly appreciated! Follow the guide below to get started.
      </Typography>

      <Section title="Setting up your environment">
        <Typography sx={{ mb: 2 }}>
          After forking to your own GitHub org or account, follow these steps to get started:
        </Typography>

        <Typography sx={{ fontWeight: '600', mb: 1 }}>Prerequisites</Typography>
        <List>
          <ListItem>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText 
              primary="Node.js version <= 16.13.1" 
              secondary="For version management, we recommend using nvm"
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText 
              primary="Java SDK version <= 11" 
              secondary="For version management, you can optionally use jenv"
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><AndroidIcon /></ListItemIcon>
            <ListItemText 
              primary="Android SDK" 
              secondary={<>Download from <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">Android Studio</a></>}
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
        </List>

        <Typography sx={{ fontWeight: '600', mt: 2, mb: 1 }}>Quick Start Steps</Typography>
        <List>
          <StepItem 
            description="Clone your fork to your local machine"
            command="git clone https://github.com/<your-account-name>/lnreader.git"
          />
          <StepItem 
            description="Step into the local repository"
            command="cd lnreader"
          />
          <StepItem 
            description="Install dependencies"
            command="npm install"
          />
          <StepItem 
            description="Build the APK (find it in ~/lnreader/android/app/build/outputs/apk/release/)"
            command="npm run buildRelease"
          />
        </List>
      </Section>

      <Section title="Developing on Android">
        <Typography sx={{ mb: 2 }}>
          You will need an Android device or emulator connected to your computer as well as an IDE of your choice (e.g., VSCode).
        </Typography>

        <Typography sx={{ fontWeight: '600', mb: 1 }}>Additional Prerequisites</Typography>
        <List>
          <ListItem>
            <ListItemIcon><AndroidIcon /></ListItemIcon>
            <ListItemText 
              primary="ADB (Android Debug Bridge)" 
              secondary={<> <a href="https://developer.android.com/studio/command-line/adb" target="_blank" rel="noopener noreferrer">Android Developer site</a></>}
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText primary="IDE of your choice" />
          </ListItem>
        </List>

        <Typography sx={{ fontWeight: '600', mt: 2, mb: 1 }}>Development Steps</Typography>
        <List>
          <StepItem 
            description="Check if Android device/emulator is connected"
            command="adb devices"
          />
          <StepItem 
            description="Run Metro for development"
            command="npm start"
          />
          <StepItem 
            description="View on your Android device (run in a new terminal)"
            command="npm run android"
          />
        </List>

        <Typography sx={{ mt: 2 }}>
          To view changes to the app with new code, save your code and press "r" on the Metro terminal to
          reload it. The app on the Android device/emulator will reload shortly.
        </Typography>
      </Section>

      <Section title="Style & Linting">
        <Typography sx={{ mb: 2 }}>
          This codebase's linting rules are enforced using <a href="http://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a>.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          It is recommended that you install an ESLint plugin for your editor of choice when working on this
          codebase. However, you can always check if the source code is compliant by running:
        </Typography>
        <CodeBlock>npm run lint</CodeBlock>
      </Section>

      <Box sx={{ my: 2, textAlign: "center" }}>
        <Button
          variant="contained"
          startIcon={<BrushIcon />}
          sx={{
            borderRadius: 12,
            background: theme.primaryContainer,
            color: theme.onPrimaryContainer,
            textTransform: "none",
          }}
          href="https://github.com/LNReader/lnreader/fork"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Contributing
        </Button>
      </Box>
      <Divider />
    </Box>
  );

  return (
    <Layout>
      <Page
        title="Contribute"
        content={content}
      />
    </Layout>
  );
}