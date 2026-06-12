# Implementation Plan — Aanandam Vridhashram Website (Onilife Premium Design)

Build a multi-page React application for **Aanandam Vridhashram** using **Vite + React + Tailwind CSS**. The website will integrate the complete content from the local blueprint HTML file and implement a premium senior-living design inspired by the [Onilife WordPress Theme](https://preview.themeforest.net/item/onilife-senior-living-wordpress-theme/full_screen_preview/39741338).

---

## Design System & Aesthetics (Onilife Style)

To deliver a premium, trustworthy, and visual-first experience, we will establish the following design system:

*   **Colors**:
    *   *Primary/Brand (Deep Green)*: HSL tailored forest/emerald green (`#1B5E20` / `#2E7D32`) for trust and life.
    *   *Secondary Accent (Warm Saffron/Gold)*: Gold/saffron accent colors (`#F5A623` / `#E8890A` / `#C8A84B`) for warmth, spirituality, and light.
    *   *Background*: Soft creams (`#FFFDF0` / `#FFF8E7`), warm whites, and very light grays (`#FAFAF5`).
    *   *Typography/Text*: Sleek dark grey/charcoal (`#111827`) for text, avoiding harsh absolute black.
*   **Typography**:
    *   *Headings*: Google Font **Playfair Display** (Elegant Serif) for emotional impact.
    *   *Body/Hindi*: Google Font **Mukta** or **Inter** (Sleek Sans-Serif) for readability.
    *   *Accents*: Google Font **Kalam** for Hindi handwritten notes / quotes.
*   **Visual Enhancements**:
    *   Subtle shadows (`shadow-sm`, `shadow-md` on hover) and rounded borders (`rounded-2xl`).
    *   Micro-animations: Smooth transitions on buttons, cards, and links (`transition-all duration-300`).
    *   Glassmorphism overlays for hero sections and header panels.

---

## Pages to Build

We will build a fully functioning routing system in React (`react-router-dom`) with dedicated pages for major sections:
1. **Homepage (`/`)** — Hero, Stats, Core Services, Founder Spotlight, Distinguished Visitors, Media Coverage, and Bilingual FAQ.
2. **About Us (`/about-aanandam`)** — Story of Humanify Foundation and Dream Campus plans.
3. **Founder Profile (`/about-founder`)** — Niraj Gera Ji's bio, World Record, NITI Aayog credentials.
4. **Admission Guidelines (`/admission`)** — Transparent details about capabilities and care limitations.
5. **Distinguished Visitors (`/distinguished-visitors-associations`)** [NEW] — Visits from Amul, Axis Max Life, Yes Madam, HelpAge India, Dr. Kiran Bedi Ji.
6. **Outbound Activities (`/outbound-activities-elder-outings`)** [NEW] — Vrindavan pilgrimage, health impact, and sponsorship details.
7. **Media Coverage (`/news-media-coverage`)** [NEW] — Press clippings from BBC, Times of India, etc.
8. **Donate / Support (`/donate`)** — Sponsor meals, sponsor elders, general support, bank/UPI details.
9. **Contact Us (`/contact`)** — Form, address, map placeholder, phone number.

---

## Open Questions

1. **Images & Assets**: Do you have actual photos of the residents, Niraj Gera Ji, Amul, Axis Max Life, or Dr. Kiran Bedi Ji's visits that we should place? If not, we will use premium placeholder indicators and generate beautiful illustrative graphics where needed.
2. **Contact form / Donations**: For donations, do you have a bank details/UPI gateway setup? We will design a premium mock checkout/donation widget that displays the payment details and QR placeholder clearly.

---

## Verification Plan

### Automated & Manual Verification
1. Run `npm run dev` and ensure the application starts without any lint errors.
2. Manually test routing and page navigation using a browser.
3. Validate responsive behavior on multiple viewports (Mobile, Tablet, Desktop).
4. Verify accessibility and design polish (checking that the colors and fonts look premium and align with Onilife's theme).
