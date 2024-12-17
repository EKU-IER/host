import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import { RemoteHooksProvider } from "./lib/RemoteHooksProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RemoteHooksProvider>
      <App></App>
    </RemoteHooksProvider>
  </StrictMode>
);
