(function () {
  const containerId = "container-849e6610f4501e065f7c0550fff4cc17";

  function loadExternalAd() {
    const container = document.getElementById(containerId);
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "https://pl27312178.effectivegatecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js";

    container.appendChild(script);
  }

  // Optional delay (adjust or remove if not needed)
  setTimeout(loadExternalAd, 1000);
})();
