# mv·inks – Projektstatus

**Kundin:** Mavie Sommerfeld (Tattoo-Artistin)
**Pfad:** ~/Desktop/mvinks
**Stack:** Statisches HTML/CSS/JS (kein Framework)
**Domain:** mvinks.de (noch nicht live)
**Stand:** 24.02.2026

---

## Was fertig ist

### Content & Design
- [x] Alle Texte nach Mavies Feedback umgeschrieben (About, Quote, Hero)
- [x] "Fineline" -> "Realistic" überall ersetzt
- [x] "Guest Artist" -> "Resident Artist" überall ersetzt
- [x] Lange Striche "—" -> kurze "–" überall ersetzt
- [x] 5 echte Kundenstimmen (Testimonials) eingebaut
- [x] 5 Blog-Artikel geschrieben (Eigene Designs, Design-Prozess, Erster Termin, Schmerzen & Heilung, Blackout)
- [x] FAQ komplett neu mit 15 Fragen
- [x] Shop als "Coming Soon" Teaser umgebaut
- [x] Fake-Testimonials entfernt

### UI / Features
- [x] Hero-Portrait: Transparenter PNG + Mandala-Integration (opacity 0.75, radial mask)
- [x] About-Portrait: Transparenter PNG + Mandala (opacity 0.95)
- [x] Testimonials: Swipe-Slider mit Dots + Prev/Next
- [x] Portfolio (Startseite): Swipe-Slider mit Dots + Prev/Next
- [x] Burger-Menü: CTAs eingebaut (Anfrage-Button, WhatsApp, Instagram, Books Open Status)
- [x] Portfolio-Bilder auf echte Tattoo-Fotos aktualisiert

### Konsistenz
- [x] Footer-Text auf allen Seiten vereinheitlicht
- [x] Desktop-Nav: "Pflege" aus den meisten Seiten entfernt (nur im Mobile-Menü)
- [x] Blog: Canonical URLs korrigiert (mvinks.de statt www.mv-inks.de)
- [x] Blog: Favicons korrigiert
- [x] EN-Seiten: Aftercare in Desktop-Nav ergänzt
- [x] Alle 24 HTML-Dateien (16 DE + 8 EN) aktualisiert

---

## Was noch offen ist

### KRITISCH (vor Launch zwingend)
1. **Impressum vervollständigen** – Platzhalter: [Straße Nr.], [PLZ Ort], [email], [USt-IdNr.] -> Mavie muss Daten liefern
2. **Datenschutz vervollständigen** – gleiche Platzhalter-Adresse + WhatsApp/Meta nicht erwähnt
3. **Cookie-Consent-Banner** – Forminit-SDK wird ohne Einwilligung geladen (DSGVO-Verstoß)
4. **DSGVO-Checkbox** im Anfrageformular fehlt
5. **en/shop.html erstellen** – Sprachumschalter verlinkt 404

### WICHTIG (vor Launch empfohlen)
6. Sitemap aktualisieren (Blog, Shop, Blog-Artikel fehlen)
7. Schema.org: telephone + email befüllen oder entfernen
8. Hero-Bild: `loading="lazy"` -> `loading="eager"` (LCP-Performance)
9. EN-Homepage: Portfolio-Slider + echte Fotos + Testimonials-Nav nachziehen
10. EN-Portfolio: echte Tattoo-Fotos statt Platzhalter
11. Bilder komprimieren / WebP-Varianten erstellen (~52 MB aktuell)
12. ~16 unbenutzte Bilder entfernen (~35 MB)
13. Desktop-Nav: portfolio.html hat noch "Pflege" drin (als einzige Seite)
14. Accessibility: ARIA-Labels für Slider, prefers-reduced-motion, main-Landmark
15. Shop-CSS aus inline `<style>` in style.css verschieben
16. Particle-Canvas: Visibility-Check einbauen (CPU-Sparen bei inaktivem Tab)

### NICE-TO-HAVE (nach Launch)
17. Wannado/Flash-Bereich (6 Bilder existieren schon)
18. Portfolio-Lightbox (Klick auf Bild -> Großansicht)
19. Preisangabe (Mindestpreis/Stundenrate)
20. Favicon .ico für ältere Browser
21. Google Reviews Widget
22. Online-Kalender (Calendly/Booksy)

---

## Bilder
- `img/mavie-portrait-hero.png` – Transparenter PNG, Hero-Section
- `img/mavie-about.png` – Transparenter PNG, About-Section
- Portfolio-Fotos: `portfolio-mandala-*.jpg`, `portfolio-blackwork-*.jpg`, `portfolio-geometry-*.jpg`, `portfolio-realistic-*.jpg`
- Wannado (unbenutzt): `wannado-1.jpg` bis `wannado-6.jpg`

## Seiten-Struktur
### Deutsch (16)
index, portfolio, stile, shop, anfrage, pflege, faq, blog, impressum, datenschutz, 404, blog-eigene-designs, blog-design-prozess, blog-erster-termin, blog-schmerzen-heilung, blog-blackout

### Englisch (8)
en/index, en/portfolio, en/styles, en/booking, en/aftercare, en/faq, en/legal, en/privacy
