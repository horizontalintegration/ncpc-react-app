const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.static('dist'))
app.use('/api', proxy('horizontal-ncpc-dev.herokuapp.com'));

app.listen(process.env.PORT || 5000);