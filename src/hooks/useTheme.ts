import { useMemo } from "react";
import Color from "color";

import { defaultTheme } from "@themes/md3/defaultTheme";
import { ThemeColors } from "@themes/types";
import { useSelector } from "react-redux";
import { AppState } from "@redux/store";

const getElevationColor = (colors: ThemeColors, elevation: number) => {
  return Color(colors.surface)
    .mix(Color(colors.primary), elevation)
    .rgb()
    .string();
};

export const useTheme = (): ThemeColors => {
  const appScheme = useSelector((state: AppState) => state.setting.scheme);

  const theme: ThemeColors = useMemo(() => {
    let colors: ThemeColors =
      appScheme === "dark" ? defaultTheme.dark : defaultTheme.light;

    colors = {
      ...colors,
      surface2: getElevationColor(colors, 0.08),
      rippleColor: Color(colors.primary).alpha(0.12).toString(),
      surfaceReader: Color(colors.surface).alpha(0.9).toString(),
    };

    return colors;
  }, [appScheme]);

  return theme;
};
