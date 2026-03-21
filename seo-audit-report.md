# SEO Audit Report – mv-inks.de
**Datum:** 21. März 2026
**Typ:** Statische HTML-Website (GitHub Pages)
**Domain:** mv-inks.de
**Bereich:** Tattoo-Künstlerin Mavie Sommerfeld, Hamburg

---

## Gesamtbewertung

| Bereich | Status | Priorität |
|---|---|---|
| Meta-Tags | Teilweise fehlerhaft | HOCH |
| Schema.org / Structured Data | Unvollständig | HOCH |
| Canonical Tags | Gut, kleine Luecken | MITTEL |
| robots.txt / sitemap.xml | Gut, kleiner Fehler | MITTEL |
| Seitengeschwindigkeit | Kritisch – Bilder zu groß | KRITISCH |
| Mobile-Friendliness | Gut implementiert | GUT |
| Interne Verlinkung | Inkonsistenz vorhanden | MITTEL |
| Alt-Tags | Gut auf Hauptseiten, Luecken in Blog | MITTEL |
| Heading-Hierarchie | Luecken in Blog-Artikeln | MITTEL |
| Hreflang | Fehlerhaft auf mehreren Seiten | HOCH |
| 404-Seite | Vorhanden, funktional | GUT |
| Domain-Konsistenz (mv-inks.de) | Korrekt in allen HTML-Dateien | GUT |
| Heeslingen-Referenzen | Nur in Instagram/Marketing-Dateien | INFO |

---

## 1. Meta-Tags (Title, Description, OG-Tags)

### Auswertung aller Seiten

| Seite | Title (Zeichen) | Description (Zeichen) | OG:URL | OG:Image | Twitter |
|---|---|---|---|---|---|
| index.html | 64 | 155 | Ja | Ja | Ja |
| portfolio.html | 43 | 115 | Ja | Ja | Ja |
| stile.html | 70 | 137 | **FEHLT** | Ja | Ja |
| anfrage.html | 47 | 85 | Ja | Ja | Ja |
| faq.html | 47 | 121 | Ja | Ja | Ja |
| pflege.html | 51 | 174 | **FEHLT** | Ja | Ja |
| shop.html | 44 | 150 | **FEHLT** | Ja | **FEHLT** |
| blog.html | 53 | 93 | **FEHLT** | **FEHLT** | Ja |
| blog-blackout.html | 56 | 136 | **FEHLT** | **FEHLT** | **FEHLT** |
| blog-eigene-designs.html | 63 | 136 | **FEHLT** | **FEHLT** | **FEHLT** |
| blog-erster-termin.html | 56 | 150 | **FEHLT** | **FEHLT** | **FEHLT** |
| blog-schmerzen-heilung.html | 56 | 132 | **FEHLT** | **FEHLT** | **FEHLT** |
| blog-design-prozess.html | 57 | 138 | **FEHLT** | **FEHLT** | **FEHLT** |
| impressum.html | 39 | 112 | Korrekt (noindex) | – | – |
| 404.html | 42 | 66 | Korrekt (noindex) | – | – |
| en/index.html | 61 | 155 | Ja | Ja | Ja |

### Kritische Probleme

**KRITISCH – Alle 5 Blog-Artikel fehlen og:image und og:url vollstaendig**
Die Blog-Artikel (`blog-blackout.html`, `blog-eigene-designs.html`, `blog-erster-termin.html`, `blog-schmerzen-heilung.html`, `blog-design-prozess.html`) haben weder `og:image`, `og:url`, noch Twitter Card Image-Tags. Beim Teilen auf Social Media erscheinen diese Seiten ohne Vorschaubild – das reduziert die Click-Through-Rate drastisch.

**FIX fuer alle Blog-Artikel (in den `<head>` einfuegen):**
```html
<meta property="og:url" content="https://mv-inks.de/blog-SEITENNAME.html">
<meta property="og:image" content="https://mv-inks.de/img/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://mv-inks.de/img/og-image.jpg">
```

