// Cookie Banner Management for Mediapolis
(function() {
    'use strict';

    const COOKIE_CONSENT_KEY = 'mediapolis_cookie_consent';
    
    // Check if consent already exists
    function hasConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
    }
    
    // Get consent value
    function getConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
    }
    
    // Set consent
    function setConsent(accepted) {
        localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? 'accepted' : 'rejected');
    }
    
    // Create and show banner
    function showBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <div class="cookie-banner-text">
                    <p>Questo sito utilizza cookie tecnici necessari al funzionamento e, previa accettazione, cookie di terze parti (Google Maps) per la visualizzazione della mappa nella pagina contatti.<br>
                    Puoi accettare o rifiutare i cookie non necessari.<br>
                    <a href="cookie-policy.html">Informativa privacy</a></p>
                </div>
                <div class="cookie-banner-actions">
                    <button id="cookie-accept" class="cookie-btn cookie-accept">Accetta</button>
                    <button id="cookie-reject" class="cookie-btn cookie-reject">Rifiuta</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Add event listeners
        document.getElementById('cookie-accept').addEventListener('click', function() {
            setConsent(true);
            hideBanner();
        });
        
        document.getElementById('cookie-reject').addEventListener('click', function() {
            setConsent(false);
            hideBanner();
        });
    }
    
    // Hide banner
    function hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.add('cookie-banner-hidden');
            setTimeout(() => banner.remove(), 300);
        }
    }
    
    // Initialize on page load
    function init() {
        if (!hasConsent()) {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', showBanner);
            } else {
                showBanner();
            }
        }
    }
    
    // Export functions for external use
    window.MediopolisCookies = {
        hasConsent: hasConsent,
        getConsent: getConsent,
        showBanner: showBanner
    };
    
    // Initialize
    init();
})();
