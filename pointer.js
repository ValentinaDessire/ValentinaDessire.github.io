/**
 * Microinteracciones con el puntero:
 *  - .card: un brillo que sigue al cursor.
 *  - .magnetic: el botón se desplaza levemente hacia el cursor.
 * Se desactivan en pantallas táctiles y con "reducir movimiento".
 */
export function initPointerEffects() {
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reduce) return;

  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest?.(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - r.left}px`);
    card.style.setProperty("--y", `${e.clientY - r.top}px`);
  }, { passive: true });

  document.querySelectorAll(".magnetic").forEach((btn) => {
    const strength = 0.22;
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty("--mx", `${(e.clientX - (r.left + r.width / 2)) * strength}px`);
      btn.style.setProperty("--my", `${(e.clientY - (r.top + r.height / 2)) * strength}px`);
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.setProperty("--mx", "0px");
      btn.style.setProperty("--my", "0px");
    });
  });
}
