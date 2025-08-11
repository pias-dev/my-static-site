function setHtmlAndExecuteScripts(element, html) {
    element.innerHTML = html;
    const scripts = Array.from(element.getElementsByTagName('script'));
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

function showTopAd(containerId) {
    const html = `
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
    const container = document.getElementById(containerId);
    if (container) {
        setHtmlAndExecuteScripts(container, html);
    }
}

function showSidebarAd(containerId) {
    const html = `
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
    const container = document.getElementById(containerId);
    if (container) {
        setHtmlAndExecuteScripts(container, html);
    }
}

function showBottomAd(containerId) {
    const html = `
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
    const container = document.getElementById(containerId);
    if (container) {
        setHtmlAndExecuteScripts(container, html);
    }
}

function showNativeBannerAd(containerId) {
    const html = `
        <script async="async" data-cfasync="false" src="//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js"><\/script>
        <div id="container-849e6610f4501e065f7c0550fff4cc17"></div>
    `;
    const container = document.getElementById(containerId);
    if (container) {
        setHtmlAndExecuteScripts(container, html);
    }
}
