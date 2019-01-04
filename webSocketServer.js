const express = require('express');
const bodyParser = require('body-parser');

const socket = require('socket.io');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const server = app.listen(7000, '0.0.0.0', () => {
    console.log("websocket server port 7000 is ready");
});

const io = socket.listen(server);

const router = require('./router/main')(app, io);