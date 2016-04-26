var express=require('express')
    ,app=express()
    ,router=express.Router()
    ,jwt=require('jsonwebtoken')


router.use('/users',require('./users'));

//home page
router.get('/',function(req,res) {
    res.send('This is main controller');
});


module.exports=router;
