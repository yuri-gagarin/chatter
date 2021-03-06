const User = require('./../models/User');
const config = require('./../config/config');
const encrypter = require('./../util/passwordEncrypt');

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

            encrypter.encrypt(user).then(function(user) {
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
            });
        }

    },

    getUser: function(req, res, next) {
        let user;
    },

};

