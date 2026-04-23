# 500 días contigo

Aplicación web hecha con React + TypeScript + Vite para contar una historia de amor en formato de landing page narrativa.

La página está construida como una secuencia de secciones visuales y emocionales, con animaciones suaves al hacer scroll, imágenes, transiciones entre bloques y una estética cálida y romántica.

## De qué trata

Este proyecto presenta una historia en varias etapas:

- Un hero inicial con el título principal.
- Una introducción que abre el tono de la historia.
- El primer clic o primer encuentro.
- El tiempo entre ambos momentos.
- El segundo clic.
- Una carta final.
- Un cierre y un epílogo.

La idea general es que la experiencia se sienta íntima, cinematográfica y continua, más cercana a una carta visual que a una página tradicional.

## Cómo funciona

La aplicación renderiza una sola página compuesta por varias secciones independientes desde `src/App.tsx`.

Cada sección vive en `src/sections/` y se monta en orden para formar la narrativa completa:

- `HeroSection`
- `IntroSection`
- `FirstMomentSection`
- `TimeGapSection`
- `SecondMomentSection`
- `LetterSection`
- `ClosingSection`
- `EpilogueSection`

### Animaciones

Las animaciones principales usan `Framer Motion` y el componente reutilizable `AnimatedSection`.

Ese componente detecta cuándo una sección entra en pantalla y aplica una transición de aparición, normalmente con:

- cambio de opacidad
- desplazamiento vertical u horizontal
- retrasos (`delay`) para escalonar la lectura visual

También existe un fondo ambiental con partículas sutiles renderizado desde `Particles`.

### Estilos

El proyecto usa `Tailwind CSS` para layout y espaciado, junto con variables CSS definidas en `src/index.css` para mantener la paleta visual.

La paleta principal gira alrededor de estos tonos:

- `--color-cream`
- `--color-beige`
- `--color-warm`
- `--color-gold`
- `--color-brown`
- `--color-dark`

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- React Intersection Observer
- MUI

## Estructura principal

```text
src/
  components/
    AnimatedCounter.tsx
    AnimatedSection.tsx
    Particles.tsx
    ScrollIndicator.tsx
  sections/
    HeroSection.tsx
    IntroSection.tsx
    FirstMomentSection.tsx
    TimeGapSection.tsx
    SecondMomentSection.tsx
    LetterSection.tsx
    ClosingSection.tsx
    EpilogueSection.tsx
  App.tsx
  index.css
  main.tsx
public/
  images/
```

## Imágenes

Las imágenes deben ir dentro de `public/images/`.

Ejemplo de uso en el código:

```tsx
<img src="/images/intro_section.jpeg" alt="Nuestra historia" />
```

Esto es importante porque Vite y Vercel sirven los archivos estáticos desde `public/`.

## Ejecutar el proyecto

Instala dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Genera la build de producción:

```bash
npm run build
```

Previsualiza la build:

```bash
npm run preview
```

## Despliegue

El proyecto puede desplegarse en Vercel sin configuración especial adicional.

Puntos importantes para producción:

- Las imágenes deben estar en `public/images/`.
- Las rutas de imágenes deben empezar con `/images/...`.
- El favicon puede definirse en `index.html`.

## Personalización

Si quieres adaptar la historia, normalmente solo necesitas editar:

- los textos dentro de `src/sections/`
- las imágenes dentro de `public/images/`
- los colores base en `src/index.css`
- el orden de las secciones en `src/App.tsx`

## Estado del proyecto

Actualmente el proyecto está pensado como una experiencia visual responsive para desktop y móvil, con especial cuidado en:

- ritmo de lectura
- transiciones suaves entre secciones
- contraste cálido y romántico
- composición centrada en texto e imágenes

## Licencia

Proyecto personal. Todos los derechos reservados.