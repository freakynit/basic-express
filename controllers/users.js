var express = require('express'),
    router = express.Router(),
    UserList=require('../model/users'),
    user=new UserList();


// return all users
router.get('/',function(req,res){
  res.send(user.all());
});

//save user
router.get('/save',function(req,res){
  user.save('aaa');
  res.send('User saved');
});

user.on("saved-user", function (user) {
    console.log("saved: " + user);
});

module.exports = router;
