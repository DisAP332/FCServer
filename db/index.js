const mongoose = require('mongoose')
const username = encodeURIComponent("Disap332");
const password = encodeURIComponent("Bell2848");
const cluster = "smallbuisnesswebsites";
const { MongoClient, ServerApiVersion } = require('mongodb');
const URI = `mongodb+srv://${username}:${password}@${cluster}.t319b6m.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URI, { useNewUrlParser: true })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully")
})

module.exports = db