const User = require('./../models/User.js');

module.exports = function(passport, FacebookStrategy, config, mongoose={}) {
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
        clientID: config.fb.appID,
        clientSecret: config.fb.appSecret,
        callbackURL: config.fb.callBackURL,
        profileFields: ['id', 'displayName', 'photos']
    }, function(accessToken, refreshToken, profile, done) {
        ///check if user is already in our database return profile
        ///if not create and return a profile
        User.findOne({'profileID': profile.id}, function(err, result) {
            if(result) {
                done(null, result);
            }
            else {
                let newUser = new User({
                    profileID: profile.id,
                    fullname: profile.displayName,
                    profilePic: profile.photos[0].value || ''
                });

                newUser.save(function(err) {
                    done(null, newUser);
                });

            }
        });
    }));
};

