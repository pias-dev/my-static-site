setTimeout(() => {
  // Function to load/reload the script
  const loadScript = () => {
    // Remove existing script if present
    const existingScript = document.querySelector('script[data-zone="9793871"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append new script
    (s => {
      s.dataset.zone = 9793871;
      s.src = 'https://vemtoutcheeg.com/tag.min.js';
    })(
      [document.documentElement, document.body]
        .filter(Boolean)
        .pop()
        .appendChild(document.createElement('script'))
    );
  };

  // Initial load
  loadScript();

  // Refresh every 5 seconds
  setInterval(loadScript, 5000);

}, 1000); // 3000ms = 3 seconds initial delay
