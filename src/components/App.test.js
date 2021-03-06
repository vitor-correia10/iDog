import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "../Store";

it("Render without crashing", () => {
  const store = configureStore();
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
  
  ReactDOM.unmountComponentAtNode(div);
});