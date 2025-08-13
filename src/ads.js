function showAd(containerId, adConfig) {
    const container = document.getElementById(containerId);
    if (!container) return;

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

    // Set title for accessibility
    const label = container.getAttribute('aria-label') || container.getAttribute('data-title');
    iframe.setAttribute('title', label || `${containerId.replace(/-/g, ' ')} content`);

    container.appendChild(iframe);

    // Inject minimal HTML into iframe
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write('<!DOCTYPE html><html><head><style>body {margin:0}</style></head><body></body></html>');
    doc.close();

    // Create script dynamically inside iframe
    const configScript = doc.createElement('script');
    configScript.type = 'text/javascript';
    configScript.text = `atOptions = ${JSON.stringify(adConfig)};`;

    const adScript = doc.createElement('script');
    adScript.src = `//www.highperformanceformat.com/${adConfig.key}/invoke.js`;
    adScript.async = true;

    doc.body.appendChild(configScript);
    doc.body.appendChild(adScript);
}

function loadAds() {
    const screenWidth = window.innerWidth;

    // Top ad container
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
            });
        } else if (screenWidth >= 468) {
            topAdContainer.style.maxWidth = '468px';
            topAdContainer.style.height = '60px';
            showAd('top-ad-container', {
                key: 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                format: 'iframe',
                height: 60,
                width: 468,
                params: {}
            });
        } else {
            topAdContainer.style.maxWidth = '320px';
            topAdContainer.style.height = '50px';
            showAd('top-ad-container', {
                key: '01229d661b91222d4120ca2e6c5c14f8',
                format: 'iframe',
                height: 50,
                width: 320,
                params: {}
            });
        }
    }

    // Bottom ad container
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
            });
        } else {
            bottomAdContainer.style.maxWidth = '320px';
            bottomAdContainer.style.height = '50px';
            showAd('bottom-ad-container', {
                key: '01229d661b91222d4120ca2e6c5c14f8',
                format: 'iframe',
                height: 50,
                width: 320,
                params: {}
            });
        }
    }

    // Sidebar ads
    const sidebarAdConfig = {
        key: '723938310f9d6a9b6647d12a3ddbd205',
        format: 'iframe',
        height: 600,
        width: 160,
        params: {}
    };

    const sidebar1 = document.getElementById('sidebar-ad-container-1');
    if (sidebar1) {
        sidebar1.style.width = '160px';
        sidebar1.style.height = '600px';
        showAd('sidebar-ad-container-1', sidebarAdConfig);
    }

    const sidebar2 = document.getElementById('sidebar-ad-container-2');
    if (sidebar2) {
        sidebar2.style.width = '160px';
        sidebar2.style.height = '600px';
        showAd('sidebar-ad-container-2', sidebarAdConfig);
    }
}

window.addEventListener('load', loadAds);
window.addEventListener('resize', loadAds);
