/* =========================
   1. Show Ad in Iframe
   ========================= */
function showAd(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ''; // Clear any existing ad

        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');

        const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
        iframe.setAttribute('title', label ? label : `${containerId.replace(/-/g, ' ')} content`);

        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<html><head><style>body { margin: 0; }</style></head><body>' + adHtml + '</body></html>');
        iframeDoc.close();
    }
}

/* =========================
   2. Ad HTML Library
   ========================= */
function getAdHtml(size) {
    const ads = {
        'desktop-top': `
            <script>
                atOptions = {
                    'key': '624a97a6290d488d2c37917256d06a67',
                    'format': 'iframe',
                    'height': 90,
                    'width': 728,
                    'params': {}
                };
            <\/script>
            <script src="//www.highperformanceformat.com/624a97a6290d488d2c37917256d06a67/invoke.js"><\/script>
        `,
        'tablet-top': `
            <script>
                atOptions = {
                    'key': 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                    'format': 'iframe',
                    'height': 60,
                    'width': 468,
                    'params': {}
                };
            <\/script>
            <script src="//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js"><\/script>
        `,
        'mobile-top': `
            <script>
                atOptions = {
                    'key': '01229d661b91222d4120ca2e6c5c14f8',
                    'format': 'iframe',
                    'height': 50,
                    'width': 320,
                    'params': {}
                };
            <\/script>
            <script src="//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js"><\/script>
        `,
        'desktop-bottom': `
            <script>
                atOptions = {
                    'key': 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                    'format': 'iframe',
                    'height': 60,
                    'width': 468,
                    'params': {}
                };
            <\/script>
            <script src="//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js"><\/script>
        `,
        'mobile-bottom': `
            <script>
                atOptions = {
                    'key': '01229d661b91222d4120ca2e6c5c14f8',
                    'format': 'iframe',
                    'height': 50,
                    'width': 320,
                    'params': {}
                };
            <\/script>
            <script src="//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js"><\/script>
        `,
        'sidebar': `
            <script>
                atOptions = {
                    'key': '723938310f9d6a9b6647d12a3ddbd205',
                    'format': 'iframe',
                    'height': 600,
                    'width': 160,
                    'params': {}
                };
            <\/script>
            <script src="//www.highperformanceformat.com/723938310f9d6a9b6647d12a3ddbd205/invoke.js"><\/script>
        `
    };
    return ads[size] || '';
}

/* =========================
   3. Category Detection
   ========================= */
function getAdCategory(width) {
    if (width >= 728) return 'desktop';
    if (width >= 468) return 'tablet';
    return 'mobile';
}

/* =========================
   4. Lazy Load + Resize Optimization
   ========================= */
let currentAdCategory = null;
let resizeTimeout;

function lazyLoadAds() {
    const screenWidth = window.innerWidth;
    const topSize = screenWidth >= 728 ? 'desktop-top' : screenWidth >= 468 ? 'tablet-top' : 'mobile-top';
    const bottomSize = screenWidth >= 468 ? 'desktop-bottom' : 'mobile-bottom';

    const adSlots = [
        { id: 'top-ad-container', size: topSize },
        { id: 'bottom-ad-container', size: bottomSize },
        { id: 'sidebar-ad-container-1', size: 'sidebar' },
        { id: 'sidebar-ad-container-2', size: 'sidebar' }
    ];

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slot = adSlots.find(s => s.id === entry.target.id);
                if (slot) {
                    showAd(slot.id, getAdHtml(slot.size));
                    obs.unobserve(entry.target);
                }
            }
        });
    }, { rootMargin: '200px' });

    adSlots.forEach(slot => {
        const el = document.getElementById(slot.id);
        if (el) observer.observe(el);
    });
}

function optimizedLoadAds() {
    const category = getAdCategory(window.innerWidth);
    if (category !== currentAdCategory) {
        currentAdCategory = category;
        lazyLoadAds();
    }
}

window.addEventListener('load', () => {
    currentAdCategory = getAdCategory(window.innerWidth);
    lazyLoadAds();
});

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(optimizedLoadAds, 300);
});
