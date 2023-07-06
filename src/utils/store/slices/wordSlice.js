import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
  name: "wordSlice",
  initialState: {
    wordToGuess: "",
    wordToGuessArray: [],
    lettersToGuess: 0,
    guessedLetters: [],
    validLetters: [],
    partOfSpeech: [],
    definitions: [],
    winStatus: false,
  },
  reducers: {
    assignWord: (state, action) => {
      state.wordToGuess = action.payload;
      state.wordToGuessArray = action.payload.split("");

      state.lettersToGuess = new Set(state.wordToGuessArray).size;
    },

    assignWordInfo: (state, action) => {
      const meaning = action.payload[0]?.meanings[0];

      state.partOfSpeech.push(meaning?.partOfSpeech);
      state.definitions.push(meaning?.definitions[0]?.definition);
    },

    addPressedKey: (state, action) => {
      const key = action.payload;

      state.guessedLetters.push(key);

      if (state.wordToGuessArray.includes(key)) {
        state.validLetters.push(key);
      }

      if (state.validLetters.length === state.lettersToGuess) {
        state.winStatus = true;
      }
    },
  },
});

export const { assignWord, assignWordInfo, addPressedKey } = wordSlice.actions;

export default wordSlice.reducer;
