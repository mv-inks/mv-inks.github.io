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

  /* ---------- Details-Panel umschalten ---------- */
  function toggleDetails() {
    var panel = document.getElementById('cc-details');
    if (!panel) return;
    var isVisible = panel.style.maxHeight && panel.style.maxHeight !== '0px';
    if (isVisible) {
      panel.style.maxHeight = '0px';
      panel.style.opacity = '0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.opacity = '1';
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
    var privacyLabel = isEnPage ? 'Privacy Policy' : 'Datenschutzerkl\u00e4rung';

    var titleText = isEnPage
      ? 'Manage Cookie Consent'
      : 'Cookie-Einwilligung verwalten';

    var textMain = isEnPage
      ? 'We and selected third parties use cookies or similar technologies for technical purposes and \u2013 with your consent \u2013 for other purposes, as described in our <a href="' + privacyHref + '" class="cc-link">' + privacyLabel + '</a>.'
      : 'Wir und ausgew\u00e4hlte Dritte setzen Cookies oder \u00e4hnliche Technologien f\u00fcr technische Zwecke ein und \u2013 mit deiner Einwilligung \u2013 f\u00fcr andere Zwecke, wie in unserer <a href="' + privacyHref + '" class="cc-link">' + privacyLabel + '</a> beschrieben.';

    var textSub = isEnPage
      ? 'Use the \u201cAccept\u201d button to consent to the use of such technologies. Use the \u201cDecline\u201d button to continue without consenting.'
      : 'Verwende den \u201eZustimmen\u201c-Button, um dem Einsatz solcher Technologien zuzustimmen. Verwende den \u201eAblehnen\u201c-Button, um fortzufahren ohne zuzustimmen.';

    var labelAccept = isEnPage ? 'Accept' : 'Zustimmen';
    var labelDecline = isEnPage ? 'Decline' : 'Ablehnen';
    var labelDetails = isEnPage ? 'Show details' : 'Einstellungen anzeigen';

    /* Details-Panel Inhalte */
    var detailEssentialTitle = isEnPage ? 'Essential' : 'Notwendig';
    var detailEssentialDesc = isEnPage
      ? 'Required for the website to function properly. Cannot be disabled.'
      : 'Erforderlich f\u00fcr die Grundfunktion der Website. Kann nicht deaktiviert werden.';
    var detailAnalyticsTitle = isEnPage ? 'Analytics' : 'Analyse';
    var detailAnalyticsDesc = isEnPage
      ? 'Help us understand how visitors use our website (Google Analytics).'
      : 'Helfen uns zu verstehen, wie Besucher unsere Website nutzen (Google Analytics).';

    var banner = document.createElement('div');
    banner.id = 'mvinks-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', titleText);
    banner.innerHTML =
      '<div class="cc-inner">' +
        '<h3 class="cc-title">' + titleText + '</h3>' +
        '<p class="cc-text">' + textMain + '</p>' +
        '<p class="cc-text cc-text--sub">' + textSub + '</p>' +
        '<div class="cc-buttons">' +
          '<button id="cc-accept" class="cc-btn cc-btn--primary">' + labelAccept + '</button>' +
          '<button id="cc-decline" class="cc-btn cc-btn--primary">' + labelDecline + '</button>' +
        '</div>' +
        '<button id="cc-details-toggle" class="cc-btn cc-btn--tertiary">' + labelDetails + '</button>' +
        '<div id="cc-details" class="cc-details">' +
          '<div class="cc-detail-row">' +
            '<div class="cc-detail-info">' +
              '<strong>' + detailEssentialTitle + '</strong>' +
              '<span>' + detailEssentialDesc + '</span>' +
            '</div>' +
            '<span class="cc-badge cc-badge--on">' + (isEnPage ? 'Always on' : 'Immer aktiv') + '</span>' +
          '</div>' +
          '<div class="cc-detail-row">' +
            '<div class="cc-detail-info">' +
              '<strong>' + detailAnalyticsTitle + '</strong>' +
              '<span>' + detailAnalyticsDesc + '</span>' +
            '</div>' +
            '<span class="cc-badge">' + (isEnPage ? 'Requires consent' : 'Einwilligung') + '</span>' +
          '</div>' +
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
        'max-width:680px;margin:0 auto;',
        'background:rgba(13,17,23,.95);',
        'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);',
        'border:1px solid rgba(74,158,173,.2);',
        'border-radius:14px;',
        'padding:1.5rem 1.75rem;',
        'display:flex;flex-direction:column;gap:.6rem;',
        'box-shadow:0 -4px 32px rgba(0,0,0,.55);',
      '}',
      '.cc-title{',
        'margin:0 0 .25rem;font-size:1.1rem;font-weight:700;',
        'color:#f5f0e8;font-family:inherit;text-align:center;',
      '}',
      '.cc-text{',
        'margin:0;',
        'font-size:.875rem;line-height:1.6;',
        'color:rgba(245,240,232,.8);',
        'font-family:inherit;text-align:center;',
      '}',
      '.cc-text--sub{',
        'margin-top:.25rem;',
      '}',
      '.cc-link{color:#4a9ead;text-decoration:underline;text-underline-offset:2px;}',
      '.cc-link:hover{color:#6bbccc;}',
      '.cc-buttons{',
        'display:flex;gap:.75rem;margin-top:.5rem;',
      '}',
      '.cc-btn{',
        'cursor:pointer;border:none;border-radius:8px;',
        'padding:.7rem 1.25rem;font-size:.9rem;font-weight:600;',
        'font-family:inherit;transition:background .2s,color .2s,transform .1s;',
        'white-space:nowrap;',
      '}',
      '.cc-btn:active{transform:scale(.97);}',
      '.cc-btn--primary{',
        'flex:1;text-align:center;',
        'background:rgba(245,240,232,.1);',
        'color:#f5f0e8;',
        'border:1px solid rgba(245,240,232,.2);',
      '}',
      '.cc-btn--primary:hover{background:rgba(245,240,232,.18);}',
      '.cc-btn--tertiary{',
        'width:100%;text-align:center;',
        'background:rgba(245,240,232,.06);',
        'color:rgba(245,240,232,.6);',
        'font-size:.825rem;font-weight:500;',
        'border:1px solid rgba(245,240,232,.1);',
      '}',
      '.cc-btn--tertiary:hover{background:rgba(245,240,232,.12);color:#f5f0e8;}',
      '.cc-details{',
        'max-height:0;opacity:0;overflow:hidden;',
        'transition:max-height .3s ease,opacity .3s ease;',
      '}',
      '.cc-detail-row{',
        'display:flex;justify-content:space-between;align-items:center;',
        'padding:.65rem 0;',
        'border-bottom:1px solid rgba(245,240,232,.08);',
      '}',
      '.cc-detail-row:last-child{border-bottom:none;}',
      '.cc-detail-info{',
        'display:flex;flex-direction:column;gap:.15rem;',
      '}',
      '.cc-detail-info strong{',
        'font-size:.85rem;color:#f5f0e8;',
      '}',
      '.cc-detail-info span{',
        'font-size:.75rem;color:rgba(245,240,232,.55);',
      '}',
      '.cc-badge{',
        'font-size:.7rem;padding:.2rem .5rem;border-radius:4px;',
        'background:rgba(245,240,232,.08);color:rgba(245,240,232,.5);',
        'white-space:nowrap;flex-shrink:0;margin-left:.75rem;',
      '}',
      '.cc-badge--on{',
        'background:rgba(74,158,173,.15);color:#4a9ead;',
      '}',
      '@media(max-width:520px){',
        '.cc-inner{padding:1.25rem 1rem;}',
        '.cc-buttons{flex-direction:column;}',
        '.cc-btn--primary{flex:none;}',
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
    document.getElementById('cc-details-toggle').addEventListener('click', toggleDetails);
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
