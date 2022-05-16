import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

if ("serviceWorker" in navigator) {
  // window.addEventListener("load", function() {
  navigator.serviceWorker.register("/service-worker.js").then(
    function (registration) {
      // Registration was successful
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    },
    function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    }
  );
  // });
}

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
