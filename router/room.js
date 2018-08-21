const express = require('express');
const roomController = require('./../controllers/roomController');
const protectRoute = require('./../controllers/authenticationController');

module.exports = function(router) {
    router
        .route('/')
        .get(roomController.index);
    
    router
        .route('/chatrooms')
        .get(protectRoute, roomController.chatrooms);
    
    ///session test 
    router
        .route('/setcolor')
        .get(function(req, res, next) {
            req.session.favColor = 'Red';
            res.send('Setting favorite color!');
            next();
        });
    
    router 
        .route('/getcolor')
        .get(function(req, res, next) {
            res.send("Favorite color is: " + (req.session.favColor === undefined ? "not Found" : req.session.favColor));
            next();
        });

};