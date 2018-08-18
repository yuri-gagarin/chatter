const User = require('./../models/User');
const config = require('./../config/config');


module.exports = {
    createUser: function(req, res, next) {
        if (req.body.username && req.body.password) {
            let user  = new User({
                username: req.body.username,
                password: req.body.password,
                fullname: ''
            });
            user.save((err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(user);
                    res.render('index.ejs');
                }
            });
        }
        else {
            res.render('sign_up.ejs',  {title: "Login"});
        }
        next()
    },

    getUser: function(req, res, next) {
        let user;
    },

    logIn: function(req, res, next) {
        res.render('log_in.ejs', {title: 'Login'});
        next();
    },

    signUp: function(req, res, next) {
        res.render('sign_up.ejs', {title: 'Sign Up'});
        next();
    }

};

