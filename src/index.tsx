import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Button from "./components/New";
ReactDOM.render(
  <div>
    <Hello name="Airam" />
    <Button title="Airam" />
  </div>,
  document.getElementById("app")
);
