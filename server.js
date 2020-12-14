//dependencies
const express = require("express");
// const path = require("path");
// const fs = require("fs");

//express server
const app = express();

var PORT = process.env.PORT || 8080;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//require routes
require("./routes/api-routes")(app)
require("./routes/html-routes")(app)

app.listen(PORT, function() {
    console.log("SERVER IS LISTENING: " + PORT);
});