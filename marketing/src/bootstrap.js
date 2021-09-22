import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./app";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

//running in isolation
if (process.env.NODE_ENV === "development") {
  const marketRoot = document.querySelector("#_marketing-dev-root");

  if (marketRoot) {
    mount(marketRoot, { defaultHistory: createBrowserHistory() });
  }
}

//running in container
export { mount };
