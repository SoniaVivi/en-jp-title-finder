import { configureStore } from "@reduxjs/toolkit";
import { aniListApi } from "./aniListApi";

export const store = configureStore({
  reducer: { [aniListApi.reducerPath]: aniListApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aniListApi.middleware),
});
