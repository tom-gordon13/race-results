const Result = require('../models/result');
const User = require('../models/user');

module.exports = {
    index,
    new: newResult, create, 
    show
}

// function index(req, res) {
//     Result.find({}, function(err, results){
//         console.log(results)
//         res.render('results/index', {results});
//     })
// }

function index(req, res) {
    Result.find({}).populate('runner')
    .exec(function(err, results){  
        res.render('results/index', {results});
        })
}

function show(req, res) {
    Result.findById(req.params.id)
        .populate('runner')
        .exec(function(err, result) {
            res.render('results/show', { title: 'Show Result', result });
            }
        );
}

function newResult(req, res) {
    // Middleware
    res.render('results/new', {title: 'Add New Result'})
}

function create(req, res) {
    req.body.runner = req.user._id
    let result = new Result(req.body);
    result.save(function(err){
        if (err) return res.redirect('/results/new');
        console.log(result);
        res.redirect('/results/index')
    })
}

