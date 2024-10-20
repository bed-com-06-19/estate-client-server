import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-acme5tnrqrje3ba3.us.auth0.com"
      clientId="RQQnggKfuWgIcdS0rM2U0zBH6lzpw5Mi"
      authorizationParams={{
        redirect_uri: "http://localhost:5173"
      }}
      audience ="http://localhost:8000"
      scope ="openid profile email"
    >

    <App />
       
    </Auth0Provider>
  </React.StrictMode>
);
