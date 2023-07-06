import { createSlice } from "@reduxjs/toolkit";

const hangmanSlice = createSlice({
  name: "hangmanSlice",
  initialState: {
    remainingLives: 6,
  },
  reducers: {
    updateLives: (state) => {
      if (state.remainingLives > 0)
        state.remainingLives = state.remainingLives - 1;
    },
    resetLives: (state) => {
      state.lives = 6;
    },
  },
});

export const { updateLives, resetLives } = hangmanSlice.actions;

export default hangmanSlice.reducer;
