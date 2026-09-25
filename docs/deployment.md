# Deployment

## Target

Cloudflare Pages project for `MaBolivar21/cumbre-salvaje-web`.

- Production branch: `main`
- Framework preset: None / Static HTML
- Build command: leave empty
- Build output directory: `/`

## Domain plan

- `cumbresalvaje.mx` -> this repository / public site
- `www.cumbresalvaje.mx` -> redirect to `https://cumbresalvaje.mx`
- `go.cumbresalvaje.mx` remains untouched and continues pointing to Cumbre GO.

## DNS safety

Do not modify:
- `go` CNAME used by Cumbre GO
- MX/TXT records used by email
- nameservers

Only add/replace the records Cloudflare Pages requests for the apex and optional `www`.

## Launch verification

1. Home loads over HTTPS.
2. Hero image loads.
3. Menu works on mobile.
4. Every orange CTA opens `https://go.cumbresalvaje.mx/`.
5. UTMs are preserved from campaign landing URLs.
6. Without UTMs, CTA receives website attribution.
7. Telephone and email links work.
8. No console errors.
9. Test iPhone Safari and Android Chrome.
10. Do not change `go.cumbresalvaje.mx` during website deployment.
