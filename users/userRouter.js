const express = require('express');
const userDb = require("./userDb")

const router = express.Router();

router.post('/', (req, res) => {
  userDb.insert(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({message: "500 server error"})
    })
});

router.post('/:id/posts', (req, res) => {
  
});

router.get('/', (req, res) => {
  userDb.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({message: "500 server error"})
    })
});

router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user)
});

router.get('/:id/posts', (req, res) => {
  userDb.getUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(500).json({message: "500 server error"})
    })
});

router.delete('/:id', (req, res) => {
  userDb.remove(req.params.id)
    .then(() => {
      res.status(200).json({message: `user ${req.params.id} has been deleted`})
    })
    .catch(err => {
      res.status(500).json({message: "500 server error"})
    })
});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
  userDb.getById(req.params.id)
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(404).json({message: `user id:${req.params.id} id not valid`})
      }
    })
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {
  const post = req.body;
  if (post) {
    next();
  } else {
    status(404).json({ message: "missing post data" });
  }
};

module.exports = router;
