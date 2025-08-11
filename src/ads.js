function createScript(container, innerHTML, src) {
    const script = document.createElement('script');
    if (innerHTML) {
        script.innerHTML = innerHTML;
    }
    if (src) {
        script.src = src;
        script.type = 'text/javascript';
    }
    container.appendChild(script);
}

function showTopAd() {
    const container = document.currentScript.parentElement;

    const adWrapper1 = document.createElement('div');
    adWrapper1.className = 'sm:hidden';
    createScript(adWrapper1, "atOptions = {'key' : '01229d661b91222d4120ca2e6c5c14f8', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {}};");
    createScript(adWrapper1, null, '//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js');
    container.appendChild(adWrapper1);

    const adWrapper2 = document.createElement('div');
    adWrapper2.className = 'hidden sm:block md:hidden';
    createScript(adWrapper2, "atOptions = {'key' : 'fbbeaac58499d5ee65a6aa8c6a9810a4', 'format' : 'iframe', 'height' : 60, 'width' : 468, 'params' : {}};");
    createScript(adWrapper2, null, '//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js');
    container.appendChild(adWrapper2);

    const adWrapper3 = document.createElement('div');
    adWrapper3.className = 'hidden md:block';
    createScript(adWrapper3, "atOptions = {'key' : '624a97a6290d488d2c37917256d06a67', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {}};");
    createScript(adWrapper3, null, '//www.highperformanceformat.com/624a97a6290d488d2c37917256d06a67/invoke.js');
    container.appendChild(adWrapper3);
}

function showSidebarAd() {
    const container = document.currentScript.parentElement;
    createScript(container, "atOptions = {'key' : '723938310f9d6a9b6647d12a3ddbd205', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {}};");
    createScript(container, null, '//www.highperformanceformat.com/723938310f9d6a9b6647d12a3ddbd205/invoke.js');
}

function showBottomAd() {
    const container = document.currentScript.parentElement;

    const adWrapper1 = document.createElement('div');
    adWrapper1.className = 'sm:hidden';
    createScript(adWrapper1, "atOptions = {'key' : '01229d661b91222d4120ca2e6c5c14f8', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {}};");
    createScript(adWrapper1, null, '//www.highperformanceformat.com/01229d661b91222d4120ca2e6c5c14f8/invoke.js');
    container.appendChild(adWrapper1);

    const adWrapper2 = document.createElement('div');
    adWrapper2.className = 'hidden sm:block';
    createScript(adWrapper2, "atOptions = {'key' : 'fbbeaac58499d5ee65a6aa8c6a9810a4', 'format' : 'iframe', 'height' : 60, 'width' : 468, 'params' : {}};");
    createScript(adWrapper2, null, '//www.highperformanceformat.com/fbbeaac58499d5ee65a6aa8c6a9810a4/invoke.js');
    container.appendChild(adWrapper2);
}

function showNativeBannerAd() {
    const container = document.currentScript.parentElement;
    const script = document.createElement('script');
    script.async = true;
    script.dataset.cfasync = false;
    script.src = '//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js';
    container.appendChild(script);

    const adContainer = document.createElement('div');
    adContainer.id = 'container-849e6610f4501e065f7c0550fff4cc17';
    container.appendChild(adContainer);
}
