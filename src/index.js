import React from "react";
import ReactDom  from "react-dom/client";
import "./index.css"
import App from "./App"
import Store from "./Store";
import { Provider } from "react-redux";
const Root =ReactDom.createRoot(document.getElementById("root"));

Root.render(
  <Provider store={Store}>
          <App/>
  </Provider>

    

)