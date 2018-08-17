const room = require('./room');
const user = require('./user');

module.exports = function(router) {
    room(router);
    user(router);
};