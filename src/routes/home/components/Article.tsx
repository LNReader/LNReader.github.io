import { Box, Card, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

export interface ArticleProps {
  title: string;
  content: string;
  icon: ReactNode;
}

export default function Article({ title, content, icon }: ArticleProps) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        p: 4,
        flex: 1,
        borderRadius: 4,
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 1,
          bgcolor: theme.palette.grey[800],
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
          color: theme.palette.text.secondary,
        }}
      >
        {content}
      </Typography>
    </Card>
  );
}
