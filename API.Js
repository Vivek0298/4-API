const express = require('express');
const app = express();
const port = 3000;

app.get('/',function(req,res) {
    res.send("This is my homepage");
    res.end();
})

app.get('/contactus', function(req,res){
    res.send("You have successfully contacted us");
    res.end();
})

app.get('/explore',function(req,res){
    res.send("You have explored");
    res.end();
})

app.get('/homie',function (req,res){
    res.send("You mah homie now");
    res.end();    
})

app.listen(port,function() {
    console.log("Successfully Listening at 3000")
})
