const userController = require('./../controllers/userController');
const authorizationController  = require('./../controllers/authorizationController');
const localAuth = require('./../auth/localAuth.js');

module.exports = function(router) {

    router
        .route('/user')
        .post(userController.createUser);

    router
        .route('/signup')
        .get(authorizationController.signUp);
    
    router
        .route('/login')
        .get(authorizationController.logIn);
    
};


