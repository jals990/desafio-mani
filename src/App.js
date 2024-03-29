import React from "react";
import 'dotenv/config';
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import GlobalStyle from "./styles/global";
import Routes from "./routes/index";

import history from "./services/history";
import { store, persistor } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
