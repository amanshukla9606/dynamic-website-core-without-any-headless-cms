const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registration = new Schema({
    name:String,
    email:String,
    password:String,
    confirm:String,

});


module.exports=mongoose.model("register",registration);









// to always create data that is not of similar type with this schema we can use the type and unique attributes for eg the schema will onnly worl if the defined parameters are true
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const registration = new Schema({

//     name: {
        // type:String;
        // reequired:true
//   },
     

// });