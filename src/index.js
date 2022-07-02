import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext } from "./Contexts/Contexts";
import { BrowserRouter } from "react-router-dom";
import firebase from "./firebase/config";
import Context from "./Contexts/Contexts";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </FirebaseContext.Provider>
);