**MITTEL – og:url fehlt auf stile.html, pflege.html, shop.html, blog.html**
Ohne `og:url` kann Facebook/LinkedIn die kanonische URL eines geteilten Links nicht korrekt zuordnen.

**MITTEL – Twitter Card fehlt komplett auf shop.html**
Die Shop-Seite hat kein Twitter Card Set.

**INFO – Keywords-Meta-Tag**
`index.html`, `blog-*.html` und `en/index.html` haben `<meta name="keywords">`. Dieser Tag wird von Google ignoriert, schadet aber nicht. Konsistenz anstreben oder ganz weglassen.

---

## 2. Schema.org / Structured Data

### Was vorhanden ist

| Seite | Schema-Typ | Status |
|---|---|---|
| index.html | TattooParlor | Teilweise korrekt |
| portfolio.html | ImageGallery | Lueckenhaft |
| faq.html | FAQPage | Gut |
| en/index.html | TattooParlor | Fehler: Telefon/Email leer |

### Probleme

**HOCH – en/index.html: TattooParlor ohne Telefon und E-Mail**
Die englische Startseite hat leere Felder fuer `telephone` und `email` im Schema:
```json
"telephone": "",
"email": "",
```
Google bewertet unvollstaendige Schema-Daten schlechter als gar keine. Diese Felder muessen beiderseits identisch sein oder aus dem EN-Schema entfernt werden.

**HOCH – portfolio.html: ImageGallery verwendet nicht-existente Bilder**
Die `image`-Liste im Schema referenziert:
- `https://mv-inks.de/img/instagram-header.jpg` (existiert)
- `https://mv-inks.de/img/instagram-profile.jpg` (existiert)
- `https://mv-inks.de/img/mandala-large-blue1.svg` – ein SVG als Galerie-Bild im Schema ist ungewoehnlich und kann von Google ignoriert werden

Stattdessen sollten konkrete Portfolio-JPG-Bilder mit realen Tattoo-Fotos angegeben werden.

**MITTEL – Kein `Person`-Schema auf der Startseite**
Mavie Sommerfeld als Person (Tattoo Artist) hat keinen eigenen `Person`-Schema-Eintrag auf oberster Ebene. Ein `Person`-Schema mit `sameAs`-Links zu Instagram und Impressum haette SEO-Nutzen als Knowledge Graph-Signal.

**MITTEL – Kein `Article`/`BlogPosting`-Schema auf Blog-Artikeln**
Alle fuenf Blog-Artikel (`blog-*.html`) haben keinerlei strukturierte Daten. Fuer Blog-Inhalte empfiehlt sich mindestens ein `BlogPosting`-Schema mit `datePublished`, `author`, `headline` und `image`.

**MITTEL – `openingHours` fehlt im TattooParlor-Schema**
Google Business Profiles und lokale Suchen profitieren stark von `openingHoursSpecification` im Schema.

**INFO – `priceRange` nur in DE-Version**
Der `priceRange: "€€"` ist nur in `index.html` gesetzt, fehlt in `en/index.html`.

---

## 3. Canonical Tags

### Auswertung

| Seite | Canonical gesetzt | Korrekte URL |
|---|---|---|
| index.html | Ja | `https://mv-inks.de/` – korrekt |
| portfolio.html | Ja | `https://mv-inks.de/portfolio.html` – korrekt |
| stile.html | Ja | Korrekt |
| anfrage.html | Ja | Korrekt |
| faq.html | Ja | Korrekt |
| pflege.html | Ja | Korrekt |
| shop.html | Ja | Korrekt |
| blog.html | Ja | Korrekt |
| blog-blackout.html | Ja | Korrekt |
| blog-eigene-designs.html | Ja | Korrekt |
| blog-erster-termin.html | Ja | Korrekt |
| blog-schmerzen-heilung.html | Ja | Korrekt |
| blog-design-prozess.html | Ja | Korrekt |
| impressum.html | Ja | Korrekt |
| en/index.html | Ja | `https://mv-inks.de/en/` – korrekt |
| 404.html | Nein | Nicht noetig (noindex) |

