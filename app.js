const fs = require('fs');
const express = require('express')
, app = express()
, http = require('http').createServer(app)
, bodyParser = require("body-parser")
,compression = require('compression');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(compression());
app.set('view cache', true);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
http.listen(PORT);
module.exports = app;
