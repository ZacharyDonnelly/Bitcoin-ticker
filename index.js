//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.send(__dirname + "index.html");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});