const room = require('./room');
const user = require('./user');
const auth = require('./auth');

module.exports = function(router) {
    room(router);
    user(router);
    auth(router);
};