// import express
const express = require("express");
// import moment
const moment = require("moment");
// instance methods express
const app = express();
// middleware global body-parser
if (
    moment().day() >= 1 &&
    moment().hours() >= 9 &&
    moment().day() <= 5 &&
    moment().hours() <= 17
) {
    app.use(express.static("Public"));
} else {
    app.use(express.static("Close"));
}
// Server

const PORT = process.env.PORT || 5000;
// create server
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is running on ${PORT}`)
);
