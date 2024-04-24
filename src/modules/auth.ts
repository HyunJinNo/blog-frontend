import { produce } from "immer";

const CHANGE_FIELD = "auth/CHANGE_FIELD" as const;
const INITIALIZE_FORM = "auth/INITIALIZE_FORM" as const;

/**
 * form의 상태를 변경하는 액션 함수
 * @param form register or login
 * @param key username, password, or passwordConfirm
 * @param value 변경하는 값
 * @returns
 */
export const changeField = (form: string, key: string, value: string) => {
  return {
    type: CHANGE_FIELD,
    form: form,
    key: key,
    value: value,
  };
};

export const initializeForm = (form: string) => {
  return {
    type: INITIALIZE_FORM,
    form: form,
  };
};

type Actions =
  | ReturnType<typeof changeField>
  | ReturnType<typeof initializeForm>;

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
};

const auth = (state = initialState, action: Actions) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return produce<any>(state, (draft) => {
        draft[action.form][action.key] = action.value;
      });
    case INITIALIZE_FORM:
      return {
        ...state,
        [action.form]:
          action.form === "register"
            ? initialState.register
            : initialState.login,
      };
    default:
      return state;
  }
};

export default auth;
