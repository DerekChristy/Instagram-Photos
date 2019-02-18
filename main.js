var express = require('express');
var app = express();
var path = require('path');
let ig = require("instagram-node").instagram();

app.use(express.static(path.join(__dirname + "/public/")));
app.set("view engine", "ejs");
const my_token = "547206214.1677ed0.0fc5948a176d45ccadfcb394fd2f346f";
ig.use({
    access_token: my_token,
});

app.get("/", function(req, res) {
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        res.render("pages/index", {grams : medias}); 
    });
});

app.listen(8080);
console.log("App hosted at http://localhost:8080");