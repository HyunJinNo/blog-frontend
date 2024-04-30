import { WriteAction, WriteState } from "@/constants/redux/types";
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

// 포스트 수정을 위한 데이터 가져오기
const LOAD_POST = "write/LOAD_POST";
const LOAD_POST_SUCCESS = "write/LOAD_POST_SUCCESS" as const;
const LOAD_POST_FAILURE = "write/LOAD_POST_FAILURE" as const;

// 포스트 수정
const UPDATE_POST = "write/UPDATE_POST" as const;
const UPDATE_POST_SUCCESS = "write/UPDATE_POST_SUCCESS" as const;
const UPDATE_POST_FAILURE = "write/UPDATE_POST_FAILURE" as const;

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

export const loadPost = (id: number) => {
  return {
    type: LOAD_POST,
    payload: {
      id: id,
    },
  };
};

export const updatePost = (
  id: number,
  title?: string,
  body?: string,
  tags?: string[],
) => {
  return {
    type: UPDATE_POST,
    payload: {
      id: id,
      title: title,
      body: body,
      tags: tags,
    },
  };
};

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const loadPostSaga = createRequestSaga(LOAD_POST, postsAPI.readPostFromClient);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(LOAD_POST, loadPostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState: WriteState = {
  title: "",
  body: "",
  tags: [],
  post: null,
  postError: null,
  isUpdated: false,
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
    case LOAD_POST:
      return initialState;
    case LOAD_POST_SUCCESS:
      return produce(state, (draft: Draft<any>) => {
        draft.title = action.payload.title;
        draft.body = action.payload.body;
        draft.tags = action.payload.tags;
        draft.post = {
          id: action.payload.id,
          user_id: action.payload.user_id,
        };
      });
    case LOAD_POST_FAILURE:
      return produce(state, (draft: Draft<any>) => {
        draft.postError = action.error;
      });
    case UPDATE_POST_SUCCESS:
      return produce(state, (draft: Draft<any>) => {
        draft.isUpdated = true;
      });
    case UPDATE_POST_FAILURE:
      return produce(state, (draft: Draft<any>) => {
        draft.postError = action.error;
      });
    default:
      return state;
  }
};

export default write;