**Fazit:** Canonical-Tags sind auf allen indexierbaren Seiten korrekt gesetzt. Keine Probleme.

---

## 4. robots.txt und sitemap.xml

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://mv-inks.de/sitemap.xml
```

**MITTEL – Kein `Disallow` fuer nicht-indexierbare Seiten**
Die `robots.txt` erlaubt alles. Seiten wie `impressum.html`, `datenschutz.html` und `404.html` sind zwar per `noindex`-Meta-Tag ausgeschlossen, aber es kostet Crawl-Budget, dass Google sie trotzdem crawlt. Empfehlung:
```
Disallow: /impressum.html
Disallow: /datenschutz.html
```

**INFO – Kein `lastmod` in Sitemap**
Die `sitemap.xml` hat kein `<lastmod>`-Datum bei den Eintraegen. Das ist kein Fehler, aber ein `lastmod`-Datum hilft Google bei der Priorisierung neuer Inhalte.

### sitemap.xml – Vollstaendigkeitspruefung

| Seite | In Sitemap | Anmerkung |
|---|---|---|
| / | Ja | Korrekt |
| /portfolio.html | Ja | |
| /stile.html | Ja | |
| /shop.html | Ja | |
| /anfrage.html | Ja | |
| /faq.html | Ja | |
| /pflege.html | Ja | |
| /blog.html | Ja | |
| /blog-blackout.html | Ja | |
| /blog-eigene-designs.html | Ja | |
| /blog-erster-termin.html | Ja | |
| /blog-schmerzen-heilung.html | Ja | |
| /blog-design-prozess.html | Ja | |
| /impressum.html | **FEHLT** | Korrekt – noindex-Seiten gehoeren nicht in die Sitemap |
| /datenschutz.html | **FEHLT** | Korrekt |
| /en/* | Ja (alle 8 Seiten) | |

**Fazit:** Die Sitemap ist inhaltlich vollstaendig und korrekt. Alle indexierbaren Seiten sind enthalten, Legal-Seiten sind ausgenommen.

**MITTEL – Blog-Artikel in Sitemap ohne hreflang-Eintraege**
Die Blog-Artikel haben in der Sitemap keine `xhtml:link`-Alternativversionen. Das ist akzeptabel, wenn keine englischen Blog-Versionen existieren, aber die Inkonsistenz zu anderen Seiten faellt auf.

---

## 5. Seitengeschwindigkeit-Faktoren

### Bildgroessen (KRITISCH)

| Bild | Groesse | Problem |
|---|---|---|
| portfolio-geometry-3.jpg | 3,6 MB | Kritisch – viel zu groß |
| portfolio-healed-2.jpg | 2,2 MB | Zu groß |
| portfolio-blackwork-4.jpg | 2,1 MB | Zu groß |
| portfolio-mandala-2.jpg | 2,1 MB | Zu groß |
| wannado-4.jpg | 2,7 MB | Zu groß |
| wannado-5.jpg | 2,4 MB | Zu groß |
| wannado-3.jpg | 1,8 MB | Zu groß |
| mavie-portrait-hero.png | 595 KB | PNG statt JPEG/WebP – Optimierungspotenzial |
| mavie-about.png | 412 KB | PNG statt JPEG/WebP |
| portfolio-blackwork-1.jpg bis -7.jpg | 1,1–1,8 MB je | Alle zu groß |

**Zielwert:** Portfolio-Bilder sollten maximal 200–400 KB sein. Hero-Portrait maximal 150 KB.
**Gesamteinsparpotenzial:** Circa 40–50 MB an unkomprimierten Bildern auf der Portfolio-Seite.

**Empfehlung – Bildoptimierung:**
1. Alle Portfolio-JPEGs mit `imageoptim`, `squoosh.app` oder `sharp` auf max. 1200px Breite und 85% JPEG-Qualitaet komprimieren
2. `mavie-portrait-hero.png` und `mavie-about.png` als WebP (oder mindestens JPEG) neu exportieren
3. `<img>` Tags auf `loading="lazy"` pruefen (ist auf den meisten Bildern bereits gesetzt, ausser am Hero)

### CSS/JS-Groesse

| Datei | Groesse |
|---|---|
| css/style.css | 62,9 KB |
| js/main.js | 16,9 KB |

**INFO – CSS ist unminifiziert**
Die `style.css` mit 62,9 KB ist fuer ein statisches Site relativ groß und nicht minifiziert. Empfehlung: Mit `clean-css` oder einem Build-Tool minifizieren. Erwartete Einsparung: ca. 20–30%.

**INFO – Kein Caching-Setup sichtbar**
GitHub Pages liefert Standard-Caching-Header. Fuer bessere Performance empfiehlt sich ein CDN-Einsatz (z.B. Cloudflare vor GitHub Pages).

**GUT – Font-Preload vorhanden**
`Inter Tight` wird korrekt per `<link rel="preload">` vorgeladen.

**GUT – Kein render-blocking JavaScript**
`main.js` wird am Ende des `<body>` eingebunden, nicht im `<head>`.

**INFO – Externes Script auf anfrage.html**
`<script src="https://cdn.forminit.co/sdk.js" defer>` laedt ein Drittanbieter-Script. Dieses kann den Page Speed beeinflussen, wenn der externe Server langsam ist.

---

## 6. Mobile-Friendliness

**GUT – Viewport-Tag auf allen Seiten korrekt:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**GUT – Responsive Navigation vorhanden**
Hamburger-Menu und Mobile-Menu sind implementiert.

**GUT – Fluid Layout mit CSS**
Das CSS (`style.css`) verwendet flexibel-responsive Layouts.

**GUT – Theme-Color gesetzt**
`<meta name="theme-color" content="#0d1117">` auf allen Hauptseiten.

**GUT – Apple Touch Icon vorhanden**
`<link rel="apple-touch-icon" href="img/apple-touch-icon.png">` auf den meisten Seiten.

**MITTEL – Apple Touch Icon fehlt auf Blog-Artikeln**
`blog-blackout.html`, `blog-eigene-designs.html`, `blog-erster-termin.html`, `blog-schmerzen-heilung.html`, `blog-design-prozess.html` haben keinen `apple-touch-icon`-Link und keine `theme-color`-Meta.

---

## 7. Interne Verlinkung

### Inkonsistenz im Hauptnavigationsblock

Die Hauptnavigation in `index.html` enthaelt **nicht** den Link zu `pflege.html`:
```html
<!-- index.html nav-links: Home, Portfolio, Stile, Shop, Anfrage, FAQ, Blog -->
```

Das Mobile-Menu in `index.html` enthaelt `pflege.html`, die Desktop-Nav nicht. Diese Inkonsistenz sorgt dafuer, dass Google den Pflege-Link vom Index seltener entdeckt.

In `portfolio.html` und anderen Seiten ist der Pflege-Link in der Desktop-Nav vorhanden. Die Startseite ist damit die einzige Ausnahme ohne Pflege-Link in der Desktop-Navigation.

**FIX fuer index.html – Desktop Nav (nach `<li><a href="blog.html">Blog</a></li>` einfuegen):**
```html
<li><a href="pflege.html">Pflege</a></li>
```

### Blog-Artikel: Sprach-Toggle zeigt auf en/index.html statt auf englische Entsprechung

Alle Blog-Artikel (`blog-blackout.html`, `blog-eigene-designs.html` etc.) haben im Language-Toggle:
```html
<a href="en/index.html">EN</a>
```
Es gibt keine englischen Versionen der Blog-Artikel, aber das Ziel sollte zumindest konsistent sein (z.B. `en/index.html` ist akzeptabel, aber klar kommunizieren).

### Fehlende Cross-Links zwischen thematisch verwandten Seiten

- `pflege.html` verlinkt nicht auf `blog-schmerzen-heilung.html` (thematisch direkt verwandt)
- `faq.html` verlinkt nicht auf `pflege.html` oder `stile.html`
- Blog-Artikel verlinken zwar teilweise untereinander, aber nicht konsistent auf Hauptseiten wie `anfrage.html` oder `stile.html`

---

## 8. Alt-Tags auf Bildern

### Auswertung

**GUT – Hauptseiten (index.html, portfolio.html)**
Alle produktiven Portfolio-Bilder haben beschreibende Alt-Texte, z.B.:
- `alt="Mandala Geometry Sleeve"`
- `alt="Mavie Sommerfeld – Tattoo Künstlerin mit tätowiertem Arm, spezialisiert auf Mandala und Dotwork"`

**GUT – Dekorative Bilder korrekt mit leerem Alt**
Loading-Screen-SVG und Mandala-Dekorationen haben `alt=""` – korrekte Praxis.

**GUT – Logo mit Alt-Text**
`alt="mv·inks"` auf allen Logo-Referenzen.

**MITTEL – Blog-Artikel: Alt-Texte nicht pruefbar**
Blog-Artikel wurden nur bis Zeile 20 gelesen. Sicherstellen, dass alle Bilder in den Artikeln beschreibende Alt-Texte haben.

**INFO – Twitter OG-Image-Inkonsistenz auf portfolio.html**
`og:image` zeigt auf `og-image.jpg`, `twitter:image` auf `instagram-header.jpg`. Beide sollten auf dasselbe Bild zeigen.

---

## 9. Heading-Hierarchie (H1, H2, H3)

### Auswertung Hauptseiten

| Seite | H1 | H2 | H3 | Status |
|---|---|---|---|---|
| index.html | "Kunst, die unter die Haut geht." (1x) | Mehrere (Ausgewaehlte Werke, Mavie Sommerfeld, etc.) | Vorhanden | GUT |
| portfolio.html | "Meine Arbeiten" (1x) | Keine direkten H2 im Grid | – | GUT |
| stile.html | Vorhanden | Vorhanden | Vorhanden | GUT |
| anfrage.html | "Termin anfragen" (1x) | – | – | GUT |
| faq.html | Vorhanden (FAQ-Titel) | FAQ-Kategorien | – | GUT |
| pflege.html | Vorhanden | Vorhanden | – | GUT |
| blog.html | Vorhanden | Blog-Karten-Titel als H2 | – | GUT |

### Blog-Artikel-Hierarchie (blog-eigene-designs.html als Beispiel)

```
H1: Warum ich ausschließlich eigene Designs tätowiere
  H3: Dein einzigartiges Design   <-- H2 uebersprungen
  H3: Weiterlesen
    H2: Wie dein individuelles Tattoo-Design bei mir entsteht  <-- Blog-Karten-Titel
    H2: So läuft dein erster Tattoo-Termin bei mir ab
