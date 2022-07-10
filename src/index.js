import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { swDev } from "./swDev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

swDev();
// serviceWorkerRegistration.register();
