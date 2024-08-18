import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JSCheatSheetData, JSCheatSheetState } from "../models/models";

const initialState: JSCheatSheetState = {
  jsCheatSheetDetails: {} as JSCheatSheetData,
  isLoading: false,
  hasData: false,
  error: "",
};

const jsCheatSheetSlice = createSlice({
  name: "jsPage",
  initialState,
  reducers: {
    jsCheatSheetDataRequest: (state: any) => {
      state.isLoading = true;
    },
    getJSCheatSheetDataSuccess: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = true;
      state.error = "";
      state.jsCheatSheetDetails = action.payload;
    },
    getJSCheatSheetDataFailure: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = false;
      state.error = action.payload;
    },
  },
});

export const {
  jsCheatSheetDataRequest,
  getJSCheatSheetDataSuccess,
  getJSCheatSheetDataFailure,
} = jsCheatSheetSlice.actions;

export default jsCheatSheetSlice.reducer;
