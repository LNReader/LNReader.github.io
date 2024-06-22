import { createSlice } from "@reduxjs/toolkit";

interface SideBarState {
  mobileOpen: boolean;
}

const initialState: SideBarState = {
  mobileOpen: false,
};
const sideBarSlice = createSlice({
  name: "SlideBar",
  initialState: initialState,
  reducers: {
    openSideBar: (state) => {
      state.mobileOpen = true;
    },
    closeSideBar: (state) => {
      state.mobileOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
