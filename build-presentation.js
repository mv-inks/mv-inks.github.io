const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const {
  FaInstagram, FaHashtag, FaChartLine, FaCalendarAlt, FaVideo,
  FaBullhorn, FaUsers, FaRocket, FaCheckCircle, FaSearch,
  FaArrowRight, FaEye, FaHeart, FaComment, FaShareAlt,
  FaBookmark, FaClock, FaMobileAlt, FaStar, FaPencilAlt,
  FaLightbulb, FaBolt, FaGlobe, FaLayerGroup
} = require("react-icons/fa");

// Icon helper
function renderIconSvg(IconComponent, color = "#000000", size = 256) {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) })
  );
}
async function iconToBase64Png(IconComponent, color, size = 256) {
  const svg = renderIconSvg(IconComponent, color, size);
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + pngBuffer.toString("base64");
}

// Brand colors
const DARK = "0D1117";
const DARK_ALT = "0D101B";
const CREAM = "F5F0E8";
const CREAM_PURE = "F9F9F1";
const BLUE = "1A3F7A";
const BLUE_MED = "396AB1";
const BLUE_LIGHT = "5081B8";
const WHITE = "FFFFFF";
const GRAY = "8B95A5";
const GRAY_DARK = "4A5568";
const ACCENT_GREEN = "48BB78";
const ACCENT_ORANGE = "ED8936";
const ACCENT_RED = "F56565";

// Shadow factory
const mkShadow = () => ({ type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.2 });

