var express = require('express');
var controller = require('./controller');


var app = express();


// define supported routes
app.post('/:resource', controller.post);
app.get('/:resource', controller.get);


app.post('/', controller.post);
app.get('/', controller.get);


// for everything else
// catch all route, to catch all not supported requests and bounce back
app.all("*", function(req,res){
    res.set({
        'Content-Type': 'application/json'
    }); 
    res.status(404);
    res.send('{"error":"request type is not supported"}');
});




// start node app
console.log("Listen to: 3001");
app.listen(3001);