import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderQuizPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "quiz",
    title: t("quiz.title"),
    content: `<p class="subtitle">${t("quiz.welcome")}</p>`,
  });
}
