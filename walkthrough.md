# Walkthrough — Aanandam Vridhashram Website (Onilife Premium Design)

We have successfully built the website for **Aanandam Vridhashram** using React + Tailwind CSS (Vite), importing the content of the blueprint HTML file and designing it with the premium styling of the Onilife WordPress senior living theme.

---

## 🛠️ Changes Implemented

### 1. Global Setup & Configurations
*   **[index.html](file:///c:/Users/SACHIN/Desktop/NGO/NGO/index.html)**: Added custom Google Font references for high-fidelity serif and sans-serif typography (`Playfair Display`, `Mukta`, `Kalam`, `Inter`) and updated the page title.
*   **[index.css](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/index.css)**: Structured custom design variables using Tailwind v4 `@theme` (Primary Forest Greens, Saffron Golds, Cream background presets) and styled custom scrollbars.

### 2. Core Layout Shell
*   **[navbar.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/Component/navbar.jsx)**: Created a responsive header with dropdown menus for About Us and Credibility sections, custom typography branding, and a distinct "Support Us Now" CTA button.
*   **[Footer.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/Component/Footer.jsx)**: Implemented an SEO-optimized footer including contact information (Name, Address, Phone - NAP), quick links, founder biography achievements, and social link handles.

### 3. Page Screens (`src/page/` folder)
*   **[Home.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Home.jsx)**: Full homepage containing a hero banner, stats indicators, core amenities grid, founder showcase, distinguished visitors showcase, and bilingual (English/Hindi) collapsible FAQs.
*   **[About.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/About.jsx)**: The story of Humanify Foundation, core values, dream campus property search details, and Hindi highlighted blocks.
*   **[Founder.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Founder.jsx)**: Niraj Gera Ji's bio, World Record, NITI Aayog Mentor details, international photography awards, and Wikipedia citations.
*   **[Admission.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Admission.jsx)**: Explicit rules about shelter capabilities and physical care limits, and medical partner outreach forms.
*   **[Visitors.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Visitors.jsx)**: Showcases corporate visits (Amul, Axis Max Life, Yes Madam), HelpAge India validation, and Dr. Kiran Bedi's visit.
*   **[Outbound.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Outbound.jsx)**: Displays spiritual Vrindavan pilgrimages, park tours, health benefits, and Support Usship tier logs.
*   **[Media.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Media.jsx)**: Displays coverage logs from BBC, Times of India, and Doordarshan.
*   **[Support Us.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Support Us.jsx)**: Contains custom donation calculation forms, bank account numbers, UPI IDs, and tax deduction warnings.
*   **[Contact.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/page/Contact.jsx)**: Contact details, address details, maps indicators, and message submission forms.

### 4. Routing Setup
*   **[App.jsx](file:///c:/Users/SACHIN/Desktop/NGO/NGO/src/App.jsx)**: Configured the React Router engine, routing paths for each page screen, and nesting them inside the global Navbar and Footer shell.

---

## 🧪 Validation & Compilation Results

We ran a full production compilation test to ensure that the Vite build is free of errors:
```bash
npm run build
```
**Result**:
The build completed successfully with zero syntax or bundler errors.

---

## 🌐 How to Preview Your New Site

1. If your Vite development server is running in the background, open your web browser and go to:
   👉 **`http://localhost:5173`**
2. If the server is stopped, run this command in your project directory terminal to restart it:
   ```bash
   npm run dev
   ```
   Then open the provided local URL in your browser.
