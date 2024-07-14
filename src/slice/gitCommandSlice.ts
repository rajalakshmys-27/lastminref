import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GitCommands, GitCommandState } from "../models/models";

const initialState: GitCommandState = {
  gitCommandDetails: {} as GitCommands,
  isLoading: false,
  hasData: false,
  error: "",
};

const gitCommandSlice = createSlice({
  name: "gitPage",
  initialState,
  reducers: {
    gitCommandsDataRequest: (state) => {
      state.isLoading = true;
    },
    getGitCommandsDataSuccess: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = true;
      state.error = "";
      state.gitCommandDetails = action.payload;
    },
    getGitCommandsDataFailure: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.hasData = false;
      state.error = action.payload;
    },
  },
});

export const {
  gitCommandsDataRequest,
  getGitCommandsDataSuccess,
  getGitCommandsDataFailure,
} = gitCommandSlice.actions;

export default gitCommandSlice.reducer;
