# Cumbre Salvaje Web

Sitio web oficial de Cumbre Salvaje.

## Arquitectura

- `cumbresalvaje.mx` — sitio institucional y comercial.
- `go.cumbresalvaje.mx` — Cumbre GO para cotización y armado de experiencias.
- `go.cumbresalvaje.mx/admin` — CRM operativo.

Este repositorio se mantiene separado de `cumbre-go` para proteger la estabilidad del flujo comercial y del CRM.

## Objetivo de conversión

La web presenta la marca, genera confianza y dirige los CTA comerciales a Cumbre GO. Los enlaces propagan UTMs cuando llegan desde campañas y agregan atribución web por defecto.

## Estructura

- `index.html` — landing pública.
- `styles.css` — diseño responsive.
- `app.js` — navegación móvil, atribución y eventos de CTA.
- `assets/` — medios propios.
- `docs/` — arquitectura, fuentes de assets y despliegue.
- `_headers` — cabeceras de seguridad para Cloudflare Pages.
- `robots.txt` / `sitemap.xml` — SEO básico.
