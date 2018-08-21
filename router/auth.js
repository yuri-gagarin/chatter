const passport = require('passport');

module.exports = function(router) {
    router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
    router.get('/auth/facebook/callback', passport.authenticate('facebook',{
        successRedirect:'/chatrooms',
        failureRedirect: '/'
    }));

};