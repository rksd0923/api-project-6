const fetch = require('node-fetch');
const fs = require('fs')

//const url = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=racist,sexist'
const url = 'https://restcountries.eu/rest/v2/all'

fetch(url)
    .then(res => res.json())
    .then(res => {
        let countries = JSON.stringify(res)
        fs.writeFile('./db/data.json', countries, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('File Created')
            }
        })
    })