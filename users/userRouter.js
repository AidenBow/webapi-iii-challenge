const express = require('express');
const userDb = require("./userDb")

const router = express.Router();

router.post('/', (req, res) => {
  userDb.insert(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
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
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  userDb.getById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.get('/:id/posts', (req, res) => {
  userDb.getUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

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
