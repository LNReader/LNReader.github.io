import { useTheme } from "@hooks/useTheme";
import { Box, Button, Container, Menu, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

export default function Page({
  title,
  content,
  tableOfContent,
}: {
  title: string;
  content: ReactNode;
  tableOfContent?: ReactNode;
}) {
  const [mobileMenuAnchor, setmobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const mobileMenuOpen = Boolean(mobileMenuAnchor);
  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmobileMenuAnchor(event.currentTarget);
  };
  const closeMobileMenu = () => {
    setmobileMenuAnchor(null);
  };
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: { xs: "block", lg: "flex" },
        flexDirection: "row-reverse",
        textAlign: "left",
        px: { xs: 0, lg: 4 },
        pt: { lg: 6 },
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: { lg: 240 },
          position: { xs: "sticky", lg: "relative" },
          left: 0,
          top: { xs: 64, lg: 0 },
          bgcolor: theme.background,
          py: tableOfContent ? { xs: 1, lg: 0 } : 0,
          px: 4,
          mb: 4,
          borderBottomColor: theme.shadow,
          borderBottomWidth: 1,
          borderBottomStyle: tableOfContent ? "solid" : "none",
        }}
      >
        {tableOfContent ? (
          <>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Typography variant="subtitle1" sx={{ fontSize: "bold" }}>
                Table of content
              </Typography>
              <Box>{tableOfContent}</Box>
            </Box>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <Button
                aria-haspopup="true"
                aria-expanded={mobileMenuOpen ? "true" : undefined}
                onClick={openMobileMenu}
              >
                <Typography variant="subtitle1" sx={{ fontSize: "bold" }}>
                  Table of content
                </Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={mobileMenuAnchor}
                open={mobileMenuOpen}
                onClose={closeMobileMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Box>{tableOfContent}</Box>
              </Menu>
            </Box>
          </>
        ) : null}
      </Box>
      <Box
        sx={{
          flex: 1,
          px: { xs: 4, md: 8, lg: 10 },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          {title}
        </Typography>
        {content}
      </Box>
    </Container>
  );
}
