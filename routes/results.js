var express = require('express');
var router = express.Router();
const passport = require('passport');
const resultsCtrl = require('../controllers/results');
const isLoggedIn = require('../config/auth');

// GET /results
router.get('/index', isLoggedIn, resultsCtrl.index);

// NEW /results
router.get('/new', isLoggedIn, resultsCtrl.new);

// GET /results/:id (show functionality)
router.get('/:id', isLoggedIn, resultsCtrl.show);

// CREATE /results
router.post('/', isLoggedIn, resultsCtrl.create);

router.delete('/:id', isLoggedIn, resultsCtrl.delete);


module.exports = router;
 