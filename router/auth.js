const passport = require('passport');

module.exports = function(router) {
    router.get('/auth/facebook', passport.authenticate('facebook'));
    router.get('/auth/facebook/callback', passport.authenticate('facebook',{
        successRedirect:'/chatrooms',
        failureRedirect: '/'
    }));

};