const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const routes = require('./router/routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./config/config.js');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const env = process.env.NODE_ENV || 'development';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

if (env === 'development') {
    mongoose.connect('mongodb://localhost:27017/chatter', {useNewUrlParser: true});

    app.use(session({
        secret: config.sessionSecret,
        name: 'my-cookie',
        resave: true,
        saveUninitialized: true    
    }));
} else {
    mongoose.connect(config.dbURL, {useNewUrlParser: true});

    app.use(session({
        secret: config.sessionSecret,
        store: new MongoStore({
            mongooseConnection: mongoose.connections[0],
            stringify: true
        }),
        name: 'my-cookie',
        resave: true,
        saveUninitialized: true    
    }));
};





routes(router);
app.use(router);

const port  = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`Server running at port ${port}`);
    console.log(`Environment is ${env}`);
});

