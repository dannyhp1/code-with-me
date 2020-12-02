const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.listen(8080, () => {
    console.log('Listening on *:8080');
});

const io = require('socket.io')(http);
io.on('connection', (socket) => {
    console.log('User connected.');

    socket.on('disconnect', () => {
        console.log('User disconnected.')
    });
});