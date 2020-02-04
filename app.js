const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.static('dist'));
app.use('/interests', proxy('https://horizontal-ncpc-dev.herokuapp.com'));
app.use('/profiles', proxy('https://horizontal-ncpc-dev.herokuapp.com'));
app.use('/subscriptions', proxy('https://horizontal-ncpc-dev.herokuapp.com'));

app.listen(process.env.PORT || 5000);