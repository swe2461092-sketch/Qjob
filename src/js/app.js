import { mountNavbar, initTheme } from "./components/navbar.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";

initTheme();

const navbarRoot = document.getElementById("navbar");
if (navbarRoot) {
  mountNavbar(navbarRoot);
}

initRouter(routes);
