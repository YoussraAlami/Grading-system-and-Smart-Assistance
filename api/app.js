const mongoose = require('mongoose');

const express =require('express')
const app=express();
var cors=require("cors"); //for HttpClient 



app.use(cors()); //HttpClient

app.get('/',(req,res)=>{
  res.send("Welcome to express");
});

app.listen(4001, ()=>{
console.log("listening to port 4001");
});

///////////////////////// DB connection //////////////////////////////
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Evaluation')
    .then(console.log("Connected to Evaluation"))
    .catch(error => console.log(error));

///////////////////////routes Declaration ////////////////////////////


var usersRouter = require('./routes/user');
var questionRouter = require('./routes/question');
var evaluationRouter = require('./routes/question');
//////////////////////////////Route///////////////////////////////////////

app.use('/user', usersRouter);
app.use('/question',questionRouter)
app.use('/evaluation',evaluationRouter)


///////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = app;


