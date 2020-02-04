const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.static('dist'));
app.use('/inteerests', proxy('http://horizontal-ncpc-dev.herokuapp.com'));
app.use('/profiles', proxy('http://horizontal-ncpc-dev.herokuapp.com'));
app.use('/subscriptions', proxy('http://horizontal-ncpc-dev.herokuapp.com'));

app.listen(process.env.PORT || 5000);