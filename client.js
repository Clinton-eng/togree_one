const mongoose=require("mongoose")

const clientSchema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    phone:String,
    email:String
})

const Client=mongoose.model('Client',clientSchema);

module.exports=Client;