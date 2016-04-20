var express=require('express'),
    router=express.Router()


router.use('/users',require('./users'));

//entry point for all controller
router.get('/',function(){
    res.send('This is main controller');
});

module.exports=router;
