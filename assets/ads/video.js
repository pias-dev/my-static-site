(function (settings = {}) {
  window.addEventListener("load", function () {
    setTimeout(() => {
      // 🔗 Primary + backup URLs
      const scriptSources = [
        "//fancyresponse.com/bNXaVwsXd.GUln0GYLWzcD/_eRms9kuoZtUnlSkQPVTPY/2YMJzwIX2zMoz/QotoNrjaY/zCM/jGYrzqNdQM", // Main
        "//backup.fancyresponse.com/script.js", // Backup #1 (replace if you have another)
        "//cdn.example.com/fallback.js"         // Backup #2 (safe default)
      ];

      let currentIndex = 0;

      // 🧠 Load script with fallback logic
      const loadScript = () => {
        if (currentIndex >= scriptSources.length) {
          console.warn("❌ All external scripts failed to load.");
          return;
        }

        const src = scriptSources[currentIndex];
        const script = document.createElement("script");

        script.src = src;
        script.async = true;
        script.defer = true;
        script.referrerPolicy = "no-referrer-when-downgrade";

        script.onload = () => {
          console.log(`✅ Script loaded successfully: ${src}`);
        };

        script.onerror = () => {
          console.warn(`⚠️ Failed to load script: ${src}`);
          if (script.parentNode) script.parentNode.removeChild(script);

          // Try next script in the list
          currentIndex++;
          loadScript();
        };

        (document.body || document.documentElement).appendChild(script);
      };

      loadScript(); // Start loading
    }, 1000); // Delay before loading scripts (1 second)
  });
})();
