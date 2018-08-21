const express = require('express');
const protectRoute = require('./../controllers/authenticationController');

module.exports = function(router) {
    router
        .route('/')
        .get(function(req, res, next) {
            res.render('index.ejs', {title: "Chattter"});
            next();
        });
    
    router
        .route('/chatrooms')
        .get(protectRoute, function(req, res, next) {
            res.render('chatrooms.ejs', {title: "Chatrooms", user: req.user});
            console.log(req.isAuthenticated());
            next();
        });
    
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