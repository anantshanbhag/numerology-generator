import React from "react";
import ReactDOM from "react-dom";

import NameForm from "./NameForm";

function App() {
  return <NameForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
