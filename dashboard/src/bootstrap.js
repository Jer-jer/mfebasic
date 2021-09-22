import { createApp } from 'vue';

import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  const app = createApp(Dashboard);

  app.mount(el);
};

//running in isolation
if (process.env.NODE_ENV === "development") {
  const authRoot = document.querySelector("#_dashboard-dev-root");

  if (authRoot) {
    mount(authRoot);
  }
}

//running in container
export { mount };
