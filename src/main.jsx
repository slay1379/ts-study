import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App2 from "./components/board/App2";

createRoot(document.getElementById("root")).render(
  // <StrictMode>\
  <App2 />
  // </StrictMode>
);
