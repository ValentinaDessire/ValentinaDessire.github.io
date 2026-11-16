/** Alterna entre tema oscuro y claro y recuerda la preferencia. */
const KEY = "vq-theme";

export function initTheme() {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const current = () =>
    root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  const sync = () => button.setAttribute("aria-pressed", String(current() === "light"));
  sync();

  button.addEventListener("click", () => {
    const next = current() === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch { /* almacenamiento no disponible */ }
    sync();
  });
}
