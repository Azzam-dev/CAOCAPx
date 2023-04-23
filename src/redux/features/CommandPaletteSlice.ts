"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// Define a type for the slice state
interface CommandPaletteState {
  isPresented: Boolean;
  query: string;
  paths: string[];
}

// Define the initial state using that type
const initialState: CommandPaletteState = {
  isPresented: false,
  query: "",
  paths: [],
};

export const commandPaletteSlice = createSlice({
  name: "commandPalette",
  // `commandPaletteSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    presentCommandPalette: (state) => {
      state.isPresented = true;
    },
    hideCommandPalette: (state) => {
      state.isPresented = false;
    },
    setCommandPaletteQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setCommandPalettePaths: (state, action: PayloadAction<string[]>) => {
      state.paths = action.payload;
    },
  },
});

export const {
  presentCommandPalette,
  hideCommandPalette,
  setCommandPaletteQuery,
  setCommandPalettePaths,
} = commandPaletteSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isCommandPalettePresented = (state: RootState) =>
  state.commandPalette.isPresented;

export default commandPaletteSlice.reducer;
