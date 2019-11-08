const express = 'express';

const server = express();

server.use(express.json());
server.use(logger);
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`${Date.now()} ${req.method} ${req.url} ${res.status}`)
  next();
};

module.exports = server;
