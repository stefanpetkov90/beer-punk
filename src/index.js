import React from "react";
import ReactDOM from "react-dom";
// Router
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
// Component
import App from "./components/App/App";
// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./configureStore";

const initialState = {};
/** Redux store */
const store = configureStore(initialState)[0];
/** Redux Persistor store */
const persistor = configureStore(initialState)[1];
/** Contains history */
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
