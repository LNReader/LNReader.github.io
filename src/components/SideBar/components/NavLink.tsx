import { useTheme } from "@hooks/useTheme";
import { Box, SxProps, Typography } from "@mui/material";

export default function NavLink({
  title,
  link,
  sx,
}: {
  title: string;
  link: string;
  sx?: SxProps;
}) {
  const active = location.pathname === link;
  const theme = useTheme();
  return (
    <Box sx={{ ...sx, my: 1 }} component="a" href={link}>
      <Typography
        sx={{
          color: active ? theme.primary : theme.onSurfaceVariant,
          ":hover": {
            color: theme.primary,
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
