const express = require('express');
const mongoose = require("mongoose");
const app = express();
const newUser = require("../models/new.js");

mongoose.connect("mongodb+srv://CEMS_admin:pass@cems.5le7maf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(()=>{
    app.get('/user', async (req, res)=>{
        const user = await newUser.find();
        res.send({ data : user})
    });
    app.listen(8000, ()=>{
        console.log("server has started at port 8000");
    });
}).catch(()=>{
    console.log("can't connect to database");
});


