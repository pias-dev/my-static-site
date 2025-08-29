const adConfig = [
  {
    ids: [
      { id: "top-ad-container-1", label: "Top Advertisement-1" },
      { id: "top-ad-container-2", label: "Top Advertisement 2" }
    ],
    sizes: [
      { minWidth: 744, key: "624a97a6290d488d2c37917256d06a67", w: 744, h: 106 },
      { minWidth: 484, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 484, h: 76 },
      { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 336, h: 66 }
    ]
  },
  {
    ids: [
      { id: "bottom-ad-container-1", label: "Bottom Advertisement-1" },
      { id: "bottom-ad-container-2", label: "Bottom Advertisement 2" },
      { id: "bottom-ad-container-3", label: "Bottom Advertisement 3" }
    ],
    sizes: [
      { minWidth: 484, key: "fbbeaac58499d5ee65a6aa8c6a9810a4", w: 484, h: 76 },
      { minWidth: 0,   key: "01229d661b91222d4120ca2e6c5c14f8", w: 336, h: 66 }
    ]
  },
  {
    ids: [
      { id: "sidebar-ad-container-1", label: "Sidebar Advertisement 1" },
      { id: "sidebar-ad-container-2", label: "Sidebar Advertisement 2" },
      { id: "sidebar-ad-container-3", label: "Sidebar Advertisement 3" },
      { id: "sidebar-ad-container-4", label: "Sidebar Advertisement 4" },
      { id: "sidebar-ad-container-5", label: "Sidebar Advertisement 5" },
      { id: "sidebar-ad-container-6", label: "Sidebar Advertisement 6" }
    ],
    sizes: [
      { minWidth: 0, key: "723938310f9d6a9b6647d12a3ddbd205", w: 176, h: 616 }
    ]
  }
];

let currentScreenCategory = null;

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

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => loadAds(!1), 250);
});

window.addEventListener("load", () => {
  setTimeout(() => loadAds(!0), 500);
});
