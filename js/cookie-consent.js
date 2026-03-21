/**
 * Cookie Consent & GA4 Loader – mv-inks.de
 * DSGVO-konform: GA4 wird nur nach expliziter Zustimmung geladen.
 */

(function () {
  var STORAGE_KEY = 'mvinks_cookie_consent';
  var GA_ID = 'G-S3RNJ4ZPYV';

  /* ---------- GA4 laden ---------- */
  function loadGA4() {
    if (window._ga4Loaded) return;
    window._ga4Loaded = true;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  /* ---------- Banner entfernen ---------- */
  function removeBanner() {
    var banner = document.getElementById('mvinks-cookie-banner');
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(20px)';
      setTimeout(function () { banner.remove(); }, 350);
    }
  }

  /* ---------- Consent speichern ---------- */
  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
    removeBanner();
    if (value === 'accepted') loadGA4();
  }

  /* ---------- Banner erstellen ---------- */
  function showBanner() {
    /* Nicht doppelt einfügen */
    if (document.getElementById('mvinks-cookie-banner')) return;

    /* Datenschutz-Link: von en/ aus brauchen wir den richtigen Pfad */
    var isEnPage = window.location.pathname.indexOf('/en/') === 0;
    var privacyHref = isEnPage ? '/en/privacy' : '/datenschutz';
    var privacyLabel = isEnPage ? 'Privacy Policy' : 'Datenschutzerklärung';
    var titleText = isEnPage ? 'Cookie Settings' : 'Cookie-Einstellungen';
    var textMain = isEnPage
      ? 'We use cookies and similar technologies on our website. Some are essential for the site to function, others help us analyse visits and improve your experience. You can find all details in our '
      : 'Wir nutzen Cookies und \u00e4hnliche Technologien auf unserer Website. Einige sind technisch notwendig, andere helfen uns, Besuche auszuwerten und dein Erlebnis zu verbessern. Alle Details findest du in unserer ';
    var labelAccept = isEnPage ? 'Accept all' : 'Alle akzeptieren';
    var labelDecline = isEnPage ? 'Necessary only' : 'Nur notwendige';

    var banner = document.createElement('div');
    banner.id = 'mvinks-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', isEnPage ? 'Cookie consent' : 'Cookie-Einstellungen');
    banner.innerHTML =
      '<div class="cc-inner">' +
        '<h3 class="cc-title">' + titleText + '</h3>' +
        '<p class="cc-text">' + textMain + '<a href="' + privacyHref + '" class="cc-link">' + privacyLabel + '</a>.</p>' +
        '<div class="cc-buttons">' +
          '<button id="cc-decline" class="cc-btn cc-btn--secondary">' + labelDecline + '</button>' +
          '<button id="cc-accept" class="cc-btn cc-btn--primary">' + labelAccept + '</button>' +
        '</div>' +
      '</div>';

    /* Styles direkt einbetten – kein externes CSS nötig */
    var style = document.createElement('style');
    style.textContent = [
      '#mvinks-cookie-banner{',
        'position:fixed;bottom:0;left:0;right:0;z-index:99999;',
        'padding:1rem;',
        'opacity:0;transform:translateY(20px);',
        'transition:opacity .35s ease,transform .35s ease;',
      '}',
      '.cc-inner{',
        'max-width:860px;margin:0 auto;',
        'background:rgba(13,17,23,.92);',
        'backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
        'border:1px solid rgba(74,158,173,.25);',
        'border-radius:12px;',
        'padding:1.25rem 1.5rem;',
        'display:flex;flex-direction:column;gap:.75rem;',
        'box-shadow:0 -4px 32px rgba(0,0,0,.5);',
      '}',
      '.cc-title{',
        'margin:0 0 .5rem;font-size:1rem;font-weight:700;',
        'color:#f5f0e8;font-family:inherit;',
      '}',
      '.cc-text{',
        'flex:1 1 280px;margin:0;',
        'font-size:.875rem;line-height:1.55;',
        'color:rgba(245,240,232,.82);',
        'font-family:inherit;',
      '}',
      '.cc-link{color:#4a9ead;text-decoration:underline;text-underline-offset:2px;}',
      '.cc-link:hover{color:#6bbccc;}',
      '.cc-buttons{display:flex;gap:.75rem;flex-wrap:wrap;}',
      '.cc-btn{',
        'cursor:pointer;border:none;border-radius:8px;',
        'padding:.6rem 1.25rem;font-size:.875rem;font-weight:600;',
        'font-family:inherit;transition:background .2s,color .2s,transform .1s;',
        'white-space:nowrap;',
      '}',
      '.cc-btn:active{transform:scale(.97);}',
      '.cc-btn--primary{background:#4a9ead;color:#0d1117;}',
      '.cc-btn--primary:hover{background:#6bbccc;}',
      '.cc-btn--secondary{',
        'background:rgba(245,240,232,.08);',
        'color:rgba(245,240,232,.75);',
        'border:1px solid rgba(245,240,232,.18);',
      '}',
      '.cc-btn--secondary:hover{background:rgba(245,240,232,.14);color:#f5f0e8;}',
      '@media(max-width:520px){',
        '.cc-inner{padding:1rem;}',
        '.cc-buttons{width:100%;}',
        '.cc-btn{flex:1;text-align:center;}',
      '}'
    ].join('');

    document.head.appendChild(style);
    document.body.appendChild(banner);

    /* Einblenden nach Paint */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.style.opacity = '1';
        banner.style.transform = 'translateY(0)';
      });
    });

    document.getElementById('cc-accept').addEventListener('click', function () {
      setConsent('accepted');
    });
    document.getElementById('cc-decline').addEventListener('click', function () {
      setConsent('declined');
    });
  }

  /* ---------- Initialisierung ---------- */
  function init() {
    var stored;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }

    if (stored === 'accepted') {
      loadGA4();
    } else if (stored === 'declined') {
      /* Nichts laden */
    } else {
      /* Noch keine Entscheidung – Banner zeigen wenn DOM bereit */
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner);
      } else {
        showBanner();
      }
    }
  }

  init();
})();
