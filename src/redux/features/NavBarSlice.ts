"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

enum NavBarViews {
  explore = 0,
  build,
  colab,
}

// Define a type for the slice state
interface NavBarState {
  selectedView: NavBarViews;
}

// Define the initial state using that type
const initialState: NavBarState = {
  selectedView: NavBarViews.explore,
};

export const navBarSlice = createSlice({
  name: "navBar",
  // `commandPaletteSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSelectedNavBarView: (state, action: PayloadAction<NavBarViews>) => {
      state.selectedView = action.payload;
    },
  },
});

export const { setSelectedNavBarView } = navBarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedNavBarView = (state: RootState) =>
  state.navBar.selectedView;

export default navBarSlice.reducer;