```

**MITTEL – Heading-Sprung von H1 zu H3 in Blog-Artikeln**
Blog-Artikel springen direkt von H1 zu H3. Es fehlen H2-Zwischenebenen fuer die Hauptabschnitte. Google bewertet H2-Schlagzeilen als wichtige Content-Signale.

**FIX:** Abschnittsheadings in Blog-Artikeln von H3 auf H2 aendern und H3 fuer Unterabschnitte reservieren.

---

## 10. Hreflang-Tags

### Vollstaendigkeitspruefung

| Seite | hreflang="de" | hreflang="en" | x-default | Status |
|---|---|---|---|---|
| index.html | Ja | Ja | Ja | GUT |
| portfolio.html | Ja | Ja | Ja | GUT |
| stile.html | Ja | Ja | **FEHLT** | FEHLER |
| anfrage.html | Ja | Ja | Ja | GUT |
| faq.html | Ja | Ja | Ja | GUT |
| pflege.html | Ja | Ja | **FEHLT** | FEHLER |
| shop.html | Keine Hreflang-Tags | | | FEHLT KOMPLETT |
| blog.html | Keine Hreflang-Tags | | | FEHLT KOMPLETT |
| blog-*.html (5 Artikel) | Keine Hreflang-Tags | | | AKZEPTABEL (kein EN) |
| en/index.html | Ja | Ja | Ja | GUT |
| en/portfolio.html | Ja | Ja | **FEHLT** | FEHLER |
| en/faq.html | Ja | Ja | **FEHLT** | FEHLER |

### Kritische Fehler

**HOCH – x-default fehlt auf stile.html, pflege.html, en/portfolio.html, en/faq.html**
`x-default` teilt Google mit, welche URL die "globale Standard"-Version ist (also welche gezeigt wird, wenn keine Sprachpraeferenz erkennbar ist). Fehlendes `x-default` kann dazu fuehren, dass Google zufaellig die DE oder EN Version als Standard waehlt.

**FIX fuer alle betroffenen Seiten:**
```html
<link rel="alternate" hreflang="x-default" href="https://mv-inks.de/SEITENNAME.html">
```

**HOCH – shop.html und blog.html haben keine Hreflang-Tags**
Beide haben englische Entsprechungen in der Sitemap (`en/shop.html`). Die fehlenden Hreflang-Tags auf diesen Seiten koennen zu Duplicate-Content-Signalen fuehren.

**FIX fuer shop.html:**
```html
<link rel="alternate" hreflang="de" href="https://mv-inks.de/shop.html">
<link rel="alternate" hreflang="en" href="https://mv-inks.de/en/shop.html">
<link rel="alternate" hreflang="x-default" href="https://mv-inks.de/shop.html">
```

---

## 11. 404-Seite

**GUT – 404-Seite vorhanden**
`404.html` existiert und ist korrekt konfiguriert:
- `<meta name="robots" content="noindex, nofollow">` – korrekt
- Navigation vorhanden (Links zu allen Hauptseiten)
- Favicon gesetzt

**INFO – GitHub Pages muss 404.html explizit konfiguriert sein**
Bei GitHub Pages wird `404.html` automatisch als 404-Fehlerseite genutzt, wenn sie im Root-Verzeichnis liegt. Das ist hier gegeben.

**MITTEL – 404-Seite fehlen Preload/Font-Tags und Theme-Color**
Die 404-Seite laedt die `style.css` (mit importierten Fonts), hat aber keine `<link rel="preload">` Eintraege fuer Fonts und kein `<meta name="theme-color">`. Das verursacht FOUT (Flash of Unstyled Text) beim Laden.

---

## 12. Domain-Konsistenz: mv-inks.de

### Ergebnis der Pruefung

**GUT – Alle HTML-Dateien verwenden ausschliesslich `https://mv-inks.de`**
In saemtlichen gecrawlten HTML-Dateien, der sitemap.xml und der robots.txt wird konsistent die korrekte Domain `mv-inks.de` verwendet. Die CNAME-Datei bestaetigt `mv-inks.de` als konfigurierte Domain.

