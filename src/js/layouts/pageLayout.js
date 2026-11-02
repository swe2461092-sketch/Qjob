export function renderPageLayout({
  id = "",
  title = "",
  content = "",
  sectionClass = "section",
  containerClass = "container",
  titleClass = "title is-size-3-tablet is-size-2-desktop has-text-centered mb-5",
}) {
  return `
    <section ${id ? `id="${id}"` : ""} class="${sectionClass}">
      <div class="${containerClass}">
        ${title ? `<h1 class="${titleClass}">${title}</h1>` : ""}
        <div class="content-body">
          ${content}
        </div>
      </div>
    </section>
  `;
}
