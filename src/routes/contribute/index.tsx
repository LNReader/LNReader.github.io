import Layout from "@components/Layout";
import Page from "@components/Page";
import { useTheme } from "@hooks/useTheme";
import {
  Typography,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Code as CodeIcon,
  Android as AndroidIcon,
  Brush as BrushIcon,
} from "@mui/icons-material";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      gutterBottom
      sx={{ fontWeight: "600", mt: 3, mb: 2 }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.surfaceVariant,
        color: theme.onSurfaceVariant,
        p: 2,
        borderRadius: 1,
        fontFamily: "monospace",
        fontSize: "0.875rem",
        overflowX: "auto",
        mb: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default function Contribute() {
  const theme = useTheme();

  const content = (
    <Box>
      <Typography sx={{ mt: 2 }}>
        Contributions to <b>LNReader</b> are welcome and greatly appreciated!
        Follow the guide below to get started.
      </Typography>

      <Section title="Setting up your environment">
        <Typography sx={{ mb: 2 }}>
          After forking to your own GitHub org or account, follow these steps to
          get started:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Node.js version >= 18"
              secondary="For version management, we recommend using nvm"
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Java SDK version >= 15"
              secondary="For version management, you can optionally use jenv"
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AndroidIcon />
            </ListItemIcon>
            <ListItemText
              primary="Android SDK"
              secondary={
                <>
                  Download from{" "}
                  <a
                    href="https://developer.android.com/studio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android Studio
                  </a>
                </>
              }
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
        </List>
      </Section>

      <Section title="Quick Start Steps">
        <List>
          <ListItem>
            <ListItemText
              primary="Clone your fork to your local machine:"
              secondary={
                <CodeBlock>
                  git clone
                  https://github.com/&lt;your-username&gt;/lnreader.git
                </CodeBlock>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Step into the local repository:"
              secondary={<CodeBlock>cd lnreader</CodeBlock>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Install dependencies:"
              secondary={<CodeBlock>npm install</CodeBlock>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Build the APK:"
              secondary={<CodeBlock>npm run buildRelease</CodeBlock>}
            />
          </ListItem>
        </List>
      </Section>

      <Section title="Developing on Android">
        <Typography sx={{ mb: 2 }}>
          You will need an Android device or emulator connected to your computer
          as well as an IDE of your choice (e.g., VSCode).
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <AndroidIcon />
            </ListItemIcon>
            <ListItemText
              primary="ADB (Android Debug Bridge)"
              secondary={
                <>
                  <a
                    href="https://developer.android.com/studio/command-line/adb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android Developer site
                  </a>
                </>
              }
              secondaryTypographyProps={{ color: theme.onSurface }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="IDE of your choice" />
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, mb: 1 }}>Development Steps:</Typography>
        <Typography sx={{ mt: 2, mb: 1 }}>
          Check if Android device/emulator is connected:
        </Typography>
        <CodeBlock>adb devices</CodeBlock>
        <Typography sx={{ mt: 2, mb: 1 }}>
          Run Metro for development:
        </Typography>
        <CodeBlock>npm start</CodeBlock>
        <Typography sx={{ mt: 2, mb: 1 }}>
          View on your Android device (run in a new terminal):
        </Typography>
        <CodeBlock>npm run android</CodeBlock>
        <Typography sx={{ mt: 2, mb: 1 }}>
          To view changes to the app with new code, save your code and press "r"
          on the Metro terminal to reload it. The app on the Android
          device/emulator will reload shortly.
        </Typography>
      </Section>

      <Section title="Style & Linting">
        <Typography sx={{ mb: 2 }}>
          This codebase's linting rules are enforced using{" "}
          <a
            href="http://eslint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESLint
          </a>
          .
        </Typography>
        <Typography sx={{ mb: 2 }}>
          It is recommended that you install an ESLint plugin for your editor of
          choice when working on this codebase. However, you can always check if
          the source code is compliant by running:
        </Typography>
        <CodeBlock>npm run lint</CodeBlock>
      </Section>

      <Box sx={{ my: 4, textAlign: "center" }}>
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
      <Page title="Contribute" content={content} />
    </Layout>
  );
}
