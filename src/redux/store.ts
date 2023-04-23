"use client";

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counterSlice";
import CommandPaletteReducer from "./features/CommandPaletteSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    commandPalette: CommandPaletteReducer,

    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
    //...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
