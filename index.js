const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API Endpoint: Hello
app.get('/hello', (req, res) => {
  res.status(200).send('Hi there!');
});

// API Endpoint: Emojis
app.get('/emojis', (req, res) => {
  io.emit('emojis');
  res.status(200).send('Emojis are raining!');
});

// API Endpoint: Background
app.post('/background', (req, res) => {
  io.emit('background', { color: req.body.color });
  res.status(200).send('Background color changed to ' + req.body.color);
});

// New API Endpoint: Play
app.get('/play', (req, res) => {
  io.emit('playMusic');
  res.status(200).send('Music playback toggled');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});