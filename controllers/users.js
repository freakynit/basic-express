var express = require('express'),
    router = express.Router(),
    user=require('../model/users');


// return all users
router.get('/',function(req,res){
  res.send(user.all());
});

// return user by id
router.get('/:id',function(req,res){
  user.get(req.param.id,function(err,users){
    res.send(users);
  })
});


module.exports = router;
