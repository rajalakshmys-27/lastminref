import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  languages: string[];
}

const initialState: LanguageState = {
  languages: ["Javascript", "React JS", "Git"],
};

const languageSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    addLanguage(state, action: PayloadAction<string>) {
      state.languages.push(action.payload);
    },
  },
});

export const { addLanguage } = languageSlice.actions;
export default languageSlice.reducer;
