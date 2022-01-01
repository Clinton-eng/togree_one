const mongoose=require("mongoose")

const trackerSchema=new mongoose.Schema({
    imei:String,
    model:String,
    description:String,
  
})

const Tracker=mongoose.model('Tracker',trackerSchema);

module.exports=Tracker;