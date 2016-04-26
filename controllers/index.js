var express=require('express')
    ,app=express()
    ,router=express.Router()
    ,jwt=require('jsonwebtoken')


router.use('/users',require('./users'));
router.use('/auth',require('./auth'));

//home page
router.get('/',function(req,res) {

    var user={
        username:'wfwefwefs',
        password:'passddword',
        email:'tedwdst@test.com'
    };
    // create a token
    var token = jwt.sign(user, '####@dew#@', {
        expiresInMinutes: 1 // expires in 24 hours
    });

    // return the information including token as JSON
    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
    });
    //res.send('This is main controller');
});

module.exports=router;
