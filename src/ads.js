function showAdInIframe(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');

    container.innerHTML = '';
    container.appendChild(iframe);

    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
        <html>
            <head>
                <link href="src/output.css" rel="stylesheet">
            </head>
            <body style="margin: 0;">
                ${adHtml}
            </body>
        </html>
    `);
    iframeDoc.close();
}

function showTopAd(containerId) {
    const adHtml = `
        <div class="sm:hidden">
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
        </div>
        <div class="hidden sm:block md:hidden">
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
        </div>
        <div class="hidden md:block">
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
        </div>
    `;
    showAdInIframe(containerId, adHtml);
}

function showSidebarAd(containerId) {
    const adHtml = `
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
    showAdInIframe(containerId, adHtml);
}

function showBottomAd(containerId) {
    const adHtml = `
        <div class="sm:hidden">
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
        </div>
        <div class="hidden sm:block md:hidden">
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
        </div>
        <div class="hidden md:block">
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
        </div>
    `;
    showAdInIframe(containerId, adHtml);
}

function showNativeBannerAd(containerId) {
    const adHtml = `
        <script async="async" data-cfasync="false" src="//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js"><\/script>
        <div id="container-849e6610f4501e065f7c0550fff4cc17"></div>
    `;
    showAdInIframe(containerId, adHtml);
}