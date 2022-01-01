const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
//const pool = require('pool')
const cors = require("cors");
const mongoose=require("mongoose")
const Tracker=require('./tracker')
const Client =require('./client')


const app = express();
app.use(cors("*"));
const port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//MYSQL

const dburl='mongodb+srv://clinton_3k:m12345@cluster0.aj3q8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


//Get Tracker
app.get("/trackers", async(req, res) => {
  const trackers= await Tracker.find();
  return res.json(trackers)

});

//Get Tracker by id
app.get("/trackers/:id", async(req, res) => {
  const tracker= await Tracker.findById(req.params.id);
  return res.json(tracker)
});

//Delete
app.delete("/trackers/:id", async(req, res) => {
  const tracker= await Tracker.findByIdAndDelete(req.params.id);
  return res.json("deleted")
});

//Add trackers
app.post("/trackers", async(req, res) => {
  const tracker= await Tracker.create(req.body);
  return res.json(tracker)
});

//update request

app.put("/trackers/:id", async(req, res) => {
  const tracker= await Tracker.findByIdAndUpdate(req.params.id,req.body);
  return res.json(tracker)
});

//Get cleint
app.get("/clients", async(req, res) => {
  const client= await Client.find({});
  return res.json(client)
});

//Get Tracker by id
app.get("/clients/:id", async(req, res) => {
  const tracker= await Client.findById(req.params.id);
  return res.json(tracker)
});

//Delete
app.delete("/clients/:id", async(req, res) => {
   await Client.findByIdAndDelete(req.params.id);
  return res.json("cleint deleted")
});

//Add trackers
app.post("/clients", async(req, res) => {
  const client= await Client.create(req.body);
  return res.json(client)
});

//update request

app.put("/clients/:id", async(req, res) => {
  
});

app.listen(port, () => {
  mongoose.connect(dburl).then(()=>console.log("Db connected"))
  console.log("Listen on port ", port)
}
);
