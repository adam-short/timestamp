var express = require('express');
var app = express();


app.get('/:date', (req, res) => {
    var dateParameter = req.params["date"]
    var response = {dateString: null, timeStamp: null};
    var myDate;
    
    if (!isNaN(dateParameter)) {
       myDate = new Date(parseInt(dateParameter)*1000);
    } else if (/\d{1,2}\+\w{3,}\+\d{4}/.test(dateParameter)) {
        myDate = new Date(Date.parse(dateParameter.replace(/\+/g, " ")));
    } else {
        res.send(response); return;
    }
    
    response.dateString = myDate.toDateString();
    response.timeStamp = myDate.getTime() / 1000;
    res.send(response);
});

app.listen('8080', () => console.log("Listening."))
