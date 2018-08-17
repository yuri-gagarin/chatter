const userController = require('./../controllers/userController');

module.exports = function(router) {

    router
        .route('/user')
        .get(userController.createUser);
};


