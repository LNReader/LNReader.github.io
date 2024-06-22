import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBarSlice";
import settingReducer from "./SettingsSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    setting: settingReducer,
  },
});

export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
