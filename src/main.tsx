import "./index.css";

import { createRoot } from "react-dom/client";

import App from "./App.tsx";

const renderApp = () => {
  const container = document.querySelector("#root");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
};

renderApp();
