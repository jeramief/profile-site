import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import LanguageContext from "./context/LanguageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContext>
      <App />
    </LanguageContext>
  </React.StrictMode>
);
