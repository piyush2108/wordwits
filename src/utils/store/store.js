import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./slices/wordSlice";
import hangmanSlice from "./slices/hangmanSlice";

const store = configureStore({
  reducer: {
    word: wordSlice,
    hangman: hangmanSlice,
  },
});

export default store;
