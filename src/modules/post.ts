import createRequestSaga from "@/lib/createRequestSaga";
import * as postsAPI from "@/lib/api/posts";
import { takeLatest } from "redux-saga/effects";
import { Draft, produce } from "immer";
import { PostAction, PostState } from "@/constants/redux/types";

const CHANGE_FIELD = "post/CHANGE_FIELD" as const; // 특정 key 값 바꾸기

// 포스트 수정을 위한 데이터 가져오기
const LOAD_POST = "post/LOAD_POST";
const LOAD_POST_SUCCESS = "post/LOAD_POST_SUCCESS" as const;
const LOAD_POST_FAILURE = "post/LOAD_POST_FAILURE" as const;

// 포스트 수정을 위해 post값을 null로 수정
const UNLOAD_POST = "post/UNLOAD_POST" as const;

// 포스트 수정
const UPDATE_POST = "post/UPDATE_POST" as const;
const UPDATE_POST_SUCCESS = "post/UPDATE_POST_SUCCESS" as const;
const UPDATE_POST_FAILURE = "post/UPDATE_POST_FAILURE" as const;

export const changeField = (key: string, value: string | string[]) => ({
  type: CHANGE_FIELD,
  payload: { key: key, value: value },
});

export const loadPost = (id: number) => ({
  type: LOAD_POST,
  payload: { id: id },
});

export const unloadPost = () => ({ type: UNLOAD_POST });

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

const loadPostSaga = createRequestSaga(LOAD_POST, postsAPI.readPost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* postSaga() {
  yield takeLatest(LOAD_POST, loadPostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState: PostState = {
  title: "",
  body: "",
  tags: [],
  post: null,
  postError: null,
  isUpdated: false,
};

const post = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
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
    case UNLOAD_POST:
      return initialState;
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

export default post;
