import { WriteAction, WriteState } from "@/constants/types";
import createRequestSaga from "@/lib/createRequestSaga";
import * as postsAPI from "@/lib/api/posts";
import { takeLatest } from "redux-saga/effects";
import { Draft, produce } from "immer";

const INITIALIZE = "write/INITIALIZE" as const; // 모든 내용 초기화
const CHANGE_FIELD = "write/CHANGE_FIELD" as const; // 특정 key 값 바꾸기

// 포스트 작성
const WRITE_POST = "write/WRITE_POST" as const;
const WRITE_POST_SUCCESS = "write/WRITE_POST_SUCCESS" as const;
const WRITE_POST_FAILURE = "write/WRITE_POST_FAILURE" as const;

export const initialize = () => {
  return {
    type: INITIALIZE,
  };
};

export const changeField = (key: string, value: string | string[]) => {
  return {
    type: CHANGE_FIELD,
    payload: {
      key: key,
      value: value,
    },
  };
};

export const writePost = (title: string, body: string, tags: string[]) => {
  return {
    type: WRITE_POST,
    payload: {
      title: title,
      body: body,
      tags: tags,
    },
  };
};

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState: WriteState = {
  title: "",
  body: "",
  tags: [],
  post: null,
  postError: null,
};

const write = (state = initialState, action: WriteAction) => {
  switch (action.type) {
    case INITIALIZE:
      return initialState; // 초기화
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case WRITE_POST:
      return produce(state, (draft: Draft<any>) => {
        draft.post = null;
        draft.postError = null;
      });
    case WRITE_POST_SUCCESS:
      return produce(state, (draft: Draft<any>) => {
        draft.post = {
          id: action.payload.id,
          user_id: action.payload.user_id,
        };
      });
    case WRITE_POST_FAILURE:
      return produce(state, (draft: Draft<any>) => {
        draft.postError = action.error;
      });
    default:
      return state;
  }
};

export default write;
