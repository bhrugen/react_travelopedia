import React from "react";
import ReactDOM from "react-dom/client";
import DestinationIndex from "./components/DestinationIndex";
import Header from "./layout/Header";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { destinationAPI } from "./api/destinationApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={destinationAPI}>
      <Header />
      <DestinationIndex />
    </ApiProvider>
  </React.StrictMode>
);
