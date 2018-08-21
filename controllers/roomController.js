module.exports = {
    index: function(req, res, next) {
        res.render('index.ejs', {title: "Chatter"});
        next();
    },
    chatrooms: function(req, res, next) {
        res.render('chatrooms.ejs', {title: "Chatrooms", user: req.user});
        next();
    }
};