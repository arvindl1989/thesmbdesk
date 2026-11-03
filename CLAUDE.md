# The SMB Desk — working notes

Astro 5 static site publishing practical marketing, tools, finance and growth
guides for Indian small businesses. Live at https://thesmbdesk.com.

## Build and deploy

```bash
npm ci
npm run build          # outputs to dist/, 16 pages currently
```

GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub
Pages on push. **The workflow only deploys from the repository's default
branch** — it gates on `github.ref_name == github.event.repository.default_branch`.

`main` and `claude/push-github-repository-aajhq6` are kept identical, because
the default branch has at times been either one. **Always push to both:**

```bash
git push origin main
git branch -f claude/push-github-repository-aajhq6 main
git push origin claude/push-github-repository-aajhq6
```

Custom domain is pinned by `public/CNAME`; don't delete it.

## Content

Posts are markdown in `src/content/blog/`. The filename is the URL slug.
Frontmatter is validated by `src/content.config.ts` — **the build fails if it
is out of range**:

| Field | Rule |
|---|---|
| `title` | required, **max 70 chars** |
| `description` | required, **70–160 chars** |
| `publishDate` | required, `YYYY-MM-DD` |
| `updatedDate` | optional |
| `category` | one of `marketing`, `tools`, `finance-ops`, `growth` |
| `tags` | array of strings |
| `faq` | optional array of `{ q, a }` — renders on the page *and* emits FAQPage schema |
| `draft` | `false` to publish |

`faq` answers may contain simple inline HTML (links, `<strong>`). Keep them
2–4 sentences. Google requires FAQ content to be visible, which is why
`PostLayout.astro` renders the items and derives the schema from the same
source — never add FAQ schema without visible content.

## Writing conventions

- **Verdict first.** Lead with the answer, then the reasoning.
- **India-specific.** GST, UPI, WhatsApp, rupee pricing, regional language,
  the festive calendar. Global advice that ignores these is the gap this site
  exists to fill.
- **Concrete and opinionated.** Name tools, say who each suits and where it
  breaks. Hedged roundups are worthless.
- Close with an affiliate-disclosure line linking `/disclosure/`.
- Internal links need trailing slashes: `/blog/slug/`, `/category/tools/`.

## Integrity rules — these are not optional

The About page claims everything is grounded in tools actually used. Do not
undermine it:

- **Never claim hands-on testing you did not do.** No "(Tested)" in titles,
  no "I tried all seven". Write "How I evaluated these" and say what the
  assessment actually is.
- **Never invent specifics that move** — prices, free-tier limits, e-invoicing
  turnover thresholds, feature matrices. Training data goes stale and these
  change quarterly. Write about durable things (evaluation criteria, GST
  invoice field requirements, SPF/DKIM/DMARC, decision frameworks) and tell
  the reader to confirm current figures on the vendor's own page.
- If a claim cannot be stated safely, leave it out rather than guessing.

## SEO conventions

- **Match the language people search, not internal jargon.** Search Console
  showed readers typing "GST billing software" while the post said "GST
  invoicing tools" — the post was competing under vocabulary nobody uses.
- Use real query phrasings as `faq` questions. That is what the FAQ block is for.
- Cross-link every new post to at least two existing ones, with keyword-bearing
  anchor text, and add a link back from one of them.
- **Do not create a second page targeting a query an existing post already
  ranks for.** Cannibalisation loses more than the extra page gains. Deepen the
  existing post instead.
- Do not repeat near-duplicate keyword variants ("free crms", "free crm's",
  "free crm packages"). Google resolves those morphologically.

## Verify before pushing

```bash
npm run build                                   # must pass
```

Then confirm: frontmatter within limits, internal links resolve, the post
appears in `dist/sitemap-0.xml` and on its category page. There is no test
suite — the build and these checks are the gate.

## Topic backlog

Pick from here, newest-gap-first. **Delete the line when the post is published.**

- WhatsApp Business API vs the free app: when an Indian SMB should upgrade
- Google Business Profile optimisation for Indian local businesses
- Payment gateways for Indian small businesses: Razorpay vs Cashfree vs PayU
- Accounting software for small business India (beyond invoicing)
- How to price services as a freelancer or agency in India
- UPI for business: collecting, reconciling and the cost of each method
- Inventory management software for small Indian retailers
- Hiring your first employee in India: compliance basics for SMBs
- Local SEO for a single-location Indian business
- Building a website for an Indian small business: options and real costs
- Customer retention for SMBs: the economics of repeat business
- E-way bills explained for small distributors
