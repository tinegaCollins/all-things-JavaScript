const express = require('express');
const mongoose = require("mongoose");
const newConUser = require("./controllers/new.js")



mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
}).then(()=>{
    const app = express();
    app.use(express.json());
    app.get('/user', newConUser.findUser);
    app.post('/user', newConUser.createUser);
    app.post('/comment', newConUser.addComments);
    app.get('/comment', newConUser.allComments);
    app.get('/one/:id', newConUser.findBy);
    app.patch('/comment/:id', newConUser.updateComment);
    app.delete('/comment/:id', newConUser.deletethis);
    app.listen(8000, ()=>{
        console.log("server has started at port 8000");
    });
}).catch(()=>{
    console.log("can't connect to database");
});


