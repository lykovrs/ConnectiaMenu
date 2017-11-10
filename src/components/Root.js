import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "../store";

/**
 * Корневой элемент с подключением Redux
 */
class Root extends Component {
  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
