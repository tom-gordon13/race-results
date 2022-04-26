const Result = require('../models/result');
const User = require('../models/user');
const moment = require('moment');

module.exports = {
    show
}


function show(req, res) {
    User.findById(req.params.id)
    .populate('results')
    .exec(function(err, runner){
        res.render('users/show', {runner})
    })
}

// function show(req, res) {
//     User.findById(req.params.id).then(function(user){
//         Result.find({user})
//     }) 
//             res.render('users/show', {user, results});
//         })
//     }
//     )}

