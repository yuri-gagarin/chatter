const User = require("./../models/User");
module.exports = function(passport, LocalStrategy) {

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
                if(!user || user.password != password) {
                    done(null, false, {error: 'Invalid username or password'});
                }
                else {
                    done(null, user);
                }
            })
    }));
}