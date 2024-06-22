import { createSlice } from "@reduxjs/toolkit";

interface SettingSlice {
  scheme?: "dark" | "light";
}

const storedScheme = localStorage.getItem("APP_SCHEME") as "dark" | "light";
const isDeviveColorSchemeDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState: SettingSlice = {
  scheme: storedScheme || (isDeviveColorSchemeDark ? "dark" : "light"),
};

const settingSlice = createSlice({
  name: "SlideBar",
  initialState: initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.scheme === "dark") {
        state.scheme = "light";
      } else {
        state.scheme = "dark";
      }
      localStorage.setItem("APP_SCHEME", state.scheme);
    },
  },
});

export const { switchTheme } = settingSlice.actions;

export default settingSlice.reducer;
