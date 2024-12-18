import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import CustomHooksProvider from "./lib/custom-hooks/assets/Provider.jsx";
import HelpersProvider from "./lib/helpers/assets/Provider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomHooksProvider>
      <HelpersProvider>
        <App></App>
      </HelpersProvider>
    </CustomHooksProvider>
  </StrictMode>
);
