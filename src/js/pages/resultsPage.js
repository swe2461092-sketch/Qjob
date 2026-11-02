import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderResultsPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "results",
    title: t("results.title"),
    content: `<p class="subtitle">${t("results.welcome")}</p>`,
  });
}