Kein einziges Vorkommen von:
- `mvinks.de` (ohne Bindestrich)
- `www.mv-inks.de` (www-Variante ohne Canonical-Problem)
- `http://mv-inks.de` (unsicheres HTTP)

---

## 13. Heeslingen-Referenzen

### Ergebnis der Pruefung

**GUT – Keine Heeslingen-Referenzen in indexierbaren HTML-Dateien**
Die Suche ueber alle `.html`-Dateien ergab keinen einzigen Treffer fuer "Heeslingen". Die Website kommuniziert ausschliesslich Hamburg als Standort.

**INFO – Heeslingen in Marketing-Hilfsdateien vorhanden**
In folgenden Dateien (die nicht indexiert werden) existieren noch Heeslingen-Referenzen:
- `instagram-content-kalender.md`
- `instagram-reels-hooks.md`
- `instagram-captions.md`
- `instagram-hashtag-seo.md`
- `instagram-wachstumsstrategie.md`
- `build-presentation.js`
- `PROJEKT-STATUS.txt`

Diese Dateien sind keine HTML-Seiten und werden nicht von Suchmaschinen indexiert. Sie sollten jedoch vor dem finalen Deployment oder einer Instagram-Kampagne aktualisiert werden, wenn Heeslingen kein aktiver Standort mehr ist.

