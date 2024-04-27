"use client";

import rootReducer, { rootSaga } from "@/modules";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import LocalStorage from "../localStorage/LocalStorage";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <LocalStorage>{children}</LocalStorage>
    </Provider>
  );
}
