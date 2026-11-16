/** Encabezado: estado al hacer scroll, menú móvil y enlace activo. */
export function initNav() {
  const header = document.querySelector(".site-header");
  const menu = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");

  // Borde inferior cuando la página se desplaza
  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menú móvil
  if (menu && links) {
    const close = () => {
      links.classList.remove("is-open");
      menu.setAttribute("aria-expanded", "false");
    };
    menu.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  // Marca la sección visible en la navegación
  const anchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = anchors.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        anchors.forEach((a) =>
          a.setAttribute("aria-current", String(a.getAttribute("href") === `#${entry.target.id}`))
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}
