(function (settings = {}) {
  // Run only after the page is fully loaded
  window.addEventListener("load", function () {
    setTimeout(() => {
      const script = document.createElement("script");
      script.src = "//fancyresponse.com/bNXaVwsXd.GUln0GYLWzcD/_eRms9kuoZtUnlSkQPVTPY/2YMJzwIX2zMoz/QotoNrjaY/zCM/jGYrzqNdQM";
      script.async = true;
      script.defer = true;
      script.referrerPolicy = "no-referrer-when-downgrade";

      // ✅ Handle success
      script.onload = () => {
        console.log("✅ External script loaded successfully.");
      };

      // ⚠️ Handle error and remove script if it fails
      script.onerror = () => {
        console.warn("⚠️ fancyresponse.com script failed to load — removing tag.");
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };

      // Insert safely into the document
      (document.body || document.documentElement).appendChild(script);
    }, 1000); // Delay (in ms)
  });
})();
