import React from "react";
import ReactDOM from "react-dom/client";
import DestinationIndex from "./components/DestinationIndex";
import Header from "./layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <DestinationIndex />
  </React.StrictMode>
);
