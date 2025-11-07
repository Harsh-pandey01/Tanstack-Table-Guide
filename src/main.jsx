import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import TableApp from "./TableApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <TableApp />
  </StrictMode>
);
