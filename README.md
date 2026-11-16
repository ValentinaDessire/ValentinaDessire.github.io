# Portafolio · Valentina Quintero

Portafolio personal de **Valentina Quintero**, Ingeniera en Informática: diseño web, desarrollo frontend y contenido.
Construido a mano con **HTML5 semántico, CSS moderno y JavaScript modular**, sin frameworks ni pasos de compilación.

🔗 **Sitio en vivo:** https://valentinadessire.github.io

---

## ✨ Características

- **100 % responsive**: móvil, tablet y escritorio, con menú adaptable.
- **Tema claro / oscuro** que recuerda la preferencia del visitante.
- **Microinteracciones**: brillo que sigue al cursor en las tarjetas, botones magnéticos, apariciones suaves al hacer scroll.
- **Accesible**: navegación por teclado, enlace "saltar al contenido", `aria-*` en controles y respeto por *prefers-reduced-motion*.
- **Proyectos desde datos**: la cuadrícula se genera a partir de `data/projects.json`, con filtros por categoría.
- **Caso de estudio** de la tesis *Chanchito Aplicación* en su propia página.
- **Descarga directa** del código fuente (.zip) y de una plantilla HTML limpia de un solo archivo.

## 🎨 Plantillas incluidas

Cinco sitios de muestra, cada uno con un stack distinto, ≥3 interacciones, carrusel, menú móvil, descarga en PDF (jsPDF) y fotos de Unsplash:

| # | Plantilla | Stack | Demo |
|---|---|---|---|
| 01 | Lumi Atelier · estudio creativo | HTML · CSS · JavaScript | [Ver](https://valentinadessire.github.io/projects/plantillas/01-estudio-creativo/) |
| 02 | Lunaria Learn · plataforma de cursos | React 18 · TypeScript · Tailwind | [Ver](https://valentinadessire.github.io/projects/plantillas/02-tech-platform/) |
| 03 | Maison Pétale · boutique de moda | Vue 3 · i18n ES/EN | [Ver](https://valentinadessire.github.io/projects/plantillas/03-boutique-moda/) |
| 04 | Serena Flow · bienestar | Bootstrap 5 · Alpine.js | [Ver](https://valentinadessire.github.io/projects/plantillas/04-bienestar/) |
| 05 | Orquídea UX Lab · agencia UX | GSAP · ScrollTrigger | [Ver](https://valentinadessire.github.io/projects/plantillas/05-agencia-ux/) |

Cada plantilla es un único archivo `index.html` sin paso de compilación: las librerías se cargan desde CDN.

## 🗂️ Arquitectura

```
.
├── index.html                    # Página principal (HTML5 semántico)
├── case-studies/
│   └── chanchito.html            # Caso de estudio de la tesis
├── projects/
│   └── cv/index.html             # Proyecto: CV interactivo
├── template/
│   └── portfolio-template.html   # Plantilla limpia descargable (1 archivo)
├── data/
│   └── projects.json             # Contenido de la sección Proyectos
├── assets/
│   ├── css/
│   │   ├── tokens.css            # Variables de diseño: color, tipografía, espaciado, movimiento
│   │   └── styles.css            # Base, componentes y responsive
│   └── js/
│       ├── main.js               # Punto de entrada (ES modules)
│       └── modules/
│           ├── theme.js          # Tema claro/oscuro
│           ├── nav.js            # Encabezado, menú móvil y enlace activo
│           ├── reveal.js         # Animaciones al hacer scroll
│           ├── pointer.js        # Microinteracciones con el puntero
│           └── projects.js       # Render y filtros de proyectos
├── .nojekyll                     # Publica los archivos tal cual en GitHub Pages
└── LICENSE                       # MIT
```

**Decisiones de diseño**

- **Sin dependencias**: solo Google Fonts (*Fraunces*, *Inter*, *JetBrains Mono*). El sitio carga rápido y es fácil de mantener.
- **Tokens en CSS nativo**: cambia la paleta o la tipografía de todo el sitio editando `assets/css/tokens.css`.
- **Un módulo, una responsabilidad**: cada efecto se puede quitar borrando una línea en `main.js`.

## ⬇️ Descargar

- **Código completo:** botón *Código fuente completo (.zip)* en el sitio, o
  ```bash
  git clone https://github.com/ValentinaDessire/ValentinaDessire.github.io.git
  ```
- **Plantilla limpia:** botón *Plantilla HTML limpia* en el sitio, o el archivo `template/portfolio-template.html`.

## ▶️ Ejecutar en local

El sitio usa módulos de JavaScript y carga `data/projects.json`, así que necesita un servidor local (abrir el archivo con doble clic no basta):

```bash
cd ValentinaDessire.github.io
python -m http.server 8000      # o: npx serve .
```

Luego abre <http://localhost:8000>.

## ✏️ Personalizar

1. **Proyectos:** edita `data/projects.json`. Cada objeto acepta `title`, `summary`, `category` (`web` o `fullstack`), `tags`, `status`, `demo` y `repo`.
2. **Colores y tipografía:** edita `assets/css/tokens.css`.
3. **Textos:** edita `index.html`.

## 🚀 Despliegue

El repositorio se llama `ValentinaDessire.github.io`, así que GitHub Pages lo publica automáticamente desde la rama `main`.

## 📄 Licencia

[MIT](LICENSE) © 2026 Valentina Quintero. Puedes usar, modificar y distribuir este código; solo conserva el aviso de licencia.
