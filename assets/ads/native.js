(function () {
  const CONTAINER_ID = "container-849e6610f4501e065f7c0550fff4cc17";
  const SCRIPT_SRC =
    "https://pl27312178.effectivegatecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js";

  function loadExternalAd() {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    // Clear container
    container.innerHTML = "";

    // Create iframe for complete isolation
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "300px";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.scrolling = "no";

    container.appendChild(iframe);

    // Write content into iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        <div id="${CONTAINER_ID}"></div>
        <script async data-cfasync="false" src="${SCRIPT_SRC}?t=${Date.now()}"><\/script>
      </body>
      </html>
    `);
    iframeDoc.close();

    console.log("Ad loaded/refreshed: " + new Date().toLocaleTimeString());
  }

  function initAd() {
    // Initial load after 1 seconds
    setTimeout(() => {
      loadExternalAd();

      // Refresh every 5 seconds
      setInterval(loadExternalAd, 5000);
    }, 1000);
  }

  if (document.readyState === "complete") {
    initAd();
  } else {
    window.addEventListener("load", initAd);
  }
})();
