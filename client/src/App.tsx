import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./scenes/Layout";

ReactDom.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("app")
);
