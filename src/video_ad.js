(function(adConfig){
    var d = document,
        s = d.createElement("script"),
        l = d.scripts[d.scripts.length - 1];

    // Apply config if needed
    s.async = true;
    s.referrerPolicy = "no-referrer-when-downgrade";

    // Insert ad script URL here (update this if the provider changes)
    s.src = adConfig.src;

    // Insert before the last loaded script
    l.parentNode.insertBefore(s, l);

})( {
    src: "\/\/fancyresponse.com\/beX.VcseddGJls0yYgWMcr\/WeKmo9_urZcUKlDkzPATTYw2\/MCzHIb2aMuz\/Q\/tCN\/jYYhzzMhjEYezrNpQd";
});
