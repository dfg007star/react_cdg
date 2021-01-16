import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import Header from "./components/header";
import ErrorBoundry from "./components/error-boundry";
import WorklogService from "./services/worklog-service";
import { WorklogServiceProvider } from "./services/worklog-service-context";

import store from "./store";

const worklogService = new WorklogService();

render(
  <Provider store={store}>
    <ErrorBoundry>
      <WorklogServiceProvider value={worklogService}>
        <Router>
          <Header />
          <App />
        </Router>
      </WorklogServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
