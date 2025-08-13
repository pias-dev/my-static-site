function showAd(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (container) {
        // Clear previous ad
        container.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');

        // Set accessible title
        const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
        iframe.setAttribute('title', label || `${containerId.replace(/-/g, ' ')} content`);

        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<html><head><style>body{margin:0;}</style></head><body>' + adHtml + '</body></html>');
        iframeDoc.close();
    }
}

function getAdScript(key, format, height, width) {
    return `
        <script type="text/javascript">
            atOptions = {
                'key': '${key}',
                'format': '${format}',
                'height': ${height},
                'width': ${width},
                'params': {}
            };
        <\/script>
        <script type="text/javascript" src="//www.highperformanceformat.com/${key}/invoke.js"><\/script>
    `;
}

function loadAds() {
    const screenWidth = window.innerWidth;

    // Top Ad
    const topAdContainer = document.getElementById('top-ad-container');
    if (topAdContainer) {
        if (screenWidth >= 728) {
            showAd('top-ad-container', getAdScript('624a97a6290d488d2c37917256d06a67', 'iframe', 90, 728));
        } else if (screenWidth >= 468) {
            showAd('top-ad-container', getAdScript('fbbeaac58499d5ee65a6aa8c6a9810a4', 'iframe', 60, 468));
        } else {
            showAd('top-ad-container', getAdScript('01229d661b91222d4120ca2e6c5c14f8', 'iframe', 50, 320));
        }
    }

    // Bottom Ad
    const bottomAdContainer = document.getElementById('bottom-ad-container');
    if (bottomAdContainer) {
        if (screenWidth >= 468) {
            showAd('bottom-ad-container', getAdScript('fbbeaac58499d5ee65a6aa8c6a9810a4', 'iframe', 60, 468));
        } else {
            showAd('bottom-ad-container', getAdScript('01229d661b91222d4120ca2e6c5c14f8', 'iframe', 50, 320));
        }
    }

    // Sidebars (always same)
    const sidebarAdScript = getAdScript('723938310f9d6a9b6647d12a3ddbd205', 'iframe', 600, 160);

    ['sidebar-ad-container-1', 'sidebar-ad-container-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) showAd(id, sidebarAdScript);
    });
}

// Run on load
window.addEventListener('load', loadAds);

// Debounced resize listener
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(loadAds, 300);
});
