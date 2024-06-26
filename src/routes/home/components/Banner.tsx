import { useTheme } from "@hooks/useTheme";
import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const bannerTextStyle: SxProps = {
  fontSize: { xs: 24, sm: 46 },
  fontWeight: 700,
};

export default function Banner() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: { sm: "center", md: "left" },
          mb: 8,
        }}
      >
        <Typography
          sx={{
            ...bannerTextStyle,
            color: theme.primary,
            lineHeight: "46px",
          }}
        >
          LNReader
        </Typography>
        <Typography sx={{ ...bannerTextStyle, mb: 2 }}>
          Light Novel Reader
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 24 },
            color: theme.secondary,
            mb: 4,
          }}
        >
          Discover and read light novels, novels and more - easier than ever on
          your Android device.
        </Typography>
        <Stack
          direction="row"
          sx={{ flex: 1, gap: 2, justifyContent: { xs: "center", md: "left" } }}
        >
          <Link to="/guides/getting-started">
            <Button
              variant="contained"
              sx={{
                borderRadius: 8,
                textTransform: "unset",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Get started
            </Button>
          </Link>
          <Link to="/download">
            <Button
              variant="outlined"
              sx={{
                borderRadius: 8,
                textTransform: "unset",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Download
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
}
