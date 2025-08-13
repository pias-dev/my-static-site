function showAd(containerId, atOptions, scriptSrc) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear previous ad
    container.innerHTML = '';

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('marginheight', '0');
    iframe.setAttribute('marginwidth', '0');
    iframe.setAttribute('loading', 'lazy'); // ✅ Lazy loading for better performance

    // Set iframe title
    const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
    iframe.setAttribute('title', label || `${containerId.replace(/-/g, ' ')} content`);

    container.appendChild(iframe);

    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write('<html><head><style>body { margin: 0; }</style></head><body></body></html>');
    iframeDoc.close();

    // Inject atOptions object
    const optionsScript = iframeDoc.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.text = `var atOptions = ${JSON.stringify(atOptions)};`;
    iframeDoc.body.appendChild(optionsScript);

    // Inject external invoke.js (force HTTPS for security and speed)
    const externalScript = iframeDoc.createElement('script');
    externalScript.type = 'text/javascript';
    externalScript.src = scriptSrc.startsWith('//') ? 'https:' + scriptSrc : scriptSrc;
    externalScript.async = true; // ✅ Non-blocking load
    iframeDoc.body.appendChild(externalScript);
}

function getAdCategory(width) {
    if (width >= 728) return 'desktop';
    if (width >= 468) return 'tablet';
    return 'mobile';
}

let currentCategory = null;

function loadAds() {
    const screenWidth = window.innerWidth;
    const newCategory = getAdCategory(screenWidth);

    if (newCategory === currentCategory) return; // ✅ Only reload if category changed
    currentCategory = newCategory;

    // Top ad
    const topAdContainer = document.getElementById('top-ad-container');
    if (topAdContainer) {
        if (screenWidth >= 728) {
            topAdContainer.style.maxWidth = '728px';
            topAdContainer.style.height = '90px';
            showAd('top-ad-container', {
                key: '624a97a6290d488d2c37917256d06a67',
                format: 'iframe',
                height: 90,
                width: 728,
                params: {}
            }, 'https://www.highperformanceformat.com/624a97a6290d488d2c37917256d06a67/invoke.js');
        } else if (screenWidth >= 468) {
            topAdContainer.style.maxWidth = '468px';
            topAdContainer.style.height = '60px';
            showAd('top-ad-container', {
                key: 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                format: 'iframe',
                height: 60,
                width: 468,
                params: {}
            }, 'https://www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js');
        } else {
            topAdContainer.style.maxWidth = '320px';
            topAdContainer.style.height = '50px';
            showAd('top-ad-container', {
                key: '01229d661b91222d4120ca2e6c5c14f8',
                format: 'iframe',
                height: 50,
                width: 320,
                params: {}
            }, 'https://www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js');
        }
    }

    // Bottom ad
    const bottomAdContainer = document.getElementById('bottom-ad-container');
    if (bottomAdContainer) {
        if (screenWidth >= 468) {
            bottomAdContainer.style.maxWidth = '468px';
            bottomAdContainer.style.height = '60px';
            showAd('bottom-ad-container', {
                key: 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                format: 'iframe',
                height: 60,
                width: 468,
                params: {}
            }, 'https://www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js');
        } else {
            bottomAdContainer.style.maxWidth = '320px';
            bottomAdContainer.style.height = '50px';
            showAd('bottom-ad-container', {
                key: '01229d661b91222d4120ca2e6c5c14f8',
                format: 'iframe',
                height: 50,
                width: 320,
                params: {}
            }, 'https://www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js');
        }
    }

    // Sidebar ads
    const sidebarOptions = {
        key: '723938310f9d6a9b6647d12a3ddbd205',
        format: 'iframe',
        height: 600,
        width: 160,
        params: {}
    };
    const sidebarSrc = 'https://www.highperformanceformat.com/723938310f9d6a9b6647d12a3ddbd205/invoke.js';

    const sidebar1 = document.getElementById('sidebar-ad-container-1');
    if (sidebar1) {
        sidebar1.style.width = '160px';
        sidebar1.style.height = '600px';
        showAd('sidebar-ad-container-1', sidebarOptions, sidebarSrc);
    }

    const sidebar2 = document.getElementById('sidebar-ad-container-2');
    if (sidebar2) {
        sidebar2.style.width = '160px';
        sidebar2.style.height = '600px';
        showAd('sidebar-ad-container-2', sidebarOptions, sidebarSrc);
    }
}

// ✅ Debounced resize listener
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(loadAds, 300);
});

window.addEventListener('load', loadAds);
