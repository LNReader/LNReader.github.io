import { closeSideBar, openSideBar } from "@redux/SideBarSlice";
import { AppState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function useSideBar() {
  const mobileOpen = useSelector((state: AppState) => state.sideBar.mobileOpen);
  const dispatch = useDispatch();
  return {
    mobileOpen,
    closeSideBar: () => dispatch(closeSideBar()),
    openSideBar: () => dispatch(openSideBar()),
  };
}
