import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Button from "./components/CounterButton";
ReactDOM.render(
  <div>
    <Hello name="Airam" />
    <Button />
  </div>,
  document.getElementById("app")
);
