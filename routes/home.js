var express = require('express');
var router = express.Router();
const passport = require('passport');
// const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    const username = req.user.name;
  }
  res.render('home', { title: 'Keppa' });
});

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/results/index',
    failureRedirect: '/'
  }
));

// OAuth logout router
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})

module.exports = router;
