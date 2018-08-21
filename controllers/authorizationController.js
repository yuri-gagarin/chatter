const User = require('./../models/User.js');
const bodyParser = require('body-parser');

module.exports = {

    signUp: function(req, res, next) {
        res.render('signup.ejs', {title: "Sign Up"})
        next();
    },

    logIn: function(req, res, next) {
        res.render('login.ejs', {title: "Login"});
        next();
    }

};
