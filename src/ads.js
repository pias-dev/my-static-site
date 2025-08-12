// List of ads on the page
const ads = [
    {
        id: "top-ad",       // The HTML element ID where the ad goes
        type: "script",     // "script" or "iframe"
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    },
    {
        id: "side-ad",
        type: "iframe",
        src: "https://example.com/your-ad.html",
        width: 300,
        height: 250
    }
];

// Function to display a single ad
function showAd(ad) {
    const container = document.getElementById(ad.id);
    if (!container) return;

    // Clear old ad content
    container.innerHTML = "";

    if (ad.type === "script") {
        const script = document.createElement("script");
        script.src = ad.src;
        script.async = true;
        container.appendChild(script);
    } 
    else if (ad.type === "iframe") {
        const iframe = document.createElement("iframe");
        iframe.src = ad.src;
        iframe.width = ad.width || "300";
        iframe.height = ad.height || "250";
        iframe.style.border = "0";
        iframe.loading = "lazy";
        container.appendChild(iframe);
    }
}

// Function to load all ads
function loadAds() {
    ads.forEach(showAd);
}

// Detect device size category
function getAdCategory(width) {
    if (width >= 728) return "desktop";
    if (width >= 468) return "tablet";
    return "mobile";
}

let currentAdCategory = null;
let resizeTimeout;

// Optimized load for initial and resize events
function optimizedLoadAds() {
    const category = getAdCategory(window.innerWidth);
    if (category !== currentAdCategory) {
        currentAdCategory = category;
        loadAds();
    }
}

// Load on page start
window.addEventListener("load", () => {
    currentAdCategory = getAdCategory(window.innerWidth);
    loadAds();
});

// Debounced reload on size change
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(optimizedLoadAds, 300);
});
