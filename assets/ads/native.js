(function () {
  const CONTAINER_ID = "container-849e6610f4501e065f7c0550fff4cc17";
  const SCRIPT_SRC =
    "https://pl27312178.effectivegatecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js";

  function loadExternalAd() {
    // Ensure container exists
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    // Remove existing script if any (for refresh)
    const existingScript = document.querySelector(`script[src^="${SCRIPT_SRC}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Clear container content for fresh ad
    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    // Add cache-busting parameter to force fresh load
    script.src = SCRIPT_SRC + "?t=" + Date.now();

    // IMPORTANT: append to BODY (not container)
    document.body.appendChild(script);
  }

  function initAd() {
    // Initial load after 1 seconds
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
