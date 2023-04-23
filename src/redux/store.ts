"use client";

import { configureStore } from "@reduxjs/toolkit";
import CommandPaletteReducer from "./features/CommandPaletteSlice";

export const store = configureStore({
  reducer: {
    commandPalette: CommandPaletteReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
    //...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
