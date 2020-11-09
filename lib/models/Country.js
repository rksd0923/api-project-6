const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const countryInfo = new Schema({
    name: String,
    capital: String,
    region: String,
    population: Number,
    area: Number,
    measurement: String,
})

module.exports = mongoose.model('countryInfo', countryInfo)