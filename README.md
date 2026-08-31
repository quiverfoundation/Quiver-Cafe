# Quiver Café — pop-up cart website

Site for [quivercafe.co.za](https://quivercafe.co.za) — a plain HTML/CSS/JS
one-pager about the waffle & coffee pop-up cart (pricing and booking). No
build step, no framework.

```
index.html    the page
styles.css    all styling (same theme as the Liège Waffles ordering site)
main.js       footer year, nothing else
fonts/        Kamerik105 Bold, used for the wordmark
_headers      security headers (Cloudflare Pages reads this)
```

## Deploying (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → pick this repo.
3. Build settings: framework preset **None**, no build command, output
   directory `/` (root).
4. **Save and Deploy.** Every push to `main` redeploys; other branches get
   preview URLs.

## Pointing quivercafe.co.za at it

Pages project → **Custom domains** → **Set up a domain** →
`quivercafe.co.za` (and `www.quivercafe.co.za`). Cloudflare tells you which
DNS records to add if the domain isn't already on Cloudflare DNS.

## Editing

- **Pricing** lives in the `#pricing` section of `index.html` — currently
  R100/guest + R850 transport fee (prepay), or R2,000 minimum in sales
  (pay-as-you-go). Keep this in sync with `mailto:` link body text below it.
- **The "Order the Waffles" button** in the header links to
  `https://liegewaffles.co.za` — the separate site where people order
  waffles online. Update this if that domain changes.
- **Booking** goes to `info@quiverfoundation.org` via a `mailto:` link with
  a pre-filled subject/body — no backend, no form to maintain.
