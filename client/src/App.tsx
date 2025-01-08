import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./scenes/Layout";

ReactDom.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,

);
