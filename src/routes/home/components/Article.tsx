import { useTheme } from "@hooks/useTheme";
import { Box, Card, Typography } from "@mui/material";
import Color from "color";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface ArticleProps {
  title: string;
  content: string;
  icon: ReactNode;
  link: string;
}

export default function Article({ title, content, icon, link }: ArticleProps) {
  const theme = useTheme();
  return (
    <Link to={link} style={{ display: "flex", flex: 1 }}>
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: "left",
          ":hover": {
            borderColor: theme.primary,
          },
          borderColor: "transparent",
          borderStyle: "solid",
          borderWidth: 2,
          flex: 1,
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: Color(theme.primary).alpha(0.1).toString(),
            width: "max-content",
            mb: 2,
            borderRadius: 1,
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: "600",
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: theme.onSurfaceVariant,
            fontSize: 14,
          }}
        >
          {content}
        </Typography>
      </Card>
    </Link>
  );
}
