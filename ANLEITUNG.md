# mv·inks Website – Komplette Anleitung

**Fuer:** Mavie Sommerfeld & Idris
**Letzte Aktualisierung:** 22.03.2026

Diese Anleitung erklaert alles, was man braucht, um die Website zu verwalten,
auch ohne technisches Wissen oder KI-Hilfe.

---

## 1. WO IST WAS?

| Was | Wo | Zugangsdaten |
|-----|-----|-------------|
| **Website** | mv-inks.de | Oeffentlich, kein Login noetig |
| **Hosting** | GitHub Pages (kostenlos) | GitHub-Account: mv-inks |
| **Code/Dateien** | github.com/mv-inks/mv-inks.github.io | Login: GitHub-Account mv-inks |
| **Domain** | mv-inks.de (Registrar pruefen – vermutlich IONOS oder Namecheap) | Domain-Account Login |
| **E-Mail** | info@mv-inks.de | Google Workspace |
| **Google Analytics** | analytics.google.com | Google-Account von Mavie/Idris |
| **Google Search Console** | search.google.com/search-console | Gleicher Google-Account |
| **Google Business** | business.google.com | Gleicher Google-Account |

---

## 2. WIE FUNKTIONIERT DAS HOSTING?

Die Website liegt auf **GitHub Pages**. Das ist ein kostenloser Hosting-Service von GitHub.

### So funktioniert es:
1. Die Website-Dateien (HTML, CSS, JS, Bilder) liegen in einem GitHub-Repository
2. Das Repository heisst: **mv-inks.github.io**
3. GitHub macht daraus automatisch eine Website unter mv-inks.github.io
4. Ueber die CNAME-Datei wird die Domain mv-inks.de darauf umgeleitet

### Dateien aendern (einfachster Weg):
1. Gehe zu **github.com/mv-inks/mv-inks.github.io**
2. Logge dich ein
3. Klicke auf die Datei, die du aendern willst (z.B. index.html)
4. Klicke auf das Stift-Symbol (Edit)
5. Aenderung machen
6. Unten auf "Commit changes" klicken
7. Die Aenderung ist nach ca. 1-2 Minuten live

