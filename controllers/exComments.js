const Result = require('../models/result');
const User = require('../models/user');
// const ExComment = require('../models/exComments');

module.exports = {
    create, 
    delete: deleteComment
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


  function deleteComment(req, res) {
    Result.findOne({'exComments._id': req.params.id, 'exComments.user': req.user._id})
    .then(function(result){
      if (!result) return res.redirect('/results/index');
      result.exComments.remove(req.params.id);
      result.save().then(function(){
        res.redirect(`/results/${result._id}`);
      }).catch(function(err){
        return next(err)
      });
    });
  }

