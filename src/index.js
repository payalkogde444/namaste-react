import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";
import "./src/index.css"; // Tailwind styles

const root = createRoot(document.getElementById("root"));
root.render(<App />);
