const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data", { useNewUrlParser: true })
module.exports = mongoose;