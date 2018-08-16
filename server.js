const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const routes = require('./router/routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

routes(router);
app.use(router);

const port  = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`Server running at port ${port}`);
});

