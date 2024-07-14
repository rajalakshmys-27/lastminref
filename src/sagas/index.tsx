import { all } from "redux-saga/effects";
import { watchGitCommandsData } from "./gitCommandSaga";

export default function* rootSaga() {
  yield all([watchGitCommandsData()]);
}
