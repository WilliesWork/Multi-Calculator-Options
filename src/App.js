// eslint-disable-next-line no-use-before-define
import React from "react";
import { Provider } from "react-redux";
import "./Styling/App.css";
import { NavBar } from "./Components/Content";
import { store } from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
