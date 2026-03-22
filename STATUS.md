# mv·inks – Projektstatus

**Kundin:** Mavie Sommerfeld (Tattoo-Artistin)
**Pfad:** ~/Desktop/mvinks
**Stack:** Statisches HTML/CSS/JS (kein Framework)
**Domain:** mv-inks.de (LIVE via GitHub Pages)
**Repo:** github.com/mv-inks/mv-inks.github.io
**Stand:** 22.03.2026

---

## Was fertig ist

### Website & Hosting
- [x] Website LIVE unter mv-inks.de (GitHub Pages + Custom Domain)
- [x] SSL/HTTPS aktiv
- [x] Google Business Profil eingerichtet
- [x] Google Search Console verifiziert + Sitemap eingereicht
- [x] GA4 Tracking mit DSGVO-konformem Cookie-Consent (nur nach Opt-in)
- [x] Google Workspace E-Mail (info@mv-inks.de)

### Content & Design
- [x] Alle Texte nach Mavies Feedback umgeschrieben (About, Quote, Hero)
- [x] "Fineline" → "Realistic" überall ersetzt
- [x] "Guest Artist" → "Resident Artist" überall ersetzt
- [x] "Handgestochene Tattoos" → "Individuelle Tattoos" (DE) / "Custom tattoos" (EN)
- [x] 5 echte Kundenstimmen (Testimonials)
- [x] 5 Blog-Artikel (Eigene Designs, Design-Prozess, Erster Termin, Schmerzen & Heilung, Blackout)
- [x] Blog-Subtitle: "Tipps, Wissen und Einblicke in meine persönliche Erfahrung"
- [x] FAQ komplett neu mit 15 Fragen
- [x] Shop als "Coming Soon" Teaser
- [x] **Abstract** als neuer Tattoo-Stil hinzugefügt (6 Stile: Mandala, Geometry, Dotwork, Realistic, Blackwork, Abstract)
- [x] Pflege-Seite korrigiert (Folie 2-3h, Pellphase, Sport 2 Wochen)

### Portfolio & Bilder
- [x] 41 echte Tattoo-Fotos eingebaut (aus ~/Downloads/bilder_website/)
- [x] Alle Bilder optimiert: max 1200px, Qualität 80% (~85% kleiner)
- [x] Portfolio mit Tab-Navigation: "Meine Arbeiten" / "Wanna Do's"
- [x] 25 Portfolio-Werke mit Kategorie-Filtern (Alle, Mandala/Geometry, Realistic, Blackwork, Abstract, Healed)
- [x] 13 Wanna Do Designs mit Anfrage-Button
- [x] Touch-Overlay für Mobile (Tap auf Bild → Overlay mit "So etwas anfragen")
- [x] Realistic Mandala als "Healed" markiert
- [x] Glasmorphe Tab-Buttons mit blauem aktiven Tab

### UI / Features
- [x] Hero-Portrait: Transparenter PNG + Mandala-Integration
- [x] Testimonials: Swipe-Slider mit Dots + Prev/Next
- [x] Portfolio (Startseite): Swipe-Slider mit Dots + Prev/Next
- [x] Burger-Menü mit CTAs (Anfrage, WhatsApp, Instagram, Books Open)
- [x] IntersectionObserver für Fade-in Animationen (optimiert für große Grids)

### Konsistenz & SEO
- [x] Footer-Text auf allen 24 HTML-Seiten vereinheitlicht
- [x] Meta-Tags, Open Graph, Twitter Cards, JSON-LD auf allen Seiten
- [x] Canonical URLs + hreflang (DE/EN)
- [x] robots.txt + sitemap.xml
- [x] Selbst gehostete Fonts (Inter Tight, DSGVO-konform)

---

## Was noch offen ist

### KRITISCH
1. **Impressum vervollständigen** – Platzhalter: [Straße Nr.], [PLZ Ort], [email], [USt-IdNr.] → Mavie muss Daten liefern
2. **Datenschutz vervollständigen** – gleiche Platzhalter-Adresse
3. **DSGVO-Checkbox** im Anfrageformular fehlt

### WICHTIG
4. Hero-Portrait: Schwarzer Kasten um das Bild beheben
5. EN-Seiten: Portfolio-Slider, Testimonials-Nav + Bilder nachziehen
6. Schema.org: telephone + email befüllen oder entfernen
7. Accessibility: ARIA-Labels, prefers-reduced-motion, main-Landmark

### SEO & MARKETING
8. Google Reviews sammeln (Ziel: 20 in 60 Tagen)
9. Backlink von Heart Over Head anfragen
10. Verzeichnis-Einträge: feelfarbig.com, tattoodo.com, tattooscout.de
11. Stil-Landingpages erstellen (/mandala-tattoo-hamburg, /dotwork-tattoo-hamburg etc.)
12. Social Media Strategie (regelmäßige Posts)

### NICE-TO-HAVE
13. Portfolio-Lightbox (Klick auf Bild → Großansicht)
14. Preisangabe (Mindestpreis/Stundenrate)
15. Online-Kalender (Calendly/Booksy)
16. Newsletter/E-Mail Marketing
17. WebP-Bildvarianten für noch bessere Performance

---

## Bilder-Inventar (img/)
- **Mandala:** portfolio-mandala-1 bis 8, portfolio-mandala-healed-1
- **Blackwork:** portfolio-blackwork-1 bis 3, portfolio-blackwork-healed-1
- **Geometry:** portfolio-geometry-1 bis 2, portfolio-geometry-realistic-healed-1
- **Abstract:** portfolio-abstract-1 bis 2, portfolio-abstract-blackwork-1/2, portfolio-abstract-geometry-1/2/3
- **Realistic:** portfolio-realistic-1, portfolio-realistic-mandala-1
- **Showcase:** portfolio-showcase-1 bis 3
- **Wanna Do's:** wannado-1 bis 13
- **Portraits:** mavie-portrait-hero.png, mavie-portrait-1/2.jpg, mavie-about.png

## Seiten-Struktur
### Deutsch (16)
index, portfolio, stile, shop, anfrage, pflege, faq, blog, impressum, datenschutz, 404, blog-eigene-designs, blog-design-prozess, blog-erster-termin, blog-schmerzen-heilung, blog-blackout

### Englisch (8)
en/index, en/portfolio, en/styles, en/booking, en/aftercare, en/faq, en/legal, en/privacy
