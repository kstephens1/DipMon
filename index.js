var appConfig = require('./config').keys;
var os = require("os");

//Setup Web Server
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/metrics', function (req, res) {
    let timestamp = Date.now();
    const XRPRequest = require('request'),url = "https://api.nomics.com/v1/currencies/ticker?key="+ appConfig.NOMICS_KEY +"&ids=XRP,BTC,XLM,DOGE";

    XRPRequest(url, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
        var output;
        const nResponse = JSON.parse(body);
        var xrpPrice = nResponse[0].price;
        output = "# TYPE btc gauge" + os.EOL;
        output += "btc " + nResponse[0].price + os.EOL;
        output += "# TYPE xrp gauge"  + os.EOL;
        output += "xrp " + nResponse[1].price  + os.EOL;
        output += "# TYPE doge gauge"  + os.EOL;
        output += "doge " + nResponse[2].price  + os.EOL;
        output += "# TYPE xlm gauge"  + os.EOL;
        output += "xlm " + nResponse[3].price  + os.EOL;

        res.send(output);

        console.log('Got hit ' + timestamp);

    } else {
        console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
    })

})


app.listen(port);
