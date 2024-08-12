import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  flexCheatSheetDataRequest,
  getFlexCheatSheetDataSuccess,
  getFlexCheatSheetDataFailure,
} from "../slice/cssCheatSheetSlice";

const API_URL = "./data/flexboxData.json";

function* getFlexCheatSheetData(): any {
  try {
    const response: any = yield call(axios.get, API_URL, { baseURL: "/" });
    yield put(getFlexCheatSheetDataSuccess(response.data));
  } catch (error: any) {
    yield put(getFlexCheatSheetDataFailure(error.message));
  }
}

export function* watchFlexCheatSheetData(): any {
  yield takeLatest(flexCheatSheetDataRequest.type, getFlexCheatSheetData);
}
