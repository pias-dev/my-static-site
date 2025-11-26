(function (rtfqo) {
  function loadScript() {
    var d = document,
      s = d.createElement('script'),
      l = d.scripts[d.scripts.length - 1];
    s.settings = rtfqo || {};
    s.src = "\/\/fancyresponse.com\/bNXaVwsXd.GUln0GYLWzcD\/_eRms9kuoZtUnlSkQPVTPY\/2YMJzwIX2zMoz\/QotoNrjaY\/zCM\/jGYrzqNdQM";
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
  }, 1200);
})({});

