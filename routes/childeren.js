const express  =  require('express');
const router =express.Router()

router.get('/api',function(req,res){
    res.send('Api');
});

router.get('/we/are',function(req,res){
    res.send('we are route');
});

module.exports = router
