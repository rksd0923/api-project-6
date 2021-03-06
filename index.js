const express = require("express");
const app = express();
const Schedule = require("./models/Country")
const cors = require("cors");
const parser = require("body-parser");
const Country = require("./models/Country");

app.use(cors());
app.use(parser.json());


app.get("/", (req, res) => {
    Country.find({}).then(data => {
        console.log(data);
        res.json(data);
    })

})

app.get("/:id", (req, res) => {
    Country.findById(req.params.id).then(data => {
        console.log(data);
        res.json(data);
    })

})

app.get("/name/:name", (req, res) => {
    Country.find({ name: req.params.name }).then(data => {
        console.log(data);
        res.json(data);
    })

})

app.post("/", (req, res) => {
    Country.create(req.body).then(data => {
        console.log(data);
        res.json(data);
    })

})

app.post("/:id", (req, res) => {
    Country.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(data => {
        console.log(data);
        res.json(data);
    })

})

app.delete("/:id", (req, res) => {
    Country.findOneAndRemove(
        { _id: req.params.id }
    ).then(data => {
        console.log(data);
        res.json(data);
    })

})


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});