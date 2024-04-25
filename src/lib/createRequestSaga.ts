import { finishLoading, startLoading } from "@/modules/loading";
import { call, put } from "redux-saga/effects";

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS` as const;
  const FAILURE = `${type}_FAILURE` as const;

  return function* (action: any): any {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }

    yield put(finishLoading(type)); // 로딩 끝
  };
}
