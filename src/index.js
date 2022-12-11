import React from "react";
import ReactDOM from "react-dom/client";
import DestinationIndex from "./components/DestinationIndex";
import Header from "./layout/Header";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import RandomDestination from "./components/RandomDestination";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <DestinationIndex />
      <RandomDestination />
    </Provider>
  </React.StrictMode>
);
