import createRequestSaga from "@/lib/createRequestSaga";
import { Draft, produce } from "immer";
import * as authApi from "@/lib/api/auth";
import { takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";
import { AuthAction, AuthState } from "@/constants/types";

const CHANGE_FIELD = "auth/CHANGE_FIELD" as const;
const INITIALIZE_FORM = "auth/INITIALIZE_FORM" as const;

const REGISTER = "auth/REGISTER" as const;
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS" as const;
const REGISTER_FAILURE = "auth/REGISTER_FAILURE" as const;

const LOGIN = "auth/LOGIN" as const;
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS" as const;
const LOGIN_FAILURE = "auth/LOGIN_FAILURE" as const;

/**
 * form의 상태를 변경하는 액션 함수
 * @param form register or login
 * @param key username, password, or passwordConfirm
 * @param value 변경하는 값
 */
export const changeField = (form: string, key: string, value: string) => {
  return {
    type: CHANGE_FIELD,
    payload: {
      form: form,
      key: key,
      value: value,
    },
  };
};

/**
 * @param form register or login
 */
export const initializeForm = (form: string) => {
  return {
    type: INITIALIZE_FORM,
    payload: {
      form: form,
    },
  };
};

export const register = (username: string, password: string) => {
  return {
    type: REGISTER,
    payload: {
      username: username,
      password: password,
    },
  };
};

export const login = (username: string, password: string) => {
  return {
    type: LOGIN,
    payload: {
      username: username,
      password: password,
    },
  };
};

// 사가 생성
const registerSaga = createRequestSaga(REGISTER, authApi.register);
const loginSaga = createRequestSaga(LOGIN, authApi.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState: AuthState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth: null,
  authError: null,
};

const auth = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return produce(state, (draft: Draft<any>) => {
        draft[action.payload.form][action.payload.key] = action.payload.value;
      });
    case INITIALIZE_FORM:
      return produce(state, (draft: Draft<any>) => {
        draft[action.payload.form] =
          initialState[
            action.payload.form === "register" ? "register" : "login"
          ];
        draft.authError = null; // Form 전환 시 회원 인증 에러 초기화
      });
    case REGISTER_SUCCESS:
      return produce(state, (draft: Draft<any>) => {
        draft.auth = action.payload;
        draft.authError = null;
      });
    case REGISTER_FAILURE:
      return produce(state, (draft: Draft<any>) => {
        draft.auth = null;
        draft.authError = action.error;
      });
    case LOGIN_SUCCESS:
      return produce(state, (draft: Draft<any>) => {
        draft.auth = action.payload;
        draft.authError = null;
      });
    case LOGIN_FAILURE:
      return produce(state, (draft: Draft<any>) => {
        draft.auth = null;
        draft.authError = action.error;
      });
    default:
      return state;
  }
};

export default auth;
