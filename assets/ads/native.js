(function () {
  const CONTAINER_ID = "container-849e6610f4501e065f7c0550fff4cc17";
  const SCRIPT_SRC =
    "https://pl27312178.effectivegatecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js";

  function loadExternalAd() {
    // Ensure container exists
    if (!document.getElementById(CONTAINER_ID)) return;

    // Prevent duplicate loads
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = SCRIPT_SRC;

    // IMPORTANT: append to BODY (not container)
    document.body.appendChild(script);
  }

  // Load after page is fully ready
  if (document.readyState === "complete") {
    setTimeout(loadExternalAd, 1000);
  } else {
    window.addEventListener("load", () => {
      setTimeout(loadExternalAd, 1000);
    });
  }
})();
