const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("Welcome to The Cloud Enthusiast first Docker Container App! This was my first attempt to create a Docker App");
});

app.listen(3000, function () {
    console.log("app listening on port 3000");
});