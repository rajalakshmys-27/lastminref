import { all } from "redux-saga/effects";
import { watchGitCommandsData } from "./gitCommandSaga";
import { watchCSSCheatSheetData } from "./cssCheatSheetSaga";

export default function* rootSaga() {
  yield all([watchGitCommandsData(), watchCSSCheatSheetData()]);
}
