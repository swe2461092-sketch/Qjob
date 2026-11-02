import { t, toggleLanguage } from "../i18n/i18n.js";

// Харанхуй горимыг шалгах ба идэвхжүүлэх
export function initTheme() {
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    document.body.classList.add("dark-theme");
  }
}

export function renderNavbar() {
  const isDark = localStorage.getItem("theme") === "dark";
  const themeIcon = isDark ? "fa-sun" : "fa-moon";

  return `
    <header class="app-sticky app-shadow">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item has-text-weight-bold is-uppercase app-logo is-flex is-align-items-center" href="#/overview">
              <img src="./icon/icon.png" alt="Logo" class="mr-2" style="max-height: 2.5rem;" />
              <span><span class="has-text-dark">Question</span>Job</span>
            </a>
            <a class="navbar-burger" role="button" aria-expanded="false" data-target="topNavbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu has-text-weight-semibold" id="topNavbar">
            <div class="navbar-start app-top-navbar-right">
              <a class="navbar-item" href="#/overview">
                <span class="icon has-text-info"><i class="fas fa-home"></i></span>
                <span>${t("nav.overview")}</span>
              </a>
              <a class="navbar-item" href="#/quiz">
                <span class="icon has-text-primary"><i class="fas fa-clipboard-question"></i></span>
                <span>${t("nav.quiz")}</span>
              </a>
              <a class="navbar-item" href="#/results">
                <span class="icon has-text-success"><i class="fas fa-chart-pie"></i></span>
                <span>${t("nav.results")}</span>
              </a>
              <a class="navbar-item" href="#/careers">
                <span class="icon has-text-warning"><i class="fas fa-briefcase"></i></span>
                <span>${t("nav.careers")}</span>
              </a>
              <a class="navbar-item" href="#/contact">
                <span class="icon has-text-danger"><i class="fas fa-envelope"></i></span>
                <span>${t("nav.contact")}</span>
              </a>
            </div>
            <div class="navbar-end is-flex is-align-items-center">
              <!-- Dark mode товч -->
              <button class="button is-light mr-2" id="themeToggle" title="Theme Toggle">
                <span class="icon"><i class="fas ${themeIcon}"></i></span>
              </button>
              <a class="navbar-item button is-secondary my-2" href="#" id="langToggle">${t("nav.language")}</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}

export function initNavbar() {
  const burger = document.querySelector(".navbar-burger");
  const languageToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");

  if (burger) {
    const targetId = burger.dataset.target;
    const menu = document.getElementById(targetId);
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu?.classList.toggle("is-active");
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", (event) => {
      event.preventDefault();
      toggleLanguage();
      window.location.reload();
    });
  }

  // Dark Mode дарахад ажиллах логик
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // Сормуусан/Нарны айконыг солих
      const icon = themeToggle.querySelector("i");
      if (icon) {
        icon.className = `fas ${isDark ? "fa-sun" : "fa-moon"}`;
      }
    });
  }
}

export function mountNavbar(root) {
  if (!root) return;
  root.innerHTML = renderNavbar();
  initNavbar();
}
