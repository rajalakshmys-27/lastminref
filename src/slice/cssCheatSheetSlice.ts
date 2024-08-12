import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CSSCheatSheetState, FlexboxCheatSheet } from "../models/models";

const initialState: CSSCheatSheetState = {
  cssCheatSheetDetails: {} as FlexboxCheatSheet,
  isLoading: false,
  hasData: false,
  error: "",
};

const cssCheatSheetSlice = createSlice({
  name: "cssPage",
  initialState,
  reducers: {
    flexCheatSheetDataRequest: (state) => {
      state.isLoading = true;
    },
    getFlexCheatSheetDataSuccess: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = true;
      state.error = "";
      state.cssCheatSheetDetails = action.payload;
    },
    getFlexCheatSheetDataFailure: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = false;
      state.error = action.payload;
    },
  },
});

export const {
  flexCheatSheetDataRequest,
  getFlexCheatSheetDataSuccess,
  getFlexCheatSheetDataFailure,
} = cssCheatSheetSlice.actions;

export default cssCheatSheetSlice.reducer;
