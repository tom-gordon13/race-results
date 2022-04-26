const Result = require('../models/result');
const User = require('../models/user');
const moment = require('moment');

module.exports = {
    index,
    new: newResult, 
    create, 
    show, 
    delete: deleteResult
}

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
    console.log(moment().format('dddd'))
    res.render('results/new', {title: 'Add New Result'})
}

function create(req, res) {
    req.body.runner = req.user._id

    let finalTime = moment.duration(
        req.body.finishHours, 'hours', 
        req.body.finishMinutes, 'minutes',
        req.body.finishSeconds, 'seconds');
    
    let result = new Result(req.body);
    result.finishTime = `${result.finishHours}:${result.finishMinutes}.${result.finishSeconds}`
    result.totalSeconds = result.finishHours*60*60 + result.finishMinutes*60 + result.finishSeconds;
    result.save(function(err){
        if (err) return res.redirect('/results/new');
        console.log(result);
        res.redirect('/results/index')
    })
}


function deleteResult(req, res) {
    Result.findOne({'results._id': req.params.id, 'results.user': req.user._id})
    .then(function(result){
        if (!result) return res.redirect('/results/index');
        result.remove(req.params._id);
        res.redirect('/results/index');
    }).catch(function(err){
        return next(err);
    })
}