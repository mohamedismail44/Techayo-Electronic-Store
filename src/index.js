import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import MediaContextProvider from "./components/Context/MediaStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-3hiu7kzlriut8qt0.us.auth0.com"
    clientId="NbSLyuhkZKxmx6nFgN7ijsmSBOl65irv"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <MediaContextProvider>
      <App />
    </MediaContextProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
