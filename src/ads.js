function showAd(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (container) {
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
        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write('<html><head><style>body { margin: 0; }</style></head><body>' + adHtml + '</body></html>');
        iframeDoc.close();
    }
}

function loadAds() {
    const screenWidth = window.innerWidth;

    // Top ad container
    const topAdContainer = document.getElementById('top-ad-container');
    if (topAdContainer) {
        if (screenWidth >= 728) {
            topAdContainer.style.maxWidth = '728px';
            topAdContainer.style.height = '90px';
            const largeAdScript = `
                <script type="text/javascript">
                    atOptions = {
                        'key' : '624a97a6290d488d2c37917256d06a67',
                        'format' : 'iframe',
                        'height' : 90,
                        'width' : 728,
                        'params' : {}
                    };
                <\/script>
                <script type="text/javascript" src="//www.highperformanceformat.com/624a97a6290d488d2c37917256d06a67/invoke.js"><\/script>
            `;
            showAd('top-ad-container', largeAdScript);
        } else if (screenWidth >= 468) {
            topAdContainer.style.maxWidth = '468px';
            topAdContainer.style.height = '60px';
            const mediumAdScript = `
                <script type="text/javascript">
                    atOptions = {
                        'key' : 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                        'format' : 'iframe',
                        'height' : 60,
                        'width' : 468,
                        'params' : {}
                    };
                <\/script>
                <script type="text/javascript" src="//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js"><\/script>
            `;
            showAd('top-ad-container', mediumAdScript);
        } else {
            topAdContainer.style.maxWidth = '320px';
            topAdContainer.style.height = '50px';
            const miniAdScript = `
                <script type="text/javascript">
                    atOptions = {
                        'key' : '01229d661b91222d4120ca2e6c5c14f8',
                        'format' : 'iframe',
                        'height' : 50,
                        'width' : 320,
                        'params' : {}
                    };
                <\/script>
                <script type="text/javascript" src="//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js"><\/script>
            `;
            showAd('top-ad-container', miniAdScript);
        }
    }

    // Bottom ad container
    const bottomAdContainer = document.getElementById('bottom-ad-container');
    if (bottomAdContainer) {
        if (screenWidth >= 468) {
            bottomAdContainer.style.maxWidth = '468px';
            bottomAdContainer.style.height = '60px';
            const mediumAdScript = `
                <script type="text/javascript">
                    atOptions = {
                        'key' : 'fbbeaac58499d5ee65a6aa8c6a9810a4',
                        'format' : 'iframe',
                        'height' : 60,
                        'width' : 468,
                        'params' : {}
                    };
                <\/script>
                <script type="text/javascript" src="//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js"><\/script>
            `;
            showAd('bottom-ad-container', mediumAdScript);
        } else {
            bottomAdContainer.style.maxWidth = '320px';
            bottomAdContainer.style.height = '50px';
            const miniAdScript = `
                <script type="text/javascript">
                    atOptions = {
                        'key' : '01229d661b91222d4120ca2e6c5c14f8',
                        'format' : 'iframe',
                        'height' : 50,
                        'width' : 320,
                        'params' : {}
                    };
                <\/script>
                <script type="text/javascript" src="//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js"><\/script>
            `;
            showAd('bottom-ad-container', miniAdScript);
        }
    }


    // Sidebar ads
    const sidebarAdScript = `
        <script type="text/javascript">
            atOptions = {
                'key' : '723938310f9d6a9b6647d12a3ddbd205',
                'format' : 'iframe',
                'height' : 600,
                'width' : 160,
                'params' : {}
            };
        <\/script>
        <script type="text/javascript" src="//www.highperformanceformat.com/723938310f9d6a9b6647d12a3ddbd205/invoke.js"><\/script>
    `;

    const sidebar1 = document.getElementById('sidebar-ad-container-1');
    if(sidebar1) {
        sidebar1.style.width = '160px';
        sidebar1.style.height = '600px';
        showAd('sidebar-ad-container-1', sidebarAdScript);
    }

    const sidebar2 = document.getElementById('sidebar-ad-container-2');
    if(sidebar2) {
        sidebar2.style.width = '160px';
        sidebar2.style.height = '600px';
        showAd('sidebar-ad-container-2', sidebarAdScript);
    }
}

window.addEventListener('load', loadAds);
window.addEventListener('resize', loadAds);