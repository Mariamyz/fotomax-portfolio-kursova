import { configureStore } from "@reduxjs/toolkit";
import { publicApi } from "../services/publicApi";
import uiReducer from "../features/ui/uiSlice";
import leadsReducer from "../features/leads/leadsSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    leads: leadsReducer,
    [publicApi.reducerPath]: publicApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(publicApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
