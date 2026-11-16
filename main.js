/**
 * Punto de entrada. Cada funcionalidad vive en su propio módulo
 * para que sea fácil de leer, reutilizar o quitar.
 */
import { initTheme } from "./modules/theme.js";
import { initNav } from "./modules/nav.js";
import { initReveal } from "./modules/reveal.js";
import { initPointerEffects } from "./modules/pointer.js";
import { initProjects } from "./modules/projects.js";

const ready = (fn) =>
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fn) : fn();

ready(async () => {
  initTheme();
  initNav();
  await initProjects();   // pinta las tarjetas antes de activar animaciones
  initReveal();
  initPointerEffects();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
