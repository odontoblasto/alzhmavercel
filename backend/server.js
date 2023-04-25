
// const { auth } = require('../frontend/src/config/firebase') 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//const uri = process.env.ATLAS_URI;
const uri =" mongodb+srv://cedfv:Rosinhaalzhma@alzhma.xcomflh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

// const uid = auth.currentUser.uid
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  uid:String,
});

// const resumeSchema = mongoose.Schema({ 
//   attempts:Number,
//   score:Number,  
// });

// const Resume = mongoose.model("Resume",resumeSchema);

// app.post("/resume", (req,res)=>{
//   Resume.create({  
//     attempts:req.body.attempts,
//     score:req.body.score,  
//   })
//   .then((doc)=>console.log(doc))
//   .catch((err)=>(err))
// });

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  res.send("express is here");
});

app.post("/create", (req, res) => {

  Post.create({
    title: req.body.title,
    description: req.body.description,
    uid:req.body.uid,  
  })
  .then((doc)=>console.log(doc))
  .catch((err)=>(err))
  });

app.get("/posts", (req, res) => {
  Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,     
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.listen(3001, function () {
  console.log("Express server is running");
});