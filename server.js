require('./mongoose-connect')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routers')
var cors = require('cors');

require('dotenv').config()

const app = express()

var http = require('http').createServer(app);
const port = 8888
app.use(cors());
// const router = require('./routers')

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.use(router)

app.get('/', (req, res) => res.send("Hello"))

app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack
    res.status(400).json({ message, stack })
})

app.use(function(req, res, next) {
    var allowedOrigins = ['http://localhost:8000', 'http://localhost:3000'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

http.listen(process.env.PORT || port, '0.0.0.0', () => {
    console.log('listening on *:' + port);
});

// http.listen(3000, () => {
//     console.log('listening on *:3000');
// });