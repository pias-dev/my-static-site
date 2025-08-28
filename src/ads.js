// Config for all ad units
const adConfig = [
    // Top ads
    {
        ids: [
            { id: "tads-container-1", label: "Top Advertisement-1" },
            { id: "tads-container-2", label: "Top Advertisement 2" }
        ],
        sizes: [
            { minWidth: 744, key: "624a97a6290d488d2c37917256d06a67", w: 744, h: 106 },
            { minWidth: 484, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 484, h: 76 },
            { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 336, h: 66 }
        ]
    },
    // Bottom ads
    {
        ids: [
            { id: "bottom-ad-container-1", label: "Bottom Advertisement-1" },
            { id: "bottom-ad-container-2", label: "Bottom Advertisement 2" },
            { id: "bottom-ad-container-3", label: "Bottom Advertisement 3" }
        ],
        sizes: [
            { minWidth: 484, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 484, h: 76 },
            { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 336, h: 66 }
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
            { minWidth: 0, key: "723938310f9d6a9b6647d12a3ddbd205", w: 176, h: 616 }
        ]
    },
    // Native Banner ad
    {
        ids: [
            { id: "container-849e6610f4501e065f7c0550fff4cc17", label: "Native Banner Advertisement" }
        ],
        external: true,
        scriptSrc: "//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js",
    },
    // Socialbar ad
    {
        ids: [
            { id: "container-24922d458c60e04fa0ccc2c1f9f70062", label: "Socialbar Advertisement" }
        ],
        external: true,
        scriptSrc: "//pl27396127.profitableratecpm.com/24/92/2d/24922d458c60e04fa0ccc2c1f9f70062.js",
    }
];

// Tracks current ad size category to prevent unnecessary reloads
let currentScreenCategory = null;

// Determine which ad size category applies
function getScreenCategory() {
    const w = window.innerWidth;
    if (w >= 744) return "lg";
    if (w >= 484) return "md";
    return "sm";
}

// Create iframe ads (no document.write)
function showIframeAd(containerId, containerLabel, key, width, height) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    container.setAttribute("role", "region");
    container.setAttribute("aria-label", containerLabel);

    const iframe = document.createElement('iframe');
    Object.assign(iframe.style, { width: width + 'px', height: height + 'px', border: '0' });
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', containerLabel);
    iframe.loading = "lazy"; // improves performance

    container.appendChild(iframe);

    // Safely inject ad script into iframe
    iframe.addEventListener("load", () => {
        const doc = iframe.contentDocument;
        const script1 = doc.createElement("script");
        script1.type = "text/javascript";
        script1.text = `atOptions = { 'key': '${key}', 'format': 'iframe', 'height': ${height}, 'width': ${width}, 'params': {} };`;

        const script2 = doc.createElement("script");
        script2.src = `//www.highperformanceformat.com/${key}/invoke.js`;
        script2.async = true;

        doc.body.appendChild(script1);
        doc.body.appendChild(script2);
    });

    // Trigger load event manually if empty
    iframe.src = "about:blank";
}

// Load external script ads (no fixed size for native/socialbar ads)
function loadExternalAd(containerId, containerLabel, scriptSrc) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Remove fixed sizes → let ad script control size
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.setAttribute("role", "region");
    container.setAttribute("aria-label", containerLabel);

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptSrc;
    container.appendChild(script);
}

// Main loader
function loadAds(force = false) {
    const newCategory = getScreenCategory();
    if (!force && newCategory === currentScreenCategory) {
        return; // Skip reload if same category
    }
    currentScreenCategory = newCategory;

    const screenWidth = window.innerWidth;

    adConfig.forEach(config => {
        config.ids.forEach(obj => {
            if (config.external) {
                loadExternalAd(obj.id, obj.label, config.scriptSrc, config.w, config.h);
            } else {
                for (let size of config.sizes) {
                    if (screenWidth >= size.minWidth) {
                        showIframeAd(obj.id, obj.label, size.key, size.w, size.h);
                        break;
                    }
                }
            }
        });
    });
}

// Debounce resize to avoid constant reload
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => loadAds(false), 250);
});

// Lazy-load ads after page content
window.addEventListener('load', () => {
    setTimeout(() => loadAds(true), 500);
});
