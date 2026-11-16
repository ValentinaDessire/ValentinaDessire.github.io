/**
 * Pinta la cuadrícula de proyectos a partir de data/projects.json
 * y gestiona los filtros. Para añadir un proyecto, edita solo el JSON.
 */
const ARROW = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';

const escape = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function cardTemplate(p, i) {
  if (p.slot) {
    return `
      <article class="card project is-slot reveal" data-category="${escape(p.category)}">
        <span class="project-index">+</span>
        <h3>${escape(p.title)}</h3>
        <p>${escape(p.summary)}</p>
        <div class="links"><a href="#contacto">Escríbeme ${ARROW}</a></div>
      </article>`;
  }
  const tags = (p.tags || []).map((t) => `<li class="tag">${escape(t)}</li>`).join("");
  const demo = p.demo ? `<a href="${escape(p.demo)}">Ver demo ${ARROW}</a>` : "";
  const caso = p.case ? `<a href="${escape(p.case)}">Caso de estudio ${ARROW}</a>` : "";
  const repo = p.repo ? `<a href="${escape(p.repo)}" target="_blank" rel="noopener">Código ${ARROW}</a>` : "";
  return `
    <article class="card project reveal" data-category="${escape(p.category)}">
      <div class="project-top">
        <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
        ${p.status ? `<span class="badge">${escape(p.status)}</span>` : ""}
      </div>
      <h3>${escape(p.title)}</h3>
      <p>${escape(p.summary)}</p>
      <ul class="tag-row" aria-label="Tecnologías">${tags}</ul>
      <div class="links">${demo}${caso}${repo}</div>
    </article>`;
}

function bindFilters(grid) {
  const buttons = document.querySelectorAll(".filter");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const value = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      grid.querySelectorAll(".project").forEach((card) => {
        card.hidden = !(value === "all" || card.dataset.category === value);
      });
    })
  );
}

export async function initProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  try {
    const res = await fetch("data/projects.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(res.status);
    const projects = await res.json();
    let n = 0;
    grid.innerHTML = projects.map((p) => cardTemplate(p, p.slot ? 0 : n++)).join("");
    bindFilters(grid);
  } catch (err) {
    grid.innerHTML =
      '<p class="card" style="padding:1.5rem">No se pudieron cargar los proyectos. Si abriste el archivo directamente, ejecuta un servidor local (ver README).</p>';
    console.warn("[portfolio] projects:", err);
  }
}
