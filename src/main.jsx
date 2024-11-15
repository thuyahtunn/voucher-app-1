import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);
