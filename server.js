const express = require('express');
const userRouter = require('./users/userRouter.js')
const server = express();


server.use(express.json())
server.use(logger)
server.use("/users", userRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(new Date() +" "+ req.method +" "+ req.url +" "+ res.statusCode )
  next();
};

module.exports = server;
