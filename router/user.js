const userController = require('./../controllers/userController');
const authorizationController  = require('./../controllers/authorizationController');

module.exports = function(router) {

    router
        .route('/user')
        .get(userController.createUser);

    router 
        .route('/login')
        .get(userController.logIn)
    router 
        .route('/login')
        .post(authorizationController.logIn);

    router
        .route('/sign_up')
        .get(userController.signUp);
    router
        .route('/sign_up')
        .post(userController.createUser);
    
};


