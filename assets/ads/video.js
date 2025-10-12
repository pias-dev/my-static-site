(function (settings = {}) {
  // Delay loading external script slightly to improve initial load
  window.addEventListener("load", function () {
    setTimeout(() => {
      const script = document.createElement("script");
      script.src = "//fancyresponse.com/bNXaVwsXd.GUln0GYLWzcD/_eRms9kuoZtUnlSkQPVTPY/2YMJzwIX2zMoz/QotoNrjaY/zCM/jGYrzqNdQM";
      script.async = true;
      script.defer = true;
      script.referrerPolicy = "no-referrer-when-downgrade";

      // Optional: handle load success/failure
      script.onload = () => console.log("External script loaded successfully.");
      script.onerror = () => console.warn("⚠️ fancyresponse.com script failed to load.");

      // Add script to document safely
      (document.body || document.documentElement).appendChild(script);
    }, 1000); // delay in ms (1 second)
  });
})();
