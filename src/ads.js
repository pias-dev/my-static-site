function showAd(containerId, adHtml, width, height) {
    const container = document.getElementById(containerId);
    if (container) {
        container.style.width = width + 'px';
        container.style.height = height + 'px';
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');
        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<html><head><style>body { margin: 0; }</style></head><body>' + adHtml + '</body></html>');
        iframeDoc.close();
    }
}

function loadAds() {
    const screenWidth = window.innerWidth;

    const topAdScriptMobile = `
        <script type="text/javascript">
            atOptions = {
                'key' : '01229d661b91222d4120ca2e6c5c14f8',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js"></script>
    `;

    const topAdScriptTablet = `
        <script type="text/javascript">
            atOptions = {
                'key' : 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js"></script>
    `;

    const topAdScriptDesktop = `
        <script type="text/javascript">
            atOptions = {
                'key' : '624a97a6290d488d2c37917256d06a67',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/624a97a6290d488d2c37917256d06a67/invoke.js"></script>
    `;

    const sidebarAdScript = `
        <script type="text/javascript">
            atOptions = {
                'key' : '723938310f9d6a9b6647d12a3ddbd205',
                'format' : 'iframe',
                'height' : 600,
                'width' : 160,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/723938310f9d6a9b6647d12a3ddbd205/invoke.js"></script>
    `;

    const bottomAdScriptMobile = `
        <script type="text/javascript">
            atOptions = {
                'key' : '01229d661b91222d4120ca2e6c5c14f8',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js"></script>
    `;

    const bottomAdScriptTablet = `
        <script type="text/javascript">
            atOptions = {
                'key' : 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js"></script>
    `;

    const nativeBannerAdScript = `
        <script async="async" data-cfasync="false" src="//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js"></script>
        <div id="container-849e6610f4501e065f7c0550fff4cc17"></div>
    `;

    if (screenWidth < 768) {
        showAd('top-ad-container', topAdScriptMobile, 320, 50);
        showAd('bottom-ad-container', bottomAdScriptMobile, 320, 50);
    } else if (screenWidth < 1024) {
        showAd('top-ad-container', topAdScriptTablet, 468, 60);
        showAd('bottom-ad-container', bottomAdScriptTablet, 468, 60);
    } else {
        showAd('top-ad-container', topAdScriptDesktop, 728, 90);
        showAd('bottom-ad-container', bottomAdScriptTablet, 468, 60); // No desktop version for bottom ad
    }

    showAd('sidebar-ad-container-1', sidebarAdScript, 160, 600);
    showAd('sidebar-ad-container-2', sidebarAdScript, 160, 600);
    showAd('native-banner-ad-container', nativeBannerAdScript, 0, 0); // native ad has its own size
}

window.addEventListener('load', loadAds);