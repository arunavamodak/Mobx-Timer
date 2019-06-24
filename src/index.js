import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import App from "./App";

class AppState {
  constructor() {}
}

render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
