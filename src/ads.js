function showAd(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');

        // Accessibility: title from aria-label or data-title
        const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
        iframe.setAttribute('title', label || `${containerId.replace(/-/g, ' ')} content`);

        container.appendChild(iframe);

        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
            <html>
            <head><style>body { margin: 0; }</style></head>
            <body>${adHtml}</body>
            </html>
        `);
        iframeDoc.close();
    }
}

function loadAds() {
    const screenWidth = window.innerWidth;

    // Helper for top ads
    const loadTopAd = () => {
        const top = document.getElementById('top-ad-container');
        if (!top) return;

        if (screenWidth >= 728) {
            top.style.maxWidth = '728px';
            top.style.height = '90px';
            showAd('top-ad-container', getAdScript('624a97a6290d488d2c37917256d06a67', 728, 90));
        } else if (screenWidth >= 468) {
            top.style.maxWidth = '468px';
            top.style.height = '60px';
            showAd('top-ad-container', getAdScript('fbbeaac58499d5ee65a6aa8c6a9810a4', 468, 60));
        } else {
            top.style.maxWidth = '320px';
            top.style.height = '50px';
            showAd('top-ad-container', getAdScript('01229d661b91222d4120ca2e6c5c14f8', 320, 50));
        }
    };

    // Helper for bottom ads
    const loadBottomAd = () => {
        const bottom = document.getElementById('bottom-ad-container');
        if (!bottom) return;

        if (screenWidth >= 468) {
            bottom.style.maxWidth = '468px';
            bottom.style.height = '60px';
            showAd('bottom-ad-container', getAdScript('fbbeaac58499d5ee65a6aa8c6a9810a4', 468, 60));
        } else {
            bottom.style.maxWidth = '320px';
            bottom.style.height = '50px';
            showAd('bottom-ad-container', getAdScript('01229d661b91222d4120ca2e6c5c14f8', 320, 50));
        }
    };

    // Sidebar ads (static)
    const sidebarAdHtml = getAdScript('723938310f9d6a9b6647d12a3ddbd205', 160, 600);
    ['sidebar-ad-container-1', 'sidebar-ad-container-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.width = '160px';
            el.style.height = '600px';
            showAd(id, sidebarAdHtml);
        }
    });

    loadTopAd();
    loadBottomAd();
}

// Helper to create ad HTML safely
function getAdScript(key, width, height) {
    return `
        <script type="text/javascript">
            atOptions = {
                'key': '${key}',
                'format': 'iframe',
                'height': ${height},
                'width': ${width},
                'params': {}
            };
        <\/script>
        <script type="text/javascript" src="//www.highperformanceformat.com/${key}/invoke.js"><\/script>
    `;
}

// Resize optimization
let currentAdCategory = null;
let resizeTimeout;

function getAdCategory(width) {
    if (width >= 728) return 'desktop';
    if (width >= 468) return 'tablet';
    return 'mobile';
}

function optimizedLoadAds() {
    const category = getAdCategory(window.innerWidth);
    if (category !== currentAdCategory) {
        currentAdCategory = category;
        loadAds();
    }
}

window.addEventListener('load', () => {
    currentAdCategory = getAdCategory(window.innerWidth);
    loadAds();
});

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(optimizedLoadAds, 300);
});
