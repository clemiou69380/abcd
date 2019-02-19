var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://mongo:27117/users", {
    useNewUrlParser: true
}).then(() => {
    console.log('Succesfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = 8080;

app.listen(port, function(){
	console.log("go tp2"); 
});

