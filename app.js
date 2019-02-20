const express = require('express');
const app = express();
const path = require('path');
const user = require('./routes/users');

const child = require('./routes/childeren');

app.use('/',child);

app.use('/user',user); 

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.listen(3000,function() { 
    console.log("Wecome to Port 3000!");
});