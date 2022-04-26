const Result = require('../models/result');
const User = require('../models/user');
const moment = require('moment');

module.exports = {
    show
}


function show(req, res) {
    User.findById(req.params._id, function(err, user) {
        Result.find({'results.runner._id': req.params._id}, function(err, results){
            res.render('users/show', {results});
        })
    }
    )}