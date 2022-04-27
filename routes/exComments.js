var express = require('express');
var router = express.Router();
const passport = require('passport');
const exCommentsCtrl = require('../controllers/exComments');
const isLoggedIn = require('../config/auth');

// You Do - Define the Route
// POST /movies/:id/reviews
router.post('/results/:id/comments', exCommentsCtrl.create);
// // DELETE /reviews/:id
// router.delete('/reviews/:id', reviewsCtrl.delete);


module.exports = router;