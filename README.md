# The SMB Desk — thesmbdesk.com

Astro static site. Free hosting on Cloudflare Pages.

## Publish a new post
1. Add a `.md` file to `src/content/blog/` (copy an existing one).
2. Fill the frontmatter — the schema in `src/content.config.ts` validates it
   (title ≤ 70 chars, description 70–160 chars, category must be one of:
   `marketing`, `tools`, `finance-ops`, `growth`).
3. Set `draft: false`.
4. `git add . && git commit -m "post: title" && git push` — Cloudflare
   rebuilds and deploys automatically in ~1 minute.

## Local preview
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

## Deploy (one-time setup)
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages →
   Connect to Git → pick the repo.
   Framework preset: **Astro** · Build command: `npm run build` ·
   Output directory: `dist`.
3. Custom domain: add `thesmbdesk.com` (move nameservers from GoDaddy
   to Cloudflare when prompted — registration stays at GoDaddy).

## Before going live (TODOs in code)
- [ ] `src/pages/about.astro` — real bio, photo, LinkedIn
- [ ] `src/layouts/PostLayout.astro` — author full name
- [ ] `src/layouts/BaseLayout.astro` — GA4 Measurement ID (uncomment block)
- [ ] `src/components/Newsletter.astro` — wire to MailerLite/Brevo
- [ ] `src/pages/privacy-policy.astro` — full policy before ad network apps
- [ ] Add `public/og-default.png` (1200×630 social share image)
- [ ] Write real posts, set `draft: false`

## SEO layer (already built in)
Meta title/description, canonical, Open Graph, Twitter cards, Article
JSON-LD, sitemap-index.xml (auto), robots.txt, RSS. Track performance in
Google Search Console + Ahrefs Webmaster Tools.
