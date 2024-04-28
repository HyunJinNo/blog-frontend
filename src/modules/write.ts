const INITIALIZE = "write/INITIALIZE" as const; // 모든 내용 초기화
const CHANGE_FIELD = "write/CHANGE_FIELD" as const; // 특정 key 값 바꾸기

export const initialize = () => {
  return {
    type: INITIALIZE,
  };
};

export const changeField = (key: string, value: string) => {
  return {
    type: CHANGE_FIELD,
    payload: {
      key: key,
      value: value,
    },
  };
};

type Action = {
  type: string;
  payload: {
    key: string;
    value: string;
  };
};

type State = {
  title: string;
  body: string;
  tags: string[];
};

const initialState: State = {
  title: "",
  body: "",
  tags: [],
};

const write = (state = initialState, action: Action) => {
  switch (action.type) {
    case INITIALIZE:
      return initialState; // 초기화
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};

export default write;
