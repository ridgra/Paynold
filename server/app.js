const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const payloads = require('./payloads.json');

app.get('/', (req, res) => {
  res.status(200).json(payloads);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
