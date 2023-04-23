"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { setCommandPalettePaths } from "@/redux/features/CommandPaletteSlice";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  store.dispatch(
    setCommandPalettePaths([
      "home",
      "about",
      "blog",
      "landing",
      "login",
      "signup",
      "hexcoin",
      "notifications",
      "profile",
      "profile/settings",
      "profile/settings/editProfile",
    ])
  );
  return <Provider store={store}>{children}</Provider>;
}
