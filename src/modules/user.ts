import createRequestSaga from "@/lib/createRequestSaga";
import * as authAPI from "@/lib/api/auth";
import { takeLatest } from "redux-saga/effects";
import { Draft, produce } from "immer";
import { AxiosError } from "axios";

const TEMP_SET_USER = "user/TEMP_SET_USER" as const; // 새로고침 이후 임시 로그인 처리

// 회원 정보 확인
const CHECK = "user/CHECK" as const;
const CHECK_SUCCESS = "user/CHECK_SUCCESS" as const;
const CHECK_FAILURE = "user/CHECK_FAILURE" as const;

export const tempSetUser = (id: number, username: string) => {
  return {
    type: TEMP_SET_USER,
    payload: {
      id: id,
      username: username,
    },
  };
};

export const check = () => {
  return {
    type: CHECK,
  };
};

type Action = {
  type: string;
  payload: {
    id: number;
    username: string;
  };
  error: AxiosError;
};

const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const initialState = {
  id: -1,
  username: null,
  checkError: null,
};

export const user = (state = initialState, action: Action) => {
  switch (action.type) {
    case TEMP_SET_USER:
      return produce(state, (draft: Draft<any>) => {
        draft.id = action.payload.id;
        draft.username = action.payload.username;
      });
    case CHECK_SUCCESS:
      return produce(state, (draft: Draft<any>) => {
        draft.id = action.payload.id;
        draft.username = action.payload.username;
        draft.checkError = null;
      });
    case CHECK_FAILURE:
      return produce(state, (draft: Draft<any>) => {
        draft.id = -1;
        draft.username = null;
        draft.checkError = action.error;
      });
    default:
      return state;
  }
};
