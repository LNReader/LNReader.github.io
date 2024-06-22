import { useTheme } from "@hooks/useTheme";
import { Box, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
    <Link to={link} style={{ display: "flex", flex: 1 }}>
      <Box sx={{ ...sx, my: 1 }}>
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
    </Link>
  );
}
