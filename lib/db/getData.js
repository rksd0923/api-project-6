const fetch = require('node-fetch');
const fs = require('fs')

const url = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=racist,sexist'

fetch(url)
    .then(res => res.json())
    .then(res => {
        let jsonData = JSON.stringify(res)
        fs.writeFile("./db/data.json", jsonData, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("file created")
            }
        })
    })