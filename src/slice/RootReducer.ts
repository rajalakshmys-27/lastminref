import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import gitCommandReducer from "./gitCommandSlice";

const RootReducer = combineReducers({
  languages: languageReducer,
  gitCommands: gitCommandReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
