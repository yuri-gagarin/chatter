const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const config = require('./../config/config');
const User = require('./../models/User');


module.exports = function(passport, FacebookStrategy, config) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(null, user);
        });
    });


    passport.use(new FacebookStrategy({
        clientID: config.fb.appID,
        clientSecret: config.fb.appSecret,
        callbackURL: config.fb.callBackURL,
        profileFields: ['id', 'displayName', 'photos']
    }, function(accessToken, refreshToken, profile, done) {
        //check for a user in db
        //if no user create a user then return the profile
        User.findOne({'profileID': profile.id}, function(err, user) {
            if (err) {
                console.log(err);
            }
            else if(!user) {
                let newUser = new User({
                    profileID: profile.id,
                    fullname: profile.displayName,
                    profilePic: profile.photos[0].value || ''
                });
                newUser.save(function(err) {
                    done(null, newUser);
                })
            }
            else {
                done(null, user);
            }
        })
    }));


}