import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./ApiSlice";

export const Store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
