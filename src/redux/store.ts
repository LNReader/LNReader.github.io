import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBarSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
});

export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
