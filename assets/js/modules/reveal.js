/**
 * Hace aparecer suavemente los elementos .reveal al entrar en pantalla.
 * Si JavaScript falla, el contenido queda visible: la animación solo se
 * activa cuando este módulo añade la clase "reveal-ready" a <html>.
 */
export function initReveal() {
  const items = [...document.querySelectorAll(".reveal")];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window) || !items.length) return;

  let fired = false;
  const observer = new IntersectionObserver(
    (entries) => {
      fired = true;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.documentElement.classList.add("reveal-ready");

  // Escalonado ligero entre elementos hermanos
  items.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
    el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 70}ms`;
    observer.observe(el);
  });

  // Red de seguridad: si el observador nunca responde, mostramos todo.
  setTimeout(() => {
    if (!fired) items.forEach((el) => el.classList.add("is-visible"));
  }, 1500);
}