---

## Priorisierte Massnahmenliste

### KRITISCH (sofort umsetzen)

1. **Bilder komprimieren** – Portfolio-Bilder von 1–3,6 MB auf max. 300–400 KB reduzieren. `portfolio-geometry-3.jpg` (3,6 MB) und `wannado-4.jpg` (2,7 MB) haben die schlechtesten Werte. Tool: squoosh.app oder `sharp` CLI.

### HOCH (innerhalb 1 Woche)

2. **Blog-Artikel OG-Tags ergaenzen** – Alle 5 Blog-Artikel brauchen `og:url`, `og:image` und Twitter Card Tags.

3. **Hreflang x-default ergaenzen** – Auf `stile.html`, `pflege.html`, `en/portfolio.html`, `en/faq.html` jeweils `<link rel="alternate" hreflang="x-default">` hinzufuegen.

4. **Hreflang auf shop.html und blog.html** – Vollstaendige Hreflang-Sektion hinzufuegen.

5. **en/index.html Schema.org reparieren** – Leere `telephone`- und `email`-Felder im TattooParlor-Schema ergaenzen oder entfernen.

### MITTEL (innerhalb 2–4 Wochen)

6. **og:url auf stile.html, pflege.html, shop.html, blog.html ergaenzen**

7. **Schema.org fuer Blog-Artikel** – `BlogPosting`-Schema mit `datePublished`, `author`, `headline`, `image` auf alle Blog-Artikel ergaenzen.

