const passport = require('passport');

module.exports = function(router) {
    router
        .route('/auth/facebook')
        .get(passport.authenticate('facebook', {scope: ['email']}));

    router
        .route('/auth/facebook/callback')
        .get(passport.authenticate('facebook',{
            successRedirect:'/chatrooms',
            failureRedirect: '/'
        }));

    router
        .route('/login')
        .post(passport.authenticate('local', {failureRedirect: '/login'}), function(req, res) {
            res.redirect('/chatrooms');
        });
};