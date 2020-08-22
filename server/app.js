const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(server);

app.use(express.static('public'));

const products = require('./products');
let balance = 100000000000000;

io.on('connect', (socket) => {
  socket.emit('payload', { products, balance });

  socket.on('upPayload', (id) => {
    const idx = products.findIndex((e) => e.id == id);
    const isSafe = balance - products[idx].price;
    if (products[idx].stock > 0 && isSafe > 0) {
      products[idx].stock--;
      balance -= products[idx].price;
      socket.broadcast.emit('upPayloadBroadcast', id);
    }
  });
});

server.listen(port, () => {
  console.log(`listenning on port ${port}`);
});