async function buildPresentation() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Claude Code";
  pres.title = "mv·inks Instagram Comeback Strategie";

  // ============================================================
  // SLIDE 1: TITLE
  // ============================================================
  let s1 = pres.addSlide();
  s1.background = { color: DARK };

  // Blue accent bar left
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  // Logo area with subtle glow
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 0.8, w: 8.8, h: 0.02, fill: { color: BLUE }, transparency: 40 });

  s1.addText("mv·inks", {
    x: 0.6, y: 1.0, w: 8.8, h: 1.2,
    fontSize: 54, fontFace: "Georgia", color: CREAM,
    bold: true, align: "left", margin: 0
  });

  s1.addText("Instagram Comeback Strategie", {
    x: 0.6, y: 2.1, w: 8.8, h: 0.8,
    fontSize: 28, fontFace: "Calibri", color: BLUE_LIGHT,
    align: "left", margin: 0
  });

  s1.addText("Reichweite & Buchungen nach 6 Monaten Pause aufbauen", {
    x: 0.6, y: 2.9, w: 8.8, h: 0.6,
    fontSize: 16, fontFace: "Calibri", color: GRAY,
    align: "left", margin: 0
  });

  // Bottom info bar
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.8, w: 10, h: 0.825, fill: { color: BLUE }, transparency: 80 });
  s1.addText("Mavie Sommerfeld  |  @mv.inks  |  Heeslingen & Hamburg  |  März 2026", {
    x: 0.6, y: 4.9, w: 8.8, h: 0.5,
    fontSize: 12, fontFace: "Calibri", color: GRAY, align: "left", margin: 0
  });

  // ============================================================
  // SLIDE 2: AGENDA
  // ============================================================
  let s2 = pres.addSlide();
  s2.background = { color: DARK };
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s2.addText("Übersicht", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });

  const agendaItems = [
    { num: "01", title: "Ausgangssituation", desc: "Wo steht @mv.inks heute?" },
    { num: "02", title: "Was wurde erstellt", desc: "5 strategische Dokumente im Detail" },
    { num: "03", title: "4-Wochen Content-Plan", desc: "Woche für Woche zum Comeback" },
    { num: "04", title: "Algorithmus & Strategie", desc: "So funktioniert Instagram 2026" },
    { num: "05", title: "Reels, Hooks & Storys", desc: "Content der Reichweite bringt" },
    { num: "06", title: "Hashtag & SEO", desc: "Auffindbarkeit maximieren" },
    { num: "07", title: "Wachstums-Roadmap", desc: "KPIs und Prognose für 6 Monate" },
    { num: "08", title: "Nächste Schritte", desc: "Sofort-Maßnahmen für den Start" },
  ];

  agendaItems.forEach((item, i) => {
    const yPos = 1.3 + i * 0.52;
    s2.addText(item.num, {
      x: 0.6, y: yPos, w: 0.6, h: 0.42,
      fontSize: 16, fontFace: "Calibri", color: BLUE_LIGHT, bold: true, margin: 0
    });
    s2.addText(item.title, {
      x: 1.3, y: yPos, w: 3.5, h: 0.42,
      fontSize: 15, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
    });
    s2.addText(item.desc, {
      x: 5.0, y: yPos, w: 4.5, h: 0.42,
      fontSize: 13, fontFace: "Calibri", color: GRAY, margin: 0
    });
    if (i < agendaItems.length - 1) {
      s2.addShape(pres.shapes.LINE, { x: 0.6, y: yPos + 0.46, w: 8.8, h: 0, line: { color: BLUE, width: 0.5 }, transparency: 70 });
    }
  });

  // ============================================================
  // SLIDE 3: AUSGANGSSITUATION
  // ============================================================
  let s3 = pres.addSlide();
  s3.background = { color: DARK };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s3.addText("Ausgangssituation", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });
  s3.addText("Was wir haben — und was fehlt", {
    x: 0.6, y: 0.85, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: GRAY, margin: 0
  });

  // Problem column
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.5, w: 4.2, h: 3.5, fill: { color: DARK_ALT } });
  const iconProblem = await iconToBase64Png(FaEye, "#F56565");
  s3.addImage({ data: iconProblem, x: 0.9, y: 1.65, w: 0.35, h: 0.35 });
  s3.addText("Herausforderungen", {
    x: 1.4, y: 1.65, w: 3.2, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: ACCENT_RED, bold: true, margin: 0
  });

  const problems = [
    "~6 Monate keine Posts",
    "Algorithmus hat Account abgestraft",
    "Follower-Engagement eingebrochen",
    "Keine konsistente Posting-Routine",
    "Website noch nicht live",
    "Kein strukturierter Content-Plan"
  ];
  s3.addText(
    problems.map((p, i) => ({ text: p, options: { bullet: true, breakLine: i < problems.length - 1, color: CREAM, fontSize: 13, fontFace: "Calibri" } })),
    { x: 0.9, y: 2.2, w: 3.6, h: 2.6 }
  );

  // Assets column
  s3.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.5, w: 4.2, h: 3.5, fill: { color: DARK_ALT } });
  const iconAsset = await iconToBase64Png(FaCheckCircle, "#48BB78");
  s3.addImage({ data: iconAsset, x: 5.5, y: 1.65, w: 0.35, h: 0.35 });
  s3.addText("Vorhandene Assets", {
    x: 6.0, y: 1.65, w: 3.2, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: ACCENT_GREEN, bold: true, margin: 0
  });

  const assets = [
    "24+ Portfolio-Fotos (5 Stile)",
    "6 Wanna-Do Designs",
    "30 High-Res Projektfotos",
    "5 Blog-Artikel",
    "Videomaterial für Reels",
    "5 echte Kundenbewertungen"
  ];
  s3.addText(
    assets.map((a, i) => ({ text: a, options: { bullet: true, breakLine: i < assets.length - 1, color: CREAM, fontSize: 13, fontFace: "Calibri" } })),
    { x: 5.5, y: 2.2, w: 3.6, h: 2.6 }
  );

  // ============================================================
  // SLIDE 4: WAS WURDE ERSTELLT (5 Dokumente)
  // ============================================================
  let s4 = pres.addSlide();
  s4.background = { color: DARK };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s4.addText("Was wurde erstellt", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });
  s4.addText("5 spezialisierte Agenten — 5 strategische Dokumente", {
    x: 0.6, y: 0.85, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: GRAY, margin: 0
  });

  const docs = [
    { icon: FaCalendarAlt, color: "#5081B8", title: "Content-Kalender", desc: "Tag-für-Tag Plan für 4 Wochen\nmit Assets, Uhrzeiten, Storys", file: "instagram-content-kalender.md" },
    { icon: FaPencilAlt, color: "#48BB78", title: "16 Captions", desc: "Fertige Texte, Hooks, CTAs\n+ 150 Hashtags", file: "instagram-captions.md" },
    { icon: FaVideo, color: "#ED8936", title: "Reels & Hooks", desc: "8 Reel-Skripte, 50 Hooks\n10 Story-Formate", file: "instagram-reels-hooks.md" },
    { icon: FaChartLine, color: "#F56565", title: "Wachstumsstrategie", desc: "Algorithmus, Engagement\nRoadmap & KPIs", file: "instagram-wachstumsstrategie.md" },
    { icon: FaSearch, color: "#9F7AEA", title: "Hashtag & SEO", desc: "150 Hashtags, 50 Keywords\nLokale SEO-Strategie", file: "instagram-hashtag-seo.md" },
  ];

  for (let i = 0; i < docs.length; i++) {
    const xPos = 0.6 + (i % 3) * 3.1;
    const yPos = i < 3 ? 1.5 : 3.5;

    s4.addShape(pres.shapes.RECTANGLE, { x: xPos, y: yPos, w: 2.8, h: 1.7, fill: { color: DARK_ALT }, shadow: mkShadow() });

    const ico = await iconToBase64Png(docs[i].icon, docs[i].color);
    s4.addImage({ data: ico, x: xPos + 0.15, y: yPos + 0.15, w: 0.3, h: 0.3 });

    s4.addText(docs[i].title, {
      x: xPos + 0.55, y: yPos + 0.1, w: 2.1, h: 0.4,
      fontSize: 14, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
    });
    s4.addText(docs[i].desc, {
      x: xPos + 0.15, y: yPos + 0.55, w: 2.5, h: 0.7,
      fontSize: 11, fontFace: "Calibri", color: GRAY, margin: 0
    });
    s4.addText(docs[i].file, {
      x: xPos + 0.15, y: yPos + 1.3, w: 2.5, h: 0.3,
      fontSize: 9, fontFace: "Calibri", color: BLUE_LIGHT, margin: 0, italic: true
    });
  }

  // ============================================================
  // SLIDE 5: 4-WOCHEN PLAN OVERVIEW
  // ============================================================
  let s5 = pres.addSlide();
  s5.background = { color: DARK };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s5.addText("4-Wochen Content-Plan", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });
  s5.addText("24. März — 20. April 2026", {
    x: 0.6, y: 0.85, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: GRAY, margin: 0
  });

  const weeks = [
    { num: "WOCHE 1", title: "Comeback", color: BLUE_LIGHT, dates: "24.–30. März",
      items: ["Reel: Ich bin zur\u00FCck", "Carousel: 5 Stile", "Post: Mandala Highlight", "Reel: Eigene Designs"] },
    { num: "WOCHE 2", title: "Vertrauen", color: ACCENT_GREEN, dates: "31. März – 6. April",
      items: ["Carousel: Healed Tattoos", "Post: Blackwork Statement", "Reel: Erster Termin", "Post: Geometry Highlight"] },
    { num: "WOCHE 3", title: "Kunden", color: ACCENT_ORANGE, dates: "7.–13. April",
      items: ["Reel: Wanna-Do Drop", "Carousel: FAQ beantwortet", "Post: Realistic Highlight", "Reel: Design-Prozess"] },
    { num: "WOCHE 4", title: "Website", color: ACCENT_RED, dates: "14.–20. April",
      items: ["Reel: Website Teaser", "Carousel: mvinks.de Launch", "Post: Kundenstimmen", "Reel: Monatsrückblick"] },
  ];

  weeks.forEach((w, i) => {
    const xPos = 0.4 + i * 2.35;

    // Week header
    s5.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 1.5, w: 2.15, h: 0.55, fill: { color: w.color }, transparency: 15 });
    s5.addText(w.num, {
      x: xPos, y: 1.5, w: 2.15, h: 0.3,
      fontSize: 10, fontFace: "Calibri", color: w.color, bold: true, align: "center", margin: 0
    });
    s5.addText(w.title, {
      x: xPos, y: 1.73, w: 2.15, h: 0.3,
      fontSize: 14, fontFace: "Georgia", color: CREAM, bold: true, align: "center", margin: 0
    });
    s5.addText(w.dates, {
      x: xPos, y: 2.1, w: 2.15, h: 0.25,
      fontSize: 9, fontFace: "Calibri", color: GRAY, align: "center", margin: 0
    });

    // Week content cards
    s5.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 2.5, w: 2.15, h: 2.5, fill: { color: DARK_ALT } });
    s5.addText(
      w.items.map((item, j) => ({ text: item, options: { bullet: true, breakLine: j < w.items.length - 1, color: CREAM, fontSize: 11, fontFace: "Calibri" } })),
      { x: xPos + 0.1, y: 2.6, w: 1.95, h: 2.3, paraSpaceAfter: 6 }
    );
  });

  // Bottom stats
  s5.addText([
    { text: "16 Posts", options: { bold: true, color: BLUE_LIGHT, fontSize: 14, breakLine: false } },
    { text: "  |  ", options: { color: GRAY, fontSize: 14, breakLine: false } },
    { text: "8 Reels", options: { bold: true, color: ACCENT_GREEN, fontSize: 14, breakLine: false } },
    { text: "  |  ", options: { color: GRAY, fontSize: 14, breakLine: false } },
    { text: "28 Story-Tage", options: { bold: true, color: ACCENT_ORANGE, fontSize: 14, breakLine: false } },
    { text: "  |  ", options: { color: GRAY, fontSize: 14, breakLine: false } },
    { text: "Tägliche Storys", options: { bold: true, color: ACCENT_RED, fontSize: 14 } },
  ], { x: 0.6, y: 5.15, w: 8.8, h: 0.4, align: "center" });

  // ============================================================
  // SLIDE 6: ALGORITHMUS-STRATEGIE 2026
  // ============================================================
  let s6 = pres.addSlide();
  s6.background = { color: DARK };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s6.addText("Algorithmus-Strategie 2026", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });

  // Ranking signals
  const signals = [
    { signal: "Shares / DMs", weight: "Höchste", color: ACCENT_GREEN, w: 4.0 },
    { signal: "Watch Time", weight: "Sehr hoch", color: BLUE_LIGHT, w: 3.5 },
    { signal: "Saves", weight: "Sehr hoch", color: BLUE_LIGHT, w: 3.5 },
    { signal: "Kommentare", weight: "Hoch", color: ACCENT_ORANGE, w: 2.8 },
    { signal: "Caption Dwell Time", weight: "Hoch (NEU)", color: ACCENT_ORANGE, w: 2.8 },
    { signal: "Likes", weight: "Niedrig", color: ACCENT_RED, w: 1.5 },
  ];

  s6.addText("Ranking-Signale nach Gewicht", {
    x: 0.6, y: 1.1, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
  });

  signals.forEach((sig, i) => {
    const yPos = 1.65 + i * 0.52;
    s6.addText(sig.signal, {
      x: 0.6, y: yPos, w: 2.2, h: 0.4,
      fontSize: 12, fontFace: "Calibri", color: CREAM, margin: 0
    });
    s6.addShape(pres.shapes.RECTANGLE, { x: 2.9, y: yPos + 0.08, w: sig.w, h: 0.25, fill: { color: sig.color }, transparency: 20 });
    s6.addShape(pres.shapes.RECTANGLE, { x: 2.9, y: yPos + 0.08, w: sig.w, h: 0.25, fill: { color: sig.color } });
    s6.addText(sig.weight, {
      x: 2.9, y: yPos, w: sig.w, h: 0.4,
      fontSize: 10, fontFace: "Calibri", color: WHITE, bold: true, align: "center", margin: 0
    });
  });

  // Right column: Key insight
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.6, y: 1.1, w: 3.9, h: 2.0, fill: { color: BLUE }, transparency: 80 });
  const iconBolt = await iconToBase64Png(FaBolt, "#ED8936");
  s6.addImage({ data: iconBolt, x: 5.8, y: 1.25, w: 0.35, h: 0.35 });
  s6.addText("Entscheidende Erkenntnis", {
    x: 6.25, y: 1.25, w: 3.0, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: ACCENT_ORANGE, bold: true, margin: 0
  });
  s6.addText("Ein Reel das 50x per DM geteilt wird, schlägt ein Reel mit 500 Likes. Content muss zum Teilen und Speichern motivieren.", {
    x: 5.8, y: 1.75, w: 3.5, h: 1.2,
    fontSize: 12, fontFace: "Calibri", color: CREAM, margin: 0
  });

  // 3-Phasen Plan
  s6.addText("3-Phasen Comeback-Frequenz", {
    x: 0.6, y: 4.2, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
  });

  const phases = [
    { phase: "Phase 1 (Woche 1-2)", freq: "1 Post/Tag + 3-5 Storys", goal: "Algorithmus reaktivieren" },
    { phase: "Phase 2 (Woche 3-8)", freq: "4-5 Posts/Woche + 5-7 Storys", goal: "Reichweite stabilisieren" },
    { phase: "Phase 3 (ab Monat 3)", freq: "5-6 Posts/Woche + Live", goal: "Wachstum skalieren" },
  ];

  phases.forEach((p, i) => {
    const xPos = 0.6 + i * 3.1;
    s6.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 4.65, w: 2.8, h: 0.8, fill: { color: DARK_ALT } });
    s6.addText(p.phase, {
      x: xPos + 0.1, y: 4.68, w: 2.6, h: 0.25,
      fontSize: 10, fontFace: "Calibri", color: BLUE_LIGHT, bold: true, margin: 0
    });
    s6.addText(p.freq, {
      x: xPos + 0.1, y: 4.9, w: 2.6, h: 0.25,
      fontSize: 11, fontFace: "Calibri", color: CREAM, margin: 0
    });
    s6.addText(p.goal, {
      x: xPos + 0.1, y: 5.12, w: 2.6, h: 0.25,
      fontSize: 10, fontFace: "Calibri", color: GRAY, italic: true, margin: 0
    });
  });

  // ============================================================
  // SLIDE 7: CONTENT-PILLARS & FORMAT-MIX
  // ============================================================
  let s7 = pres.addSlide();
  s7.background = { color: DARK };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s7.addText("Content-Pillars & Format-Mix", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });

  // Pie chart for format mix
  s7.addChart(pres.charts.DOUGHNUT, [{
    name: "Format",
    labels: ["Reels (60-70%)", "Carousels (25-30%)", "Single Posts (5-10%)"],
    values: [65, 27, 8]
  }], {
    x: 0.3, y: 1.2, w: 3.5, h: 3.0,
    showPercent: false,
    showTitle: false,
    showLegend: true,
    legendPos: "b",
    legendColor: CREAM,
    legendFontSize: 10,
    chartColors: [BLUE_LIGHT, ACCENT_GREEN, ACCENT_ORANGE],
    dataLabelColor: CREAM,
  });

  // 5 Content Pillars
  s7.addText("5 Content-Säulen", {
    x: 4.3, y: 1.1, w: 5.2, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
  });

  const pillars = [
    { name: "Portfolio", pct: "35%", desc: "Fertige Arbeiten, Ergebnisse", color: BLUE_LIGHT },
    { name: "Prozess", pct: "30%", desc: "Behind the Scenes, Entstehung", color: ACCENT_GREEN },
    { name: "Wissen", pct: "15%", desc: "Pflege, FAQ, Tipps", color: ACCENT_ORANGE },
    { name: "Behind the Scenes", pct: "15%", desc: "Alltag, Studio, Persönlichkeit", color: "9F7AEA" },
    { name: "Social Proof", pct: "5%", desc: "Kundenstimmen, Bewertungen", color: ACCENT_RED },
  ];

  pillars.forEach((p, i) => {
    const yPos = 1.65 + i * 0.68;

    // Percentage
    s7.addText(p.pct, {
      x: 4.3, y: yPos, w: 0.7, h: 0.55,
      fontSize: 18, fontFace: "Calibri", color: p.color, bold: true, margin: 0, valign: "middle"
    });

    // Name + desc
    s7.addText(p.name, {
      x: 5.1, y: yPos, w: 2.5, h: 0.3,
      fontSize: 13, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
    });
    s7.addText(p.desc, {
      x: 5.1, y: yPos + 0.28, w: 4.2, h: 0.25,
      fontSize: 11, fontFace: "Calibri", color: GRAY, margin: 0
    });

    // Progress bar
    s7.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: yPos + 0.54, w: 4.2, h: 0.04, fill: { color: GRAY_DARK } });
    s7.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: yPos + 0.54, w: 4.2 * (parseInt(p.pct) / 100) * 2.85, h: 0.04, fill: { color: p.color } });
  });

  // ============================================================
  // SLIDE 8: REELS & HOOK-STRATEGIE
  // ============================================================
  let s8 = pres.addSlide();
  s8.background = { color: DARK };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s8.addText("Reels & Hook-Strategie", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });
  s8.addText("8 produktionsfertige Skripte + 50 Hooks in 5 Kategorien", {
    x: 0.6, y: 0.85, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: GRAY, margin: 0
  });

  // Left: 8 Reels list
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.4, w: 4.3, h: 3.7, fill: { color: DARK_ALT } });
  const iconVideo = await iconToBase64Png(FaVideo, "#ED8936");
  s8.addImage({ data: iconVideo, x: 0.8, y: 1.55, w: 0.3, h: 0.3 });
  s8.addText("8 Reel-Skripte", {
    x: 1.2, y: 1.55, w: 3.5, h: 0.35,
    fontSize: 15, fontFace: "Calibri", color: ACCENT_ORANGE, bold: true, margin: 0
  });

  const reels = [
    '1. "Ich bin zur\u00FCck" \u2014 Comeback',
    "2. Behind the Scenes im Studio",
    "3. Tätowier-Prozess (Skizze→Fertig)",
    "4. Detail-Aufnahmen (Macro-Shots)",
    "5. Ein Tag als Tätowiererin",
    "6. Kundenstimmen visuell",
    "7. Website-Launch Reveal",
    "8. Was kommt als n\u00E4chstes"
  ];
  s8.addText(
    reels.map((r, i) => ({ text: r, options: { breakLine: i < reels.length - 1, color: CREAM, fontSize: 11, fontFace: "Calibri" } })),
    { x: 0.8, y: 2.05, w: 3.9, h: 2.8, paraSpaceAfter: 4 }
  );

  // Right: Hook categories
  s8.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.4, w: 4.3, h: 3.7, fill: { color: DARK_ALT } });
  const iconLight = await iconToBase64Png(FaLightbulb, "#48BB78");
  s8.addImage({ data: iconLight, x: 5.4, y: 1.55, w: 0.3, h: 0.3 });
  s8.addText("50 Hooks — 5 Kategorien", {
    x: 5.8, y: 1.55, w: 3.5, h: 0.35,
    fontSize: 15, fontFace: "Calibri", color: ACCENT_GREEN, bold: true, margin: 0
  });

  const hookCats = [
    { cat: "Neugier", ex: "Das ging anders aus als geplant\u2026", count: "10" },
    { cat: "Mehrwert", ex: "Mach das NICHT nach deinem Tattoo\u2026", count: "10" },
    { cat: "Interaktion", ex: "W\u00FCrdest du das tragen?", count: "10" },
    { cat: "Pers\u00F6nlich", ex: "Nach 6 Monaten Pause\u2026", count: "10" },
    { cat: "Wanna Do", ex: "Wer traut sich das?", count: "10" },
  ];

  hookCats.forEach((h, i) => {
    const yPos = 2.1 + i * 0.58;
    s8.addText(h.cat, {
      x: 5.4, y: yPos, w: 1.5, h: 0.25,
      fontSize: 12, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
    });
    s8.addText(h.ex, {
      x: 5.4, y: yPos + 0.25, w: 3.9, h: 0.25,
      fontSize: 10, fontFace: "Calibri", color: GRAY, italic: true, margin: 0
    });
  });

  // Bottom: Story formats
  s8.addText("+ 10 wiederkehrende Story-Formate für tägliche Routine", {
    x: 0.6, y: 5.2, w: 8.8, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: BLUE_LIGHT, align: "center", margin: 0
  });

  // ============================================================
  // SLIDE 9: HASHTAG & SEO
  // ============================================================
  let s9 = pres.addSlide();
  s9.background = { color: DARK };
  s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s9.addText("Hashtag & Instagram SEO", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });

  // Key stat callouts
  const stats = [
    { num: "150", label: "Hashtags\nrecherchiert", color: BLUE_LIGHT },
    { num: "50", label: "Keywords\nidentifiziert", color: ACCENT_GREEN },
    { num: "5", label: "Rotierende\nSets", color: ACCENT_ORANGE },
    { num: "6", label: "Hashtag-\nKategorien", color: "9F7AEA" },
  ];

  stats.forEach((st, i) => {
    const xPos = 0.6 + i * 2.35;
    s9.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 1.2, w: 2.1, h: 1.2, fill: { color: DARK_ALT } });
    s9.addText(st.num, {
      x: xPos, y: 1.25, w: 2.1, h: 0.6,
      fontSize: 36, fontFace: "Georgia", color: st.color, bold: true, align: "center", margin: 0
    });
    s9.addText(st.label, {
      x: xPos, y: 1.85, w: 2.1, h: 0.45,
      fontSize: 11, fontFace: "Calibri", color: GRAY, align: "center", margin: 0
    });
  });

  // SEO Insight box
  s9.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 2.7, w: 8.8, h: 1.0, fill: { color: BLUE }, transparency: 80 });
  const iconBolt2 = await iconToBase64Png(FaBolt, "#ED8936");
  s9.addImage({ data: iconBolt2, x: 0.8, y: 2.85, w: 0.3, h: 0.3 });
  s9.addText("2026: Caption-SEO ist wichtiger als Hashtags", {
    x: 1.2, y: 2.8, w: 8.0, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: ACCENT_ORANGE, bold: true, margin: 0
  });
  s9.addText('Keywords direkt in Captions integrieren statt 30 Hashtags. Nur noch 5-8 gezielte Hashtags pro Post. Anzeigename auf "mv\u00B7inks | Tattoo Hamburg" \u00E4ndern \u2014 gr\u00F6\u00DFter Quick Win.', {
    x: 1.2, y: 3.15, w: 8.0, h: 0.45,
    fontSize: 12, fontFace: "Calibri", color: CREAM, margin: 0
  });

  // 5 Sets overview
  s9.addText("5 Hashtag-Sets (rotierend)", {
    x: 0.6, y: 3.95, w: 8.8, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
  });

  const sets = [
    { name: "Mandala / Geometry", tags: "#mandalatattoo #geometrictattoo #sacredgeometry..." },
    { name: "Blackwork / Abstract", tags: "#blackworktattoo #darkartists #btattooing..." },
    { name: "Realistic / Floral", tags: "#realistictattoo #floraltattoo #botanicaltattoo..." },
    { name: "Lokal Hamburg", tags: "#tattoohamburg #tattookuenstlerin #tattooniedersachsen..." },
    { name: "Behind the Scenes", tags: "#tattooartist #studiolife #behindthescenes..." },
  ];

  sets.forEach((set, i) => {
    const yPos = 4.4 + i * 0.24;
    s9.addText(set.name, {
      x: 0.6, y: yPos, w: 2.2, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: BLUE_LIGHT, bold: true, margin: 0
    });
    s9.addText(set.tags, {
      x: 2.9, y: yPos, w: 6.5, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: GRAY, margin: 0
    });
  });

  // ============================================================
  // SLIDE 10: WACHSTUMS-ROADMAP
  // ============================================================
  let s10 = pres.addSlide();
  s10.background = { color: DARK };
  s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s10.addText("Wachstums-Roadmap", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });
  s10.addText("Realistische Prognose für 6 Monate", {
    x: 0.6, y: 0.85, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: GRAY, margin: 0
  });

  // Month 1-3
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.5, w: 4.2, h: 3.2, fill: { color: DARK_ALT } });
  s10.addText("Monat 1–3: Fundament", {
    x: 0.8, y: 1.6, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: BLUE_LIGHT, bold: true, margin: 0
  });

  const m13 = [
    { kpi: "Reichweite pro Reel", target: "500–2.000", color: BLUE_LIGHT },
    { kpi: "Engagement Rate", target: "4–7%", color: ACCENT_GREEN },
    { kpi: "Neue Follower/Woche", target: "30–60", color: ACCENT_ORANGE },
    { kpi: "Buchungsanfragen/Woche", target: "2–5", color: ACCENT_RED },
    { kpi: "Story Views", target: "100–300", color: "9F7AEA" },
  ];

  m13.forEach((k, i) => {
    const yPos = 2.15 + i * 0.48;
    s10.addText(k.kpi, {
      x: 0.8, y: yPos, w: 2.5, h: 0.22,
      fontSize: 11, fontFace: "Calibri", color: CREAM, margin: 0
    });
    s10.addText(k.target, {
      x: 3.4, y: yPos, w: 1.2, h: 0.22,
      fontSize: 12, fontFace: "Calibri", color: k.color, bold: true, align: "right", margin: 0
    });
    if (i < m13.length - 1) {
      s10.addShape(pres.shapes.LINE, { x: 0.8, y: yPos + 0.35, w: 3.8, h: 0, line: { color: GRAY_DARK, width: 0.5 } });
    }
  });

  // Month 4-6
  s10.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.5, w: 4.2, h: 3.2, fill: { color: DARK_ALT } });
  s10.addText("Monat 4–6: Wachstum", {
    x: 5.4, y: 1.6, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: ACCENT_GREEN, bold: true, margin: 0
  });

  const m46 = [
    { kpi: "Reichweite pro Reel", target: "2.000–10.000", color: BLUE_LIGHT },
    { kpi: "Engagement Rate", target: "5–8%", color: ACCENT_GREEN },
    { kpi: "Neue Follower/Woche", target: "60–150", color: ACCENT_ORANGE },
    { kpi: "Buchungsanfragen/Woche", target: "5–15", color: ACCENT_RED },
    { kpi: "Story Views", target: "300–800", color: "9F7AEA" },
  ];

  m46.forEach((k, i) => {
    const yPos = 2.15 + i * 0.48;
    s10.addText(k.kpi, {
      x: 5.4, y: yPos, w: 2.5, h: 0.22,
      fontSize: 11, fontFace: "Calibri", color: CREAM, margin: 0
    });
    s10.addText(k.target, {
      x: 8.0, y: yPos, w: 1.2, h: 0.22,
      fontSize: 12, fontFace: "Calibri", color: k.color, bold: true, align: "right", margin: 0
    });
    if (i < m46.length - 1) {
      s10.addShape(pres.shapes.LINE, { x: 5.4, y: yPos + 0.35, w: 3.8, h: 0, line: { color: GRAY_DARK, width: 0.5 } });
    }
  });

  // Bottom: follower prognosis
  s10.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.9, w: 8.8, h: 0.55, fill: { color: BLUE }, transparency: 75 });
  const iconRocket = await iconToBase64Png(FaRocket, "#48BB78");
  s10.addImage({ data: iconRocket, x: 1.5, y: 4.98, w: 0.3, h: 0.3 });
  s10.addText("Prognose: +1.000–1.500 neue Follower in 6 Monaten bei konsequenter Umsetzung", {
    x: 2.0, y: 4.95, w: 7.0, h: 0.45,
    fontSize: 14, fontFace: "Calibri", color: CREAM, bold: true, margin: 0, valign: "middle"
  });

  // ============================================================
  // SLIDE 11: PROFIL-OPTIMIERUNG
  // ============================================================
  let s11 = pres.addSlide();
  s11.background = { color: DARK };
  s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s11.addText("Profil-Optimierung", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });

  // Bio
  s11.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.2, w: 4.2, h: 2.8, fill: { color: DARK_ALT } });
  const iconMobile = await iconToBase64Png(FaMobileAlt, "#5081B8");
  s11.addImage({ data: iconMobile, x: 0.8, y: 1.35, w: 0.3, h: 0.3 });
  s11.addText("Optimierte Bio", {
    x: 1.2, y: 1.35, w: 3.4, h: 0.35,
    fontSize: 15, fontFace: "Calibri", color: BLUE_LIGHT, bold: true, margin: 0
  });
  s11.addText([
    { text: "Anzeigename:", options: { bold: true, color: CREAM, fontSize: 12, breakLine: true } },
    { text: "mv·inks | Tattoo Hamburg", options: { color: ACCENT_GREEN, fontSize: 12, breakLine: true } },
    { text: "", options: { fontSize: 6, breakLine: true } },
    { text: "Bio-Text:", options: { bold: true, color: CREAM, fontSize: 12, breakLine: true } },
    { text: "Tattoo Artist | Custom Only", options: { color: GRAY, fontSize: 11, breakLine: true } },
    { text: "Mandala · Geometry · Blackwork", options: { color: GRAY, fontSize: 11, breakLine: true } },
    { text: "Heeslingen & Hamburg", options: { color: GRAY, fontSize: 11, breakLine: true } },
    { text: "Books open — Termine anfragen", options: { color: GRAY, fontSize: 11, breakLine: true } },
    { text: "mvinks.de/anfrage", options: { color: BLUE_LIGHT, fontSize: 11 } },
  ], { x: 0.8, y: 1.85, w: 3.8, h: 2.0 });

  // Highlights
  s11.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.2, w: 4.2, h: 2.8, fill: { color: DARK_ALT } });
  const iconStar = await iconToBase64Png(FaStar, "#ED8936");
  s11.addImage({ data: iconStar, x: 5.4, y: 1.35, w: 0.3, h: 0.3 });
  s11.addText("Story-Highlights", {
    x: 5.8, y: 1.35, w: 3.4, h: 0.35,
    fontSize: 15, fontFace: "Calibri", color: ACCENT_ORANGE, bold: true, margin: 0
  });

  const highlights = [
    { name: "PORTFOLIO", desc: "Beste Arbeiten" },
    { name: "WANNA DOS", desc: "Verfügbare Designs" },
    { name: "BUCHEN", desc: "Buchungsanleitung" },
    { name: "PFLEGE", desc: "Aftercare Guide" },
    { name: "FAQ", desc: "Häufige Fragen" },
    { name: "STUDIO", desc: "Heeslingen & Hamburg" },
    { name: "REVIEWS", desc: "Kundenstimmen" },
    { name: "ABOUT ME", desc: "Über Mavie" },
  ];

  highlights.forEach((h, i) => {
    const yPos = 1.85 + i * 0.26;
    s11.addText(h.name, {
      x: 5.4, y: yPos, w: 1.5, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
    });
    s11.addText(h.desc, {
      x: 7.0, y: yPos, w: 2.2, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: GRAY, margin: 0
    });
  });

  // Engagement strategy bottom
  s11.addText("Tägliche Routine: 30 Minuten Community-Engagement", {
    x: 0.6, y: 4.3, w: 8.8, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
  });

  const routine = [
    { time: "5 Min", task: "Follower-Storys anschauen & reagieren" },
    { time: "15 Min", task: "10-15 sinnvolle Kommentare bei relevanten Accounts" },
    { time: "10 Min", task: "DMs beantworten, Anfragen weiterleiten" },
  ];

  routine.forEach((r, i) => {
    const xPos = 0.6 + i * 3.1;
    s11.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 4.75, w: 2.8, h: 0.65, fill: { color: DARK_ALT } });
    s11.addText(r.time, {
      x: xPos + 0.1, y: 4.78, w: 2.6, h: 0.25,
      fontSize: 14, fontFace: "Calibri", color: BLUE_LIGHT, bold: true, margin: 0
    });
    s11.addText(r.task, {
      x: xPos + 0.1, y: 5.02, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Calibri", color: CREAM, margin: 0
    });
  });

  // ============================================================
  // SLIDE 12: NÄCHSTE SCHRITTE
  // ============================================================
  let s12 = pres.addSlide();
  s12.background = { color: DARK };
  s12.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s12.addText("Nächste Schritte", {
    x: 0.6, y: 0.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: CREAM, bold: true, margin: 0
  });
  s12.addText("Was jetzt sofort passieren muss", {
    x: 0.6, y: 0.85, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: GRAY, margin: 0
  });

  const steps = [
    { prio: "SOFORT", title: "Profil optimieren", desc: 'Anzeigename auf "mv\u00B7inks | Tattoo Hamburg" \u00E4ndern. Bio updaten. Profilbild pr\u00FCfen.', color: ACCENT_RED },
    { prio: "SOFORT", title: "Highlights anlegen", desc: "8 Highlight-Cover erstellen: Portfolio, Wanna Dos, Buchen, Pflege, FAQ, Studio, Reviews, About Me", color: ACCENT_RED },
    { prio: "DIESE WOCHE", title: "Teaser-Storys starten", desc: 'Vor dem ersten Post: Story-Countdown, "Ich bin zur\u00FCck"-Teaser, Frage-Sticker', color: ACCENT_ORANGE },
    { prio: "24. MÄRZ", title: "Comeback-Reel posten", desc: "Erstes Reel nach dem Skript. 19:00 Uhr. Sofort auf alle Kommentare antworten.", color: BLUE_LIGHT },
    { prio: "LAUFEND", title: "Content-Kalender abarbeiten", desc: "4 Wochen durchziehen. Konsistenz ist wichtiger als Perfektion.", color: ACCENT_GREEN },
    { prio: "LAUFEND", title: "30 Min/Tag Community-Arbeit", desc: "Kommentieren, DMs beantworten, bei anderen Accounts interagieren.", color: ACCENT_GREEN },
  ];

  steps.forEach((step, i) => {
    const yPos = 1.4 + i * 0.67;

    // Priority badge
    s12.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yPos + 0.04, w: 1.2, h: 0.3, fill: { color: step.color }, transparency: 20 });
    s12.addText(step.prio, {
      x: 0.6, y: yPos + 0.02, w: 1.2, h: 0.35,
      fontSize: 9, fontFace: "Calibri", color: step.color, bold: true, align: "center", margin: 0, valign: "middle"
    });

    s12.addText(step.title, {
      x: 2.0, y: yPos, w: 3.0, h: 0.3,
      fontSize: 14, fontFace: "Calibri", color: CREAM, bold: true, margin: 0
    });
    s12.addText(step.desc, {
      x: 2.0, y: yPos + 0.3, w: 7.4, h: 0.3,
      fontSize: 11, fontFace: "Calibri", color: GRAY, margin: 0
    });

    if (i < steps.length - 1) {
      s12.addShape(pres.shapes.LINE, { x: 0.6, y: yPos + 0.63, w: 8.8, h: 0, line: { color: GRAY_DARK, width: 0.3 } });
    }
  });

  // ============================================================
  // SLIDE 13: CLOSING
  // ============================================================
  let s13 = pres.addSlide();
  s13.background = { color: DARK };
  s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: BLUE }, transparency: 90 });
  s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: BLUE } });

  s13.addText("mv·inks", {
    x: 0.6, y: 1.0, w: 8.8, h: 1.0,
    fontSize: 48, fontFace: "Georgia", color: CREAM, bold: true, align: "center", margin: 0
  });

  s13.addText("Alles steht bereit.", {
    x: 0.6, y: 2.0, w: 8.8, h: 0.6,
    fontSize: 24, fontFace: "Calibri", color: BLUE_LIGHT, align: "center", margin: 0
  });

  s13.addText("5 Dokumente  ·  16 Captions  ·  8 Reel-Skripte  ·  50 Hooks  ·  150 Hashtags", {
    x: 0.6, y: 2.8, w: 8.8, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: GRAY, align: "center", margin: 0
  });

  s13.addShape(pres.shapes.LINE, { x: 3.5, y: 3.5, w: 3, h: 0, line: { color: BLUE_LIGHT, width: 1 } });

  s13.addText("Start: 24. März 2026  ·  Konsistenz schlägt Perfektion.", {
    x: 0.6, y: 3.8, w: 8.8, h: 0.5,
    fontSize: 16, fontFace: "Calibri", color: CREAM, align: "center", margin: 0
  });

  s13.addText("@mv.inks  ·  mvinks.de  ·  Mavie Sommerfeld", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: GRAY, align: "center", margin: 0
  });

  // Write the file
  await pres.writeFile({ fileName: "/Users/idris/Desktop/mvinks/mvinks-instagram-strategie.pptx" });
  console.log("Presentation saved: mvinks-instagram-strategie.pptx");
}

buildPresentation().catch(err => { console.error(err); process.exit(1); });
