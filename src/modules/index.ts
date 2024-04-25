import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([authSaga()]);
}

export type RootType = ReturnType<typeof rootReducer>;
export default rootReducer;
