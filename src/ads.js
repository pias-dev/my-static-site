function loadAd(containerId, adDetails) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (adDetails.isNative) {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = `//pl27312178.profitableratecpm.com/${adDetails.key}/invoke.js`;
        const div = document.createElement('div');
        div.id = `container-${adDetails.key}`;
        container.appendChild(script);
        container.appendChild(div);
    } else {
        adDetails.slots.forEach(slot => {
            const div = document.createElement('div');
            if (slot.classes) {
                div.className = slot.classes;
            }

            const optionsScript = document.createElement('script');
            optionsScript.type = 'text/javascript';
            optionsScript.innerHTML = `
                atOptions = {
                    'key' : '${slot.key}',
                    'format' : 'iframe',
                    'height' : ${slot.height},
                    'width' : ${slot.width},
                    'params' : {}
                };
            `;

            const adScript = document.createElement('script');
            adScript.type = 'text/javascript';
            adScript.src = `//www.highperformanceformat.com/${slot.key}/invoke.js`;

            div.appendChild(optionsScript);
            div.appendChild(adScript);
            container.appendChild(div);
        });
    }
}