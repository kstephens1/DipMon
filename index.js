var appConfig = require('./config').keys;
const fetch = require('node-fetch');

//get rates
let url = "https://api.nomics.com/v1/exchange-rates?key="+ appConfig.NOMICS_KEY +"&currency=XRP";
let settings = { method: "Get" };
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(json);
    });

//Web Server
// var express = require('express');
// var app = express();
// var port = process.env.PORT || 3000;

// app.get('/',function(req,res){
//     res.send('<html><head></head><body><h1>Express Demo</h1></body></html>');
// } );

// app.listen(port);
