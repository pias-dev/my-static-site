// CONFIG — how many ads in each section
const adConfig = {
    top: 2,
    bottom: 2,
    sidebar: 4
};

// Ad size mapping per section
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

// Create ad wrappers + containers
function createAdContainers() {
    // TOP wrapper
    const topWrapper = document.createElement("div");
    topWrapper.id = "top-ads-wrapper";
    topWrapper.style.display = "flex";
    topWrapper.style.justifyContent = "center";
    topWrapper.style.gap = "10px";
    topWrapper.style.margin = "10px auto";
    document.body.insertAdjacentElement("afterbegin", topWrapper);

    for (let i = 1; i <= adConfig.top; i++) {
        const div = document.createElement("div");
        div.id = `top-ad-container-${i}`;
        topWrapper.appendChild(div);
    }

    // BOTTOM wrapper
    const bottomWrapper = document.createElement("div");
    bottomWrapper.id = "bottom-ads-wrapper";
    bottomWrapper.style.display = "flex";
    bottomWrapper.style.justifyContent = "center";
    bottomWrapper.style.gap = "10px";
    bottomWrapper.style.margin = "10px auto";
    document.body.insertAdjacentElement("beforeend", bottomWrapper);

    for (let i = 1; i <= adConfig.bottom; i++) {
        const div = document.createElement("div");
        div.id = `bottom-ad-container-${i}`;
        bottomWrapper.appendChild(div);
    }

    // SIDEBAR wrapper
    const sidebarWrapper = document.createElement("div");
    sidebarWrapper.id = "sidebar-wrapper";
    sidebarWrapper.style.display = "flex";
    sidebarWrapper.style.flexDirection = "column";
    sidebarWrapper.style.gap = "10px";
    sidebarWrapper.style.position = "fixed";
    sidebarWrapper.style.right = "0";
    sidebarWrapper.style.top = "50px";
    document.body.appendChild(sidebarWrapper);

    for (let i = 1; i <= adConfig.sidebar; i++) {
        const div = document.createElement("div");
        div.id = `sidebar-ad-container-${i}`;
        sidebarWrapper.appendChild(div);
    }
}

// Render ad into a container
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

        const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
        iframe.setAttribute('title', label || `${containerId.replace(/-/g, ' ')} content`);

        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<html><head><style>body{margin:0;}</style></head><body>' + adHtml + '</body></html>');
        iframeDoc.close();
    }
}

// Generate ad script
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

// Load ads for a given section
function showAdsForPosition(position, count, screenWidth) {
    const sizes = adSizes[position];
    const size = sizes.find(s => screenWidth >= s.minWidth) || sizes[sizes.length - 1];

    for (let i = 1; i <= count; i++) {
        const id = `${position}-ad-container-${i}`;
        showAd(id, getAdScript(size.key, size.width, size.height), size.width, size.height);
    }
}

// Load all ads
function loadAds() {
    const screenWidth = window.innerWidth;
    showAdsForPosition("top", adConfig.top, screenWidth);
    showAdsForPosition("bottom", adConfig.bottom, screenWidth);
    showAdsForPosition("sidebar", adConfig.sidebar, screenWidth);
}

window.addEventListener('load', () => {
    createAdContainers();
    loadAds();
});
window.addEventListener('resize', loadAds);
