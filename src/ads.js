function showAd(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (container) {
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');
        
        // Set sandbox attributes to allow scripts and same-origin access
        iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

        container.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
            <html>
            <head>
                <style>body { margin: 0; }</style>
            </head>
            <body>
                ${adHtml}
            </body>
            </html>
        `);
        iframeDoc.close();
    }
}

function loadAds() {
    const topAdScript = `
        <div class="sm:hidden">
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
        </div>
        <div class="hidden sm:block">
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
        </div>
    `;

    showAd('top-ad-container', topAdScript);
    showAd('sidebar-ad-container', topAdScript);
    showAd('bottom-ad-container', topAdScript);
}

window.addEventListener('load', loadAds);