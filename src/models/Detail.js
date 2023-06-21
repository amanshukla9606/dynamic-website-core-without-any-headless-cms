const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const details = new Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
    {
        label:String,
        url:String,
    },
        ],
    

});

module.exports=mongoose.model("detail",details);



// to be used in app.js to create a dynamic database of our navbar
//  Detail.create(
//     {

//     brandName:"The Tech Builders" ,
//     brandIconUrl:"https://icons-for-free.com/iconfiles/png/512/computer+creative+html+process+technology+web+development+icon-1320162567973015882.png",
//     links:[ 
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services" 
//         },
//         {
//             label:"Gallery",
//             url:"/gallery" 
//         },
//         {
//             label:"About",
//             url:"/about" 
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us" 
//         },
// ] 
// });  










//another example of schema creation


// const mongoose = require('mongoose');

// const details = mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String, required: true },
//   userId: { type: String, required: true },
//   price: { type: Number, required: true },
// });

// module.exports = mongoose.model('detail', details);