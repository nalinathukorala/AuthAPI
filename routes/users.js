const express = require('express');
const router = express.Router();

router.get("",function(req,res){ 
    res.send("Hello world uers 434");
});

module.exports = router;