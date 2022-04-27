const Result = require('../models/result');
const User = require('../models/user');

module.exports = {
    create
}



function create(req, res) {
    Result.findById(req.params.id, function(err, result) {
    req.body.user = req.user._id;
    req.body.name = req.user.name;  
    result.exComments.push(req.body);
    result.save(function(err) {
      console.log(result.exComments);
        res.redirect(`/results/${req.params.id}`);
      });
    });
  }