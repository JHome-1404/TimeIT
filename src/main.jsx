import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { GeneralProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralProvider>
    <App />
  </GeneralProvider>
);
