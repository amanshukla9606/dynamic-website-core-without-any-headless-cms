const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contact = new Schema({
    email:String,
    phone:String,
    password:String,
    query:String,

});


module.exports=mongoose.model("submission",contact); 