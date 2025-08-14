// Config for all ad units
const adConfig = [
    // Top ads
    {
        ids: ["top-ad-container", "top-ad-container-2", "top-ad-container-3"],
        sizes: [
            { minWidth: 728, key: "624a97a6290d488d2c37917256d06a67", w: 728, h: 90 },
            { minWidth: 468, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 468, h: 60 },
            { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 320, h: 50 }
        ]
    },
    // Bottom ads
    {
        ids: ["bottom-ad-container", "bottom-ad-container-2"],
        sizes: [
            { minWidth: 468, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 468, h: 60 },
            { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 320, h: 50 }
        ]
    },
    // Sidebar ads
    {
        Array.from({ length: 4 }, (_, i) => `sidebar-ad-container-${i + 1}`)
        .forEach(id => showAdIfExists(id, '723938310f9d6a9b6647d12a3ddbd205', w: 160, h: 600));

    },
    // NativeBanner ad
    {
        ids: ["nativebanner"],
        external: true,
        scriptSrc: "//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js",
        w: 300,
        h: 250
    },
    // Socialbar ad
    {
        ids: ["socialbar"],
        external: true,
        scriptSrc: "//pl27396127.profitableratecpm.com/24/92/2d/24922d458c60e04fa0ccc2c1f9f70062.js",
        w: 300,
        h: 250
    }
];

// Core functions
function showIframeAd(containerId, adHtml, width, height) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    container.style.width = width + 'px';
    container.style.height = height + 'px';

    const iframe = document.createElement('iframe');
    Object.assign(iframe.style, { width: width + 'px', height: height + 'px', border: '0' });
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');

    container.appendChild(iframe);
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write('<html><body style="margin:0">' + adHtml + '</body></html>');
    doc.close();
}

function getAdScript(key, width, height) {
    return `
        <script type="text/javascript">
            atOptions = { 'key': '${key}', 'format': 'iframe', 'height': ${height}, 'width': ${width}, 'params': {} };
        <\/script>
        <script src="//www.highperformanceformat.com/${key}/invoke.js"><\/script>
    `;
}

function loadExternalAd(containerId, scriptSrc, width, height) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptSrc;
    document.body.appendChild(script);
}

// Main loader
function loadAds() {
    const screenWidth = window.innerWidth;

    adConfig.forEach(config => {
        config.ids.forEach(id => {
            if (config.external) {
                loadExternalAd(id, config.scriptSrc, config.w, config.h);
            } else {
                for (let size of config.sizes) {
                    if (screenWidth >= size.minWidth) {
                        showIframeAd(id, getAdScript(size.key, size.w, size.h), size.w, size.h);
                        break;
                    }
                }
            }
        });
    });
}

window.addEventListener('load', loadAds);
window.addEventListener('resize', loadAds);
