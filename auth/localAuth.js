const User = require("./../models/User");
const passwordEncrypter = require("./../util/passwordEncrypt");

module.exports = function(passport, LocalStrategy, config) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, function(username, password, done) {
        User.findOne({username: username})
            .then((user) => {
                if(!user) {
                    done(null, false, {error: 'Invalid username or password'});
                }
                else if (user) {
                    if (passwordEncrypter.decrypt(password, user.password)) {
                        done(null, user);
                    }           
                }
                else {
                    done(null, false, {error: "Invalid username or password"});
                }
            })
            .catch((err) => err);
    }));
}