const User = require('./../models/User');
const config = require('./../config/config');


module.exports = {
    createUser: function(req, res, next) {
        const userParams = {
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.password_confirm
        };

        if (userParams.username && (userParams.password === userParams.passwordConf)) {

            let user  = new User({
                username: userParams.username,
                password: userParams.password,
                fullname: userParams.username
            });

            user.save((err, user) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    res.redirect('/'); 
                }
                next();
            });
        }
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

