import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AuthContextProvider,
  CountriesContextProvider,
  ProductsContextProvider,
  TenantsContextProvider,
} from "./contexts";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CountriesContextProvider>
          <ProductsContextProvider>
            <TenantsContextProvider>
              <MantineProvider withNormalizeCSS withGlobalStyles>
                <NotificationsProvider position='top-right'>
                  <App />
                </NotificationsProvider>
              </MantineProvider>
            </TenantsContextProvider>
          </ProductsContextProvider>
        </CountriesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
