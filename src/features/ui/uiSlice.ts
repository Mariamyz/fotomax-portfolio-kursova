import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "dark" | "light";
interface UiState {
  theme: Theme;
  isBusy: boolean;
}

const initialState: UiState = {
  theme: "dark",
  isBusy: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (s, a: PayloadAction<Theme>) => {
      s.theme = a.payload;
    },
    toggleTheme: (s) => {
      s.theme = s.theme === "dark" ? "light" : "dark";
    },
    setBusy: (s, a: PayloadAction<boolean>) => {
      s.isBusy = a.payload;
    },
  },
});

export const { setTheme, toggleTheme, setBusy } = uiSlice.actions;
export default uiSlice.reducer;
