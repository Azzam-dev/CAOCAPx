"use client";

import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import { TypeOfExpression } from "typescript";

export const store = configureStore({
  reducer: {
    //...
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
