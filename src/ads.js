function showAd(containerId, adHtml, width, height) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ''; // Clear previous ad
        container.style.width = width + 'px';
        container.style.height = height + 'px';

        const iframe = document.createElement('iframe');
        iframe.style.width = width + 'px';
        iframe.style.height = height + 'px';
        iframe.style.border = '0';
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');

        const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
        iframe.setAttribute('title', label || `${containerId.replace(/-/g, ' ')} content`);

        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<html><head><style>body{margin:0;}</style></head><body>' + adHtml + '</body></html>');
        iframeDoc.close();
    }
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
        <script type="text/javascript" src="https://www.highperformanceformat.com/${key}/invoke.js"><\/script>
    `;
}

function showAdIfExists(containerId, key, width, height) {
    const container = document.getElementById(containerId);
    if (container) {
        showAd(containerId, getAdScript(key, width, height), width, height);
    }
}

function loadAds() {
    const screenWidth = window.innerWidth;

    // Multiple top ads
    const topAdIds = ["top-ad-container", "top-ad-container-2"];
    topAdIds.forEach(id => {
        if (screenWidth >= 728) {
            showAdIfExists(id, '624a97a6290d488d2c37917256d06a67', 728, 90);
        } else if (screenWidth >= 468) {
            showAdIfExists(id, 'fbbeaac58499d5ee65a6aa8c6a9810a4', 468, 60);
        } else {
            showAdIfExists(id, '01229d661b91222d4120ca2e6c5c14f8', 320, 50);
        }
    });

    // Multiple bottom ads
    const bottomAdIds = ["bottom-ad-container", "bottom-ad-container-2", "bottom-ad-container-3"];
    bottomAdIds.forEach(id => {
        if (screenWidth >= 468) {
            showAdIfExists(id, 'fbbeaac58499d5ee65a6aa8c6a9810a4', 468, 60);
        } else {
            showAdIfExists(id, '01229d661b91222d4120ca2e6c5c14f8', 320, 50);
        }
    });

    // Sidebars
    Array.from({ length: 6 }, (_, i) => `sidebar-ad-container-${i + 1}`)
        .forEach(id => showAdIfExists(id, '723938310f9d6a9b6647d12a3ddbd205', 160, 600));
}

window.addEventListener('load', loadAds);
window.addEventListener('resize', loadAds);
