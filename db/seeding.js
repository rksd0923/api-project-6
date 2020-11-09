const data = require("./data.json");
const Country = require('../models/Country.js')


const countryInfo = data.map(item => {
    let info = {};
    info.name = item.name;
    info.capital = item.capital;
    info.region = item.region;
    info.population = item.population;
    info.area = item.area;
    info.measurement = item.measurement

    return info;
})

Country.deleteMany({})
    .then(() => {
        Country.create(countryInfo)
            .then(res => {
                console.log(res);
                process.exit();
            })
            .catch(err => {
                console.log(err)
            })
    })
