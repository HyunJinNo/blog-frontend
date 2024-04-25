import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import { all } from "redux-saga/effects";
import { user, userSaga } from "./user";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([authSaga(), userSaga()]);
}

export type RootType = ReturnType<typeof rootReducer>;
export default rootReducer;
