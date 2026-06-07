# Andy Pulling Engineering

Website redesign for Andy Pulling Engineering Ltd — a Lincolnshire-based manufacturer of custom stainless steel conveyors and food processing equipment, trading since 1982.

## Overview

The existing site dates from 2003: no mobile support, no navigation, no imagery, and effectively invisible on Google. This rebuild modernises the web presence with a focus on local SEO, mobile-first design, and making it easy for potential customers to get in touch.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS  
**Hosting:** Vercel (free tier)  
**Domain:** `andypullingengineering.co.uk` (existing, DNS pointed to Vercel)

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, services grid, gallery preview, CTA |
| `/services/conveyors` | Belt, wire belt, Intralox conveyors and elevators |
| `/services/fabrications` | Tanks, washers, tables, platforms, bespoke work |
| `/gallery` | Full project photo gallery with category filters |
| `/about` | Company history, industries served, key advantages |
| `/contact` | Quote request form + full contact details |

---

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

This project deploys to [Vercel](https://vercel.com) automatically on every push to \`main\`.

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) — Vercel detects Next.js automatically
3. Add the custom domain in Vercel's dashboard and update DNS

### Contact form (Resend)

The contact form uses [Resend](https://resend.com) to send emails to `info@andypullingengineering.co.uk`.

1. Sign up free at [resend.com](https://resend.com) and get an API key
2. Add it as `RESEND_API_KEY` in Vercel's environment variables

For local dev, create `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

---

## Replacing Placeholder Images

All grey placeholder boxes are rendered by \`components/PlaceholderImage.tsx\`. To swap in real photos:

1. Drop images into \`/public/images/\`
2. Replace \`<PlaceholderImage />\` with Next.js \`<Image>\` components:

\`\`\`tsx
import Image from 'next/image';

<Image
  src="/images/your-photo.jpg"
  alt="Stainless steel belt conveyor"
  width={800}
  height={600}
  className="rounded-lg object-cover w-full"
/>
\`\`\`

Use descriptive \`alt\` text — it directly helps SEO.

---

## SEO Notes

- Each page exports its own \`metadata\` object (title + description)
- Target keywords are built into headings and copy, not stuffed into hidden footers
- Add a [Google Business Profile](https://business.google.com) listing — free, and the biggest driver of local search traffic for a business like this
- Once live, submit the sitemap to Google Search Console

---

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx                  # Root layout — Navbar, Footer, global metadata
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   └── services/
│       ├── conveyors/page.tsx
│       └── fabrications/page.tsx
├── components/
│   ├── Navbar.tsx                  # Sticky responsive nav with mobile menu
│   ├── Footer.tsx                  # Footer with links and contact details
│   └── PlaceholderImage.tsx        # Temporary placeholder until real photos arrive
└── public/
    └── images/                     # Drop real photos here
\`\`\`

---

## Checklist Before Going Live

- [ ] Replace all placeholder images with real photos
- [ ] Verify fax number (01775 840167) is still in use
- [ ] Confirm "7 days a week" availability is still accurate
- [ ] Wire up contact form to a form handling service
- [ ] Embed Google Map on contact page
- [ ] Set up Google Business Profile
- [ ] Submit to Google Search Console after launch
