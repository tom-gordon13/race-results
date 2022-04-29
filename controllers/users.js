const Result = require('../models/result');
const User = require('../models/user');
const moment = require('moment');

module.exports = {
    show
}


function show(req, res) {
    User.findById(req.params.id)
    .then(function(runner){
        Result.find({runner: req.params.id})
        .populate('runner')
        .exec(function(err, results){
            res.render('users/show', {runner, results})
    })
    })
}


