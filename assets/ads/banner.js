const adConfig = [
  {
    ids: [
      { id: "topad-1", label: "Top Ad 1" },
      { id: "topad-2", label: "Top Ad 2" }
    ],
    sizes: [
      { minWidth: 744, key: "624a97a6290d488d2c37917256d06a67", w: 744, h: 106 },
      { minWidth: 484, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 484, h: 76 },
      { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 336, h: 66 }
    ]
  },
  {
    ids: [
      { id: "midad-1", label: "Mid Ad 1" },
      { id: "midad-2", label: "Mid Ad 2" },
      { id: "midad-3", label: "Mid Ad 3" }
    ],
    sizes: [
      { minWidth: 484, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 484, h: 76 },
      { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 336, h: 66 }
    ]
  },
  {
    ids: [
      { id: "sidead-1", label: "Sidebar Ad 1" },
      { id: "sidead-2", label: "Sidebar Ad 2" },
      { id: "sidead-3", label: "Sidebar Ad 3" },
      { id: "sidead-4", label: "Sidebar Ad 4" },
      { id: "sidead-5", label: "Sidebar Ad 5" },
      { id: "sidead-6", label: "Sidebar Ad 6" }
    ],
    sizes: [
      { minWidth: 0, key: "723938310f9d6a9b6647d12a3ddbd205", w: 176, h: 616 }
    ]
  }
];

let currentScreenCategory = null;
let adRefreshInterval = null;

function getScreenCategory() {
  const e = window.innerWidth;
  return e >= 744 ? "lg" : e >= 484 ? "md" : "sm";
}

function showIframeAd(e, t, n, i, a) {
  const r = document.getElementById(e);
  if (!r) return;

  r.innerHTML = "";
  r.style.width = i + "px";
  r.style.height = a + "px";
  r.setAttribute("role", "region");
  r.setAttribute("aria-label", t);

  const d = document.createElement("iframe");
  Object.assign(d.style, { width: i + "px", height: a + "px", border: "0" });
  d.setAttribute("scrolling", "no");
  d.setAttribute("frameborder", "0");
  d.setAttribute("title", t);
  d.loading = "lazy";

  r.appendChild(d);

  d.addEventListener("load", () => {
    const e = d.contentDocument;
    const o = e.createElement("script");
    o.type = "text/javascript";
    o.text = `atOptions = { 'key': '${n}', 'format': 'iframe', 'height': ${a}, 'width': ${i}, 'params': {} };`;

    const r = e.createElement("script");
    r.src = `//www.highperformanceformat.com/${n}/invoke.js`;
    r.async = !0;

    e.body.appendChild(o);
    e.body.appendChild(r);
  });

  d.src = "about:blank";
}

function loadAds(e = !1) {
  const t = getScreenCategory();
  if (!e && t === currentScreenCategory) return;

  currentScreenCategory = t;
  const n = window.innerWidth;

  adConfig.forEach(cfg => {
    cfg.ids.forEach(obj => {
      for (let size of cfg.sizes) {
        if (n >= size.minWidth) {
          showIframeAd(obj.id, obj.label, size.key, size.w, size.h);
          break;
        }
      }
    });
  });
}

// Force refresh ads (ignores screen category check)
function refreshAds() {
  currentScreenCategory = null; // Reset to force reload
  loadAds(true);
}

// Start the ad refresh interval
function startAdRefreshInterval() {
  // Clear any existing interval
  if (adRefreshInterval) {
    clearInterval(adRefreshInterval);
  }
  
  // Refresh ads every 5 seconds (5000ms)
  adRefreshInterval = setInterval(() => {
    refreshAds();
  }, 10000);
}

// Stop the ad refresh interval (useful if needed)
function stopAdRefreshInterval() {
  if (adRefreshInterval) {
    clearInterval(adRefreshInterval);
    adRefreshInterval = null;
  }
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => loadAds(!1), 250);
});

// Fire after 3 seconds and start 5-second refresh interval
window.addEventListener("load", () => {
  // Initial load after 3 seconds (3000ms)
  setTimeout(() => {
    loadAds(true);
    // Start refreshing every 5 seconds after initial load
    startAdRefreshInterval();
  }, 1000);
});
