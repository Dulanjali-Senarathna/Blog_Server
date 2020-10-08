const express = require ("express");
const mongoose = require ("mongoose");

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const app = express();

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connected");
})

const Port = process.env.port || 5000;

app.route("/").get((req,res)=>res.json("your first rest api 1"));

app.listen(Port,()=>console.log(`your server is running on port ${Port}`));
