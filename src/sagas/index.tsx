import { all } from "redux-saga/effects";
import { watchGitCommandsData } from "./gitCommandSaga";
import { watchFlexCheatSheetData } from "./cssCheatSheetSaga";

export default function* rootSaga() {
  yield all([watchGitCommandsData(), watchFlexCheatSheetData()]);
}
