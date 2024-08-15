import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CSSCheatSheetState, CheatSheetData } from "../models/models";

const initialState: CSSCheatSheetState = {
  cssCheatSheetDetails: {} as CheatSheetData,
  isLoading: false,
  hasData: false,
  error: "",
};

const cssCheatSheetSlice = createSlice({
  name: "cssPage",
  initialState,
  reducers: {
    cssCheatSheetDataRequest: (state: any, action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    getCSSCheatSheetDataSuccess: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = true;
      state.error = "";
      state.cssCheatSheetDetails = action.payload;
    },
    getCSSCheatSheetDataFailure: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = false;
      state.error = action.payload;
    },
  },
});

export const {
  cssCheatSheetDataRequest,
  getCSSCheatSheetDataSuccess,
  getCSSCheatSheetDataFailure,
} = cssCheatSheetSlice.actions;

export default cssCheatSheetSlice.reducer;
