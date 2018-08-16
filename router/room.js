const express = require('express');

module.exports = function(router) {
    router
        .route('/')
        .get(function(req, res, next) {
            res.render('index.ejs', {title: "Chattter"});
            next();
        });
    
    router
        .route('/rooms')
        .get(function(req, res, next) {
            res.render('chatrooms.ejs');
            next();
        });

};