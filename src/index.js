import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Copyright from "./components/copyright";

import NameForm from "./NameForm";

function App() {
  return (
    <>
      <div style={{ height: "4vh" }}>
        <Header />
      </div>
      <NameForm />
      <div style={{ height: "4vh" }}>
        <Copyright />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
