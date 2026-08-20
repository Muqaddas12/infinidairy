# Infinidairy — Next.js Website

A full responsive Infinidairy marketing/e-commerce starter built with **Next.js App Router**, React and `lucide-react`.

## Included

- Hero / Home with large generated banner + CTA
- About Infinidairy
- Products: 200 ml, 500 ml, 1 Litre, 2 Litre
- Product detail pages with dynamic `[slug]` routes
- Demo cart with add/remove/clear functionality
- Nutrition page + nutrition section
- Quality & process: farm → pasteurisation → testing → packaging
- Why Infinidairy
- Farm / lifestyle image section
- Blog listing + dynamic article pages
- Contact form with Next.js API route
- Newsletter form with Next.js API route
- Responsive navigation/mobile menu
- Footer
- Privacy / Terms starter pages
- Generated product artwork included in `public/images`
- Next Image and App Router
- Static generation for product and article routes

## Run

```bash
npm install
npm run dev
```

Open the local address shown by Next.js.

## Production

```bash
npm run build
npm start
```

## Important production integrations

The cart is intentionally a frontend demo. Connect it to your real database and payment provider before taking orders.

The newsletter/contact API routes currently validate and log submissions. Replace those handlers with your email provider/database.

The example phone/email/legal copy is placeholder content and should be replaced with the real business details and policies.


## Tailwind CSS + cinematic theme

This version includes Tailwind CSS 3 with PostCSS and a `tailwind.config.js` theme extension. The site also contains a custom cinematic "Scarlet Magic" visual language using crimson, ruby red, magenta, violet glow, rings, particles, animated energy and deep shadows.

The visual direction is **inspired by the color/light language associated with Scarlet Witch/Wanda Maximoff**, rather than reproducing the Marvel character or character artwork. This keeps the milk product as the hero while giving the site a supernatural cinematic feeling.

### Responsive targets

The CSS includes breakpoints for:
- Large desktop
- Laptop/tablet
- Mobile
- Small mobile
- Reduced-motion accessibility

### Tailwind

Run:

```bash
npm install
npm run dev
```

Tailwind is compiled through PostCSS. Existing custom CSS is intentionally retained for the detailed product/brand layout, while Tailwind utilities and theme tokens are available throughout the app.
