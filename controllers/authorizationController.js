const User = require('./../models/User.js');
const bodyParser = require('body-parser');

module.exports = {

    signUp: function(req, res, next) {
        res.send(req.params);
        console.log(req.params);
        next();
    },

    logIn: function(req, res, next) {
        res.send(req.body);
        console.log(req.body);
        next();
    }

};
