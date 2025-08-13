// 1️⃣ CONFIG — just edit here to add/remove ads
const adConfig = {
    top: [
        { id: "top-ad-container" },
        { id: "top-ad-container-2" },
        { id: "top-ad-container-3" }
    ],
    bottom: [
        { id: "bottom-ad-container" },
        { id: "bottom-ad-container-2" }
    ],
    sidebar: [
        { id: "sidebar-ad-container-1" },
        { id: "sidebar-ad-container-2" },
        { id: "sidebar-ad-container-3" },
        { id: "sidebar-ad-container-4" }
    ]
};

// Ad size mapping based on screen width
const adSizes = {
    top: [
        { minWidth: 728, key: '624a97a6290d488d2c37917256d06a67', width: 728, height: 90 },
        { minWidth: 468, key: 'fbbeaac58499d5ee65a6aa8c6a9810a4', width: 468, height: 60 },
        { minWidth: 0,   key: '01229d661b91222d4120ca2e6c5c14f8', width: 320, height: 50 }
    ],
    bottom: [
        { minWidth: 468, key: 'fbbeaac58499d5ee65a6aa8c6a9810a4', width: 468, height: 60 },
        { minWidth: 0,   key: '01229d661b91222d4120ca2e6c5c14f8', width: 320, height: 50 }
    ],
    sidebar: [
        { minWidth: 0,   key: '723938310f9d6a9b6647d12a3ddbd205', width: 160, height: 600 }
    ]
};

// 2️⃣ Core ad rendering
function showAd(containerId, adHtml, width, height) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
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
        <script type="text/javascript" src="//www.highperformanceformat.com/${key}/invoke.js"><\/script>
    `;
}

function showAdsForPosition(position, configList, screenWidth) {
    const sizes = adSizes[position];
    const size = sizes.find(s => screenWidth >= s.minWidth) || sizes[sizes.length - 1];
    configList.forEach(ad => {
        showAd(ad.id, getAdScript(size.key, size.width, size.height), size.width, size.height);
    });
}

// 3️⃣ Load ads dynamically
function loadAds() {
    const screenWidth = window.innerWidth;
    showAdsForPosition("top", adConfig.top, screenWidth);
    showAdsForPosition("bottom", adConfig.bottom, screenWidth);
    showAdsForPosition("sidebar", adConfig.sidebar, screenWidth);
}

window.addEventListener('load', loadAds);
window.addEventListener('resize', loadAds);
