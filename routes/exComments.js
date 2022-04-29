var express = require('express');
var router = express.Router();
const passport = require('passport');
const exCommentsCtrl = require('../controllers/exComments');
const isLoggedIn = require('../config/auth');


router.post('/results/:id/comments', isLoggedIn, exCommentsCtrl.create);

router.delete('/comments/:id', isLoggedIn, exCommentsCtrl.delete);

router.put('/comments/:id', isLoggedIn, exCommentsCtrl.edit);

module.exports = router;