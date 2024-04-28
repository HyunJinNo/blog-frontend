import { LoadingAction } from "@/constants/types";

const START_LOADING = "loading/START_LOADING" as const;
const FINISH_LOADING = "loading/FINISH_LOADING" as const;

// 요청을 위한 액션 타입을 payload로 설정 (Ex. "sample/GET_POST")

export const startLoading = (requestType: string) => {
  return {
    type: START_LOADING,
    payload: requestType,
  };
};

export const finishLoading = (requestType: string) => {
  return {
    type: FINISH_LOADING,
    payload: requestType,
  };
};

const initialState = {};

const loading = (state = initialState, action: LoadingAction) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default loading;
