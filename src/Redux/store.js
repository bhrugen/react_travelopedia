import { configureStore } from "@reduxjs/toolkit";
import { destinationApi } from "../api/destinationApi";
import { randomDestinationApi } from "../api/randomDestinationApi";
export const store = configureStore({
  reducer: {
    [destinationApi.reducerPath]: destinationApi.reducer,
    [randomDestinationApi.reducerPath]: randomDestinationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(destinationApi.middleware)
      .concat(randomDestinationApi.middleware),
});
