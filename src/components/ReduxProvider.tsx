"use client";

import rootReducer from "@/modules";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const store = createStore(rootReducer, undefined, composeWithDevTools());

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}
