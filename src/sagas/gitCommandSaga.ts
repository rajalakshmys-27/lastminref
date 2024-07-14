import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getGitCommandsDataFailure,
  getGitCommandsDataSuccess,
  gitCommandsDataRequest,
} from "../slice/gitCommandSlice";

const API_URL = "./data/gitCommands.json";

function* getGitCommandsData(): any {
  try {
    const response: any = yield call(axios.get, API_URL, { baseURL: "/" });
    yield put(getGitCommandsDataSuccess(response.data));
  } catch (error: any) {
    yield put(getGitCommandsDataFailure(error.message));
  }
}

export function* watchGitCommandsData(): any {
  yield takeLatest(gitCommandsDataRequest.type, getGitCommandsData);
}
