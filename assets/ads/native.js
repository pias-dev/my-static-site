(function () {
  const CONTAINER_ID = "container-849e6610f4501e065f7c0550fff4cc17";
  const SCRIPT_SRC =
    "https://pl27312178.effectivegatecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js";

  let scriptCounter = 0;

  function loadExternalAd() {
    // Find existing container
    const existingContainer = document.getElementById(CONTAINER_ID);
    if (!existingContainer) return;

    // Get parent element
    const parent = existingContainer.parentNode;

    // Remove all old scripts related to this ad
    document.querySelectorAll(`script[src*="849e6610f4501e065f7c0550fff4cc17"]`).forEach(s => s.remove());

    // Remove old container completely
    existingContainer.remove();

    // Create fresh container
    const newContainer = document.createElement("div");
    newContainer.id = CONTAINER_ID;
    parent.appendChild(newContainer);

    // Create fresh script
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = SCRIPT_SRC + "?refresh=" + (++scriptCounter) + "&t=" + Date.now();

    // Append script to body
    document.body.appendChild(script);

    console.log("Ad loaded/refreshed: " + new Date().toLocaleTimeString());
  }

  function initAd() {
    // Initial load after 3 seconds
    setTimeout(() => {
      loadExternalAd();

      // Refresh every 5 seconds
      setInterval(loadExternalAd, 5000);
    }, 1000);
  }

  // Load after page is fully ready
  if (document.readyState === "complete") {
    initAd();
  } else {
    window.addEventListener("load", initAd);
  }
})();
