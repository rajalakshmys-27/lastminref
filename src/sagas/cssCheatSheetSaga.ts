import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  cssCheatSheetDataRequest,
  getCSSCheatSheetDataSuccess,
  getCSSCheatSheetDataFailure,
} from "../slice/cssCheatSheetSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const FLEX_BOX_API_URL = "./data/flexboxData.json";
const GRID_API_URL = "./data/gridData.json";

function* getCSSCheatSheetData(action: PayloadAction<any>): any {
  try {
    let API_URL = "";
    if (action.payload.selectedTopic === "flexbox") {
      API_URL = FLEX_BOX_API_URL;
    }
    if (action.payload.selectedTopic === "grid") {
      API_URL = GRID_API_URL;
    }
    const response: any = yield call(axios.get, API_URL, { baseURL: "/" });
    yield put(getCSSCheatSheetDataSuccess(response.data));
  } catch (error: any) {
    yield put(getCSSCheatSheetDataFailure(error.message));
  }
}

export function* watchCSSCheatSheetData(): any {
  yield takeLatest(cssCheatSheetDataRequest.type, getCSSCheatSheetData);
}