8. **Schema.org: portfolio.html ImageGallery** – SVG-Bilder aus dem Schema entfernen, stattdessen reale Portfolio-JPEGs referenzieren.

9. **Heading-Hierarchie Blog** – H3 in Blog-Artikeln auf H2 hochstufen, H3 fuer Unterabschnitte reservieren.

10. **Pflege-Link in Desktop-Nav auf index.html** – Den fehlenden `<li><a href="pflege.html">Pflege</a></li>` einfuegen.

11. **robots.txt: Disallow fuer Legal-Seiten** – Crawl-Budget schonen durch Disallow fuer `impressum.html` und `datenschutz.html`.

12. **CSS minifizieren** – `style.css` (62,9 KB) auf ca. 45 KB reduzieren.

13. **Twitter/OG-Image Inkonsistenz portfolio.html** – `twitter:image` auf `og-image.jpg` vereinheitlichen.

14. **Apple Touch Icon und Theme-Color** – In alle Blog-Artikel (`blog-*.html`) ergaenzen.

15. **lastmod in sitemap.xml** – Datum des letzten Aenderns zu allen Eintraegen hinzufuegen.

### NIEDRIG / LONG-TERM (SEO-Wachstum)

16. **Person-Schema auf Startseite** – `@type: Person` Eintrag fuer Mavie Sommerfeld als separates Schema-Objekt neben TattooParlor.

17. **openingHours im TattooParlor-Schema** – Oeffnungszeiten ergaenzen, wenn bekannt.

18. **Cloudflare CDN** – Vor GitHub Pages schalten fuer bessere Caching-Header und TTFB-Optimierung.

19. **Google Business Profile aufbauen** – Lokale SEO-Signale fuer Hamburg. Ein verifiziertes GBP-Profil kann direkt zu Buchungsanfragen fuehren.

20. **WebP-Konvertierung** – Portrait-Bilder (`mavie-portrait-hero.png`, `mavie-about.png`) als WebP mit JPEG-Fallback ausliefern.

---

*Report erstellt am 21. März 2026 – Grundlage: statische Analyse aller HTML-, XML- und robots.txt-Dateien in /Users/idris/Desktop/mvinks/*
