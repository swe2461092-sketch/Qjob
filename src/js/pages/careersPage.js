import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderCareersPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "careers",
    title: t("careers.title"),
    content: `<p class="subtitle">${t("careers.welcome")}</p>`,
  });
}
