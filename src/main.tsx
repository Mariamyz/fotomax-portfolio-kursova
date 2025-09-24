import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./store";

import { ContentProvider } from "./content/ContentContext"; // ВАЖЛИВО: правильний шлях
import App from "./App";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <BrowserRouter>
          <ContentProvider>
            <App />
          </ContentProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
);
