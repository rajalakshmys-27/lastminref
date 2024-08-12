import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import gitCommandReducer from "./gitCommandSlice";
import cssCheatSheetReducer from "./cssCheatSheetSlice";

const RootReducer = combineReducers({
  languages: languageReducer,
  gitCommands: gitCommandReducer,
  cssCheatSheet: cssCheatSheetReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
