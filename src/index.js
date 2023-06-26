import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Copyright from "./components/copyright";

import NameForm from "./NameForm";

function App() {
  return (
    <>
      <Header />
      <NameForm />
      <Copyright />
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
