const User = require('./../models/User');
const config = require('./../config/config');


module.exports = {
    createUser: function(req, res, next) {
        let user  = new User({
            username: "timmay",
            password: "a password",
            fullname: "Timmay from South Park"
        });
        user.save((err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(user);
            }
            next();
        });
    }

};