### Bilder austauschen:
1. Gehe zum Ordner **img/** im Repository
2. Klicke "Add file" > "Upload files"
3. Lade das neue Bild hoch (gleicher Dateiname = ersetzt das alte)
4. "Commit changes" klicken

---

## 3. DOMAIN (mv-inks.de)

### Was ist eine Domain?
Die Domain ist die Adresse der Website (mv-inks.de). Sie muss jaehrlich verlaengert werden.

### Wichtig:
- **Pruefe einmal im Jahr**, ob die Domain noch aktiv ist
- Die Domain muss auf GitHub Pages zeigen. Das ist ueber DNS-Eintraege geregelt:
  - **CNAME-Eintrag:** www → mv-inks.github.io
  - **A-Records** (IPv4): 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- Wenn die Domain ablaeuft, ist die Website nicht mehr unter mv-inks.de erreichbar
  (aber weiterhin unter mv-inks.github.io)

### Domain-Problem? So pruefst du:
1. Gehe zu deinem Domain-Registrar (wo du die Domain gekauft hast)
2. Logge dich ein
3. Pruefe ob die Domain aktiv ist und DNS-Eintraege stimmen

---

## 4. E-MAIL (info@mv-inks.de)

- Laeuft ueber **Google Workspace**
- Login: mail.google.com mit info@mv-inks.de
- Kosten: ca. 6-7 EUR/Monat (wird automatisch abgebucht)
- Wenn nicht mehr gewuenscht: In der Google Workspace Admin-Konsole kuendigen

---

## 5. GOOGLE ANALYTICS (GA4)

### Was ist das?
Zeigt dir, wie viele Besucher auf die Website kommen, welche Seiten beliebt sind, woher die Besucher kommen.

### Zugang:
1. Gehe zu **analytics.google.com**
2. Logge dich mit dem Google-Account ein
3. Property: mv-inks.de
4. **GA4 Mess-ID:** G-S3RNJ4ZPYV

### DSGVO:
- GA4 wird nur geladen, wenn der Besucher auf "Akzeptieren" klickt (Cookie-Banner)
- Das ist gesetzlich vorgeschrieben und bereits eingebaut

---

## 6. GOOGLE SEARCH CONSOLE

### Was ist das?
Zeigt dir, bei welchen Google-Suchen deine Website erscheint und ob es technische Probleme gibt.

### Zugang:
1. Gehe zu **search.google.com/search-console**
2. Gleicher Google-Account wie Analytics
3. Property: mv-inks.de

### Was du dort regelmaessig pruefen solltest:
- **Leistung:** Welche Suchbegriffe bringen Besucher?
- **Abdeckung/Seiten:** Gibt es Fehler beim Crawlen?
- **Sitemap:** Ist die Sitemap eingereicht? (mv-inks.de/sitemap.xml)

---

## 7. GOOGLE BUSINESS PROFIL

### Was ist das?
Das Profil, das bei Google Maps und in der Google-Suche erscheint wenn jemand nach "mv inks" oder "Tattoo Hamburg" sucht.

### Zugang:
1. Gehe zu **business.google.com**
2. Gleicher Google-Account
3. Dort kannst du: Fotos hochladen, Oeffnungszeiten aendern, auf Bewertungen antworten

### Tipps:
- Regelmaessig neue Fotos hochladen (frische Tattoos)
- Auf JEDE Google-Bewertung antworten (auch negative)
- Oeffnungszeiten und Kontaktdaten aktuell halten

---

## 8. WEBSITE-STRUKTUR

### Deutsche Seiten:
| Datei | Seite |
|-------|-------|
| index.html | Startseite |
| portfolio.html | Portfolio (Arbeiten + Wanna Do's) |
| stile.html | Tattoo-Stile |
| shop.html | Shop (Coming Soon) |
| anfrage.html | Anfrage-Formular |
| pflege.html | Aftercare/Pflege |
| faq.html | Haeufige Fragen |
| blog.html | Blog-Uebersicht |
| blog-eigene-designs.html | Blog: Eigene Designs |
| blog-design-prozess.html | Blog: Design-Prozess |
| blog-erster-termin.html | Blog: Erster Termin |
| blog-schmerzen-heilung.html | Blog: Schmerzen & Heilung |
| blog-blackout.html | Blog: Blackout |
| impressum.html | Impressum |
| datenschutz.html | Datenschutz |
| 404.html | Fehlerseite |

### Englische Seiten (im Ordner /en/):
index, portfolio, styles, booking, aftercare, faq, legal, privacy

### Wichtige Ordner:
| Ordner | Inhalt |
|--------|--------|
| css/ | Stylesheet (style.css) – Design und Layout |
| js/ | JavaScript (main.js, cookie-consent.js) – Funktionen |
| img/ | Alle Bilder (Tattoo-Fotos, Logos, Icons) |
| fonts/ | Schriftarten (Inter Tight) |
| en/ | Englische Version der Website |

---

## 9. HAEUFIGE AUFGABEN

### Neues Tattoo-Foto ins Portfolio:
1. Foto auf max. 1200px Breite verkleinern (z.B. mit Vorschau auf Mac)
2. Als JPG speichern mit ca. 80% Qualitaet
3. Dateiname: portfolio-[stil]-[nummer].jpg (z.B. portfolio-mandala-9.jpg)
4. In den img/ Ordner auf GitHub hochladen
5. In portfolio.html einen neuen Eintrag nach dem Muster der vorhandenen einfuegen
6. Dasselbe in en/portfolio.html fuer die englische Version

### Text auf der Website aendern:
1. Die richtige HTML-Datei auf GitHub oeffnen
2. Den Text finden (Strg+F / Cmd+F zum Suchen)
3. Text aendern
4. "Commit changes" klicken
5. Nach 1-2 Minuten ist die Aenderung live

### WhatsApp-Nummer aendern:
- Aktuelle Nummer: 4915159025721
- Suche in ALLEN HTML-Dateien nach dieser Nummer
- Ersetze sie durch die neue (mit Landesvorwahl, ohne +, ohne Leerzeichen)

### Instagram-Handle aendern:
- Aktuell: @mv.inks
- Suche nach "mv.inks" und "instagram.com/mv.inks" in allen HTML-Dateien

---

## 10. KOSTEN-UEBERSICHT

| Was | Kosten | Intervall |
|-----|--------|-----------|
| GitHub Pages (Hosting) | Kostenlos | — |
| Domain (mv-inks.de) | ca. 10-15 EUR | Jaehrlich |
| Google Workspace (E-Mail) | ca. 7 EUR | Monatlich |
| Google Analytics | Kostenlos | — |
| Google Search Console | Kostenlos | — |
| Google Business Profil | Kostenlos | — |
| **Gesamt** | **ca. 95-100 EUR/Jahr** | |

---

## 11. NOTFALL: WEBSITE IST OFFLINE

### Schritt 1: Pruefen was das Problem ist
- Geht mv-inks.github.io? → Wenn ja, liegt es an der Domain
- Geht mv-inks.github.io auch nicht? → Problem bei GitHub

### Schritt 2: Domain-Problem
- Beim Domain-Registrar einloggen und pruefen ob Domain aktiv ist
- DNS-Eintraege pruefen (siehe Abschnitt 3)

### Schritt 3: GitHub-Problem
- Gehe zu github.com/mv-inks/mv-inks.github.io
- Klicke auf "Settings" > "Pages"
- Pruefe ob "Source" auf "Deploy from a branch" steht
- Branch muss "main" sein, Ordner "/ (root)"

### Schritt 4: Nichts hilft?
- GitHub Status pruefen: githubstatus.com (manchmal gibt es Ausfaelle)
- Warten und spaeter nochmal pruefen

---

## 12. WICHTIGE ZUGANGSDATEN-CHECKLISTE

Stelle sicher, dass du Zugang zu folgendem hast (Passwoerter sicher aufbewahren!):

- [ ] GitHub-Account (mv-inks)
- [ ] Google-Account (fuer Analytics, Search Console, Business)
- [ ] Google Workspace (info@mv-inks.de)
- [ ] Domain-Registrar Account
- [ ] WhatsApp Business (015159025721)
- [ ] Instagram (@mv.inks)

**WICHTIG:** Schreibe alle Passwoerter auf und bewahre sie sicher auf!
Empfehlung: Einen Passwort-Manager nutzen (z.B. Bitwarden – kostenlos).

---

*Diese Anleitung wurde am 22.03.2026 erstellt.*
*Bei technischen Fragen: Idris kontaktieren.*
