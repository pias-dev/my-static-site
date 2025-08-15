// Config for all ad units
const adConfig = [
    // Top ads
    {
        ids: [
            { id: "top-ad-container", label: "Top Advertisement" },
            { id: "top-ad-container-2", label: "Top Advertisement 2" }
        ],
        sizes: [
            { minWidth: 728, key: "624a97a6290d488d2c37917256d06a67", w: 728, h: 90 },
            { minWidth: 468, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 468, h: 60 },
            { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 320, h: 50 }
        ]
    },
    // Bottom ads
    {
        ids: [
            { id: "bottom-ad-container", label: "Bottom Advertisement" },
            { id: "bottom-ad-container-2", label: "Bottom Advertisement 2" },
            { id: "bottom-ad-container-3", label: "Bottom Advertisement 3" }
        ],
        sizes: [
            { minWidth: 468, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 468, h: 60 },
            { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 320, h: 50 }
        ]
    },
    // Sidebar ads
    {
        ids: [
            { id: "sidebar-ad-container-1", label: "Sidebar Advertisement 1" },
            { id: "sidebar-ad-container-2", label: "Sidebar Advertisement 2" },
            { id: "sidebar-ad-container-3", label: "Sidebar Advertisement 3" },
            { id: "sidebar-ad-container-4", label: "Sidebar Advertisement 4" },
            { id: "sidebar-ad-container-5", label: "Sidebar Advertisement 5" },
            { id: "sidebar-ad-container-6", label: "Sidebar Advertisement 6" }
        ],
        sizes: [
            { minWidth: 0, key: "723938310f9d6a9b6647d12a3ddbd205", w: 160, h: 600 }
        ]
    },
    // External ad #1
    {
        ids: [
            { id: "container-849e6610f4501e065f7c0550fff4cc17", label: "Native Banner Advertisement" }
        ],
        external: true,
        scriptSrc: "//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js",
        w: 320,
        h: 50
    },
    // External ad #2
    {
        ids: [
            { id: "container-24922d458c60e04fa0ccc2c1f9f70062", label: "Socialbar Advertisement" }
        ],
        external: true,
        scriptSrc: "//pl27396127.profitableratecpm.com/24/92/2d/24922d458c60e04fa0ccc2c1f9f70062.js",
        w: 320,
        h: 50
    }
];

// Create iframe ads with title and accessible container
function showIframeAd(containerId, containerLabel, adHtml, width, height) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    container.style.width = width + 'px';
    container.style.height = height + 'px';

    // Make container accessible
    container.setAttribute("role", "region");
    container.setAttribute("aria-label", containerLabel);

    const iframe = document.createElement('iframe');
    Object.assign(iframe.style, { width: width + 'px', height: height + 'px', border: '0' });
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', containerLabel);

    container.appendChild(iframe);
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write('<html><body style="margin:0">' + adHtml + '</body></html>');
    doc.close();
}

// Get ad script HTML
function getAdScript(key, width, height) {
    return `
        <script type="text/javascript">
            atOptions = { 'key': '${key}', 'format': 'iframe', 'height': ${height}, 'width': ${width}, 'params': {} };
        <\/script>
        <script src="//www.highperformanceformat.com/${key}/invoke.js"><\/script>
    `;
}

// Load external script ads
function loadExternalAd(containerId, containerLabel, scriptSrc, width, height) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    container.setAttribute("role", "region");
    container.setAttribute("aria-label", containerLabel);

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
        config.ids.forEach(obj => {
            if (config.external) {
                loadExternalAd(obj.id, obj.label, config.scriptSrc, config.w, config.h);
            } else {
                for (let size of config.sizes) {
                    if (screenWidth >= size.minWidth) {
                        showIframeAd(obj.id, obj.label, getAdScript(size.key, size.w, size.h), size.w, size.h);
                        break;
                    }
                }
            }
        });
    });
}

window.addEventListener('load', loadAds);
window.addEventListener('resize', loadAds);
