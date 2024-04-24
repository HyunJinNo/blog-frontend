const SAMPLE_ACTION = "auth/SAMPLE_ACTION" as const;

export const sampleAction = () => ({ type: SAMPLE_ACTION });

type Actions = ReturnType<typeof sampleAction>;

const initialState = {};

const auth = (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default auth;
