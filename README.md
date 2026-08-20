# Infinidairy — Complete Next.js Website

## Stack
- Next.js App Router
- React
- Tailwind CSS 3 + PostCSS
- Responsive custom CSS
- Lucide icons
- Next Image
- Dynamic product and blog routes

## Site architecture

The homepage is intentionally a **cinematic animated Coming Soon landing page**. The complete website content is separated into crawlable pages:

- `/` — animated Coming Soon
- `/about` — brand story
- `/products` — product catalogue
- `/products/200ml`
- `/products/500ml`
- `/products/1-litre`
- `/products/2-litre`
- `/nutrition` — nutrition facts
- `/quality` — farm → pasteurisation → testing → packaging
- `/why-infinidairy` — benefits
- `/blog` — articles
- `/blog/[slug]` — article pages
- `/faq` — FAQ + FAQ structured data
- `/contact` — contact form
- `/cart` — demo cart
- `/privacy`
- `/terms`
- `/sitemap.xml` — generated sitemap
- `/robots.txt` — generated robots rules

## SEO included

- Page-specific metadata
- Title templates
- Meta descriptions
- Canonical URL support
- Open Graph metadata
- Twitter card metadata
- Robots directives
- `sitemap.xml`
- `robots.txt`
- Organization JSON-LD
- Product JSON-LD on product detail pages
- FAQPage JSON-LD
- Semantic headings
- Image alt text
- Crawlable separate pages
- Internal linking
- SEO-friendly dynamic slugs

### Important SEO reality

No website can honestly guarantee a first-page Google position. Rankings depend on competition, search intent, authority, backlinks, technical quality, content quality, location, user signals and Google's algorithms.

This build includes the technical SEO foundation, but for real first-page performance you should still:
1. Replace the placeholder domain with the real domain.
2. Verify the site in Google Search Console.
3. Submit `/sitemap.xml`.
4. Connect Google Analytics/consent tooling if appropriate.
5. Replace placeholder business/contact/legal information.
6. Use verified nutrition and product claims.
7. Publish original useful articles regularly.
8. Build legitimate, relevant backlinks/citations.
9. Optimize Core Web Vitals after deployment.
10. Add real product availability/location pages if you sell locally.

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Production integrations still required

The cart is a frontend demo. Connect it to your real database, checkout/payment provider, inventory and order system.

The contact/newsletter API routes currently accept and log submissions. Connect them to your real email/CRM/database provider.

Replace `https://www.infinidairy.com` with the actual production domain everywhere before deployment.
