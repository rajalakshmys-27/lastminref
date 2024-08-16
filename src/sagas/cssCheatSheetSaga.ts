import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  cssCheatSheetDataRequest,
  getCSSCheatSheetDataSuccess,
  getCSSCheatSheetDataFailure,
} from "../slice/cssCheatSheetSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  CSS_API_URL,
  FLEX_BOX_API_URL,
  GRID_API_URL,
  ANIMATION_API_URL,
} from "../constants/apiUrls";

let API_URL = "";

const apiURLSelect = (topic: string) => {
  switch (topic) {
    case "cssbasics":
      API_URL = CSS_API_URL;
      break;
    case "flexbox":
      API_URL = FLEX_BOX_API_URL;
      break;
    case "grid":
      API_URL = GRID_API_URL;
      break;
    case "animation":
      API_URL = ANIMATION_API_URL;
      break;
    default:
      API_URL = CSS_API_URL;
      break;
  }
};

function* getCSSCheatSheetData(action: PayloadAction<any>): any {
  try {
    apiURLSelect(action.payload.selectedTopic);
    const response: any = yield call(axios.get, API_URL, { baseURL: "/" });
    yield put(getCSSCheatSheetDataSuccess(response.data));
  } catch (error: any) {
    yield put(getCSSCheatSheetDataFailure(error.message));
  }
}

export function* watchCSSCheatSheetData(): any {
  yield takeLatest(cssCheatSheetDataRequest.type, getCSSCheatSheetData);
}
