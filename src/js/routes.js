import { renderOverviewPage } from "./pages/overviewPage.js";
import { renderQuizPage } from "./pages/quizPage.js";
import { renderResultsPage } from "./pages/resultsPage.js";
import { renderCareersPage } from "./pages/careersPage.js";
import { renderContactPage } from "./pages/contactPage.js";
import { renderNotFoundPage } from "./pages/notFoundPage.js";

export const routes = {
  "#/overview": renderOverviewPage,
  "#/quiz": renderQuizPage,
  "#/results": renderResultsPage,
  "#/careers": renderCareersPage,
  "#/contact": renderContactPage,
  "#/404": renderNotFoundPage,
};
