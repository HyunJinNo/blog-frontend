import { combineReducers } from "redux";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
});

export type RootType = ReturnType<typeof rootReducer>;
export default rootReducer;
