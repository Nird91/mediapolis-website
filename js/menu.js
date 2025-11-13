// Toggle the mobile navigation menu
(function(){
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    if(!toggle || !nav) return;

    function openMenu(){
        nav.classList.add('open');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
        toggle.setAttribute('aria-label', 'Chiudi menu');
        const label = toggle.querySelector('.menu-label');
        if(label) label.textContent = 'Chiudi';
    }

    function closeMenu(){
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-label', 'Apri menu');
        const label = toggle.querySelector('.menu-label');
        if(label) label.textContent = 'Menu';
    }

    toggle.addEventListener('click', function(e){
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        if(expanded) closeMenu(); else openMenu();
    });

    // Close when clicking outside on mobile
    document.addEventListener('click', function(e){
        if(!nav.classList.contains('open')) return;
        const target = e.target;
        if(target === nav || nav.contains(target) || target === toggle || toggle.contains(target)) return;
        closeMenu();
    });

    // Close on ESC
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
    });
})();
