var amok = require('amokjs');


// configure responses directory
amok.setResponsesDirectory('responses');


exports.get = function(req, res) {
    res.set({
        'Content-Type': 'application/xml',
    });    
    amok.respond(req,res);
};


exports.post = function(req, res) {
    res.set({
        'Content-Type': 'application/xml',
    }); 
    amok.respond(req,res);
};