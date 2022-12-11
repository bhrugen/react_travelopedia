import { configureStore } from "@reduxjs/toolkit";
import { destinationApi } from "../api/destinationApi";

export const store = configureStore({
  reducer: {
    [destinationApi.reducerPath]: destinationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(destinationApi.middleware),
});
