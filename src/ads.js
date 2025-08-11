function showAd(containerId, adHtml) {
    const container = document.getElementById(containerId);
    if (container) {
        // Create a temporary div to hold the ad HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = adHtml;

        // Move the ad content from the temporary div to the container
        while (tempDiv.firstChild) {
            container.appendChild(tempDiv.firstChild);
        }

        // Find and execute the scripts
        const scripts = container.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const oldScript = scripts[i];
            const newScript = document.createElement('script');

            // Copy attributes
            for (let j = 0; j < oldScript.attributes.length; j++) {
                newScript.setAttribute(oldScript.attributes[j].name, oldScript.attributes[j].value);
            }

            // Copy script content
            if (oldScript.innerHTML) {
                newScript.innerHTML = oldScript.innerHTML;
            }

            // Replace the old script tag with the new one to trigger execution
            if (oldScript.parentNode) {
                oldScript.parentNode.replaceChild(newScript, oldScript);
            }
        }
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
        <div class="hidden sm:block md:hidden">
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
        <div class="hidden md:block">
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
        </div>
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

    const bottomAdScript = `
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

    const nativeBannerAdScript = `
        <script async="async" data-cfasync="false" src="//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js"></script>
        <div id="container-849e6610f4501e065f7c0550fff4cc17"></div>
    `;

    showAd('top-ad-container', topAdScript);
    showAd('sidebar-ad-container-1', sidebarAdScript);
    showAd('sidebar-ad-container-2', sidebarAdScript);
    showAd('bottom-ad-container', bottomAdScript);
    showAd('native-banner-ad-container', nativeBannerAdScript);
}

window.addEventListener('load', loadAds);
