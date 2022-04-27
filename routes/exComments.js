var express = require('express');
var router = express.Router();
const passport = require('passport');
const exCommentsCtrl = require('../controllers/exComments');
const isLoggedIn = require('../config/auth');


router.post('/results/:id/comments', exCommentsCtrl.create);

router.delete('/comments/:id', exCommentsCtrl.delete);


module.exports = router;