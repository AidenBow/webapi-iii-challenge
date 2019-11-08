const express = require('express');

const router = express.Router();
const userDb = require("./userDb")

router.post('/', (req, res) => {
 
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
  userDb.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: "server error", error: err})
    })
});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

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

};

module.exports = router;
