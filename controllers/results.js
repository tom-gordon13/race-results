const Result = require('../models/result');

module.exports = {
    index,
    new: newResult
}

function index(req, res) {
    // Result.find({}, function(err, results){
        // res.render('results/index', {results});
        res.render('results/index');
    // })
}

function newResult(req, res) {
    // Middleware
    res.render('results/new', {title: 'Add New Result'})
}

