import React from "react";
import { Provider } from "react-redux";
import { Pagination } from "./pagination";
import configureStore from "./redux/Store";

const rootStore = configureStore();

export default function App() {
  return (
    <Provider store={rootStore}>
      <Pagination />
    </Provider>
  );
}
