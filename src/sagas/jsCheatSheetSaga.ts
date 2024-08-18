import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  jsCheatSheetDataRequest,
  getJSCheatSheetDataSuccess,
  getJSCheatSheetDataFailure,
} from "../slice/jsCheatSheetSlice";

const API_URL = "./data/javascriptData.json";

function* getJSCommandsData(): any {
  try {
    const response: any = yield call(axios.get, API_URL, { baseURL: "/" });
    yield put(getJSCheatSheetDataSuccess(response.data));
  } catch (error: any) {
    yield put(getJSCheatSheetDataFailure(error.message));
  }
}

export function* watchJSCommandsData(): any {
  yield takeLatest(jsCheatSheetDataRequest.type, getJSCommandsData);
}
