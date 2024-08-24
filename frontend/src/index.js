import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./landingPage.js/context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <UserProvider>
      <ToastContainer />
      <App />
    </UserProvider>
  </Router>
);
