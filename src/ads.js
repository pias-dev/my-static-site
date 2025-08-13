function showAd(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ''; // Clear previous ad

        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');

        // Accessibility title
        const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
        iframe.setAttribute('title', label || `${containerId.replace(/-/g, ' ')} content`);

        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<html><head><style>body{margin:0;}</style></head><body>' + adHtml + '</body></html>');
        iframeDoc.close();
    }
}

function loadAds() {
    const screenWidth = window.innerWidth;

    // Top ad
    if (screenWidth >= 728) {
        showAd('top-ad-container', getAdScript('624a97a6290d488d2c37917256d06a67', 728, 90));
    } else if (screenWidth >= 468) {
        showAd('top-ad-container', getAdScript('fbbeaac58499d5ee65a6aa8c6a9810a4', 468, 60));
    } else {
        showAd('top-ad-container', getAdScript('01229d661b91222d4120ca2e6c5c14f8', 320, 50));
    }

    // Bottom ad
    if (screenWidth >= 468) {
        showAd('bottom-ad-container', getAdScript('fbbeaac58499d5ee65a6aa8c6a9810a4', 468, 60));
    } else {
        showAd('bottom-ad-container', getAdScript('01229d661b91222d4120ca2e6c5c14f8', 320, 50));
    }

    // Sidebars
    ['sidebar-ad-container-1','sidebar-ad-container-2','sidebar-ad-container-3','sidebar-ad-container-4']
    .forEach(id => showAdIfExists(id, '723938310f9d6a9b6647d12a3ddbd205', 160, 600));
}

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

function showAdIfExists(containerId, key, width, height) {
    const container = document.getElementById(containerId);
    if (container) {
        container.style.width = width + 'px';
        container.style.height = height + 'px';
        showAd(containerId, getAdScript(key, width, height));
    }
}

window.addEventListener('load', loadAds);
window.addEventListener('resize', loadAds);
