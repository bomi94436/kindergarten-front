import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./modules/store";
const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
