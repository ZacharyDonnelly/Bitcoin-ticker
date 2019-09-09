//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use('/styles.css', express.static(__dirname + '/styles.css'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    console.log(req.body.crypto);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});