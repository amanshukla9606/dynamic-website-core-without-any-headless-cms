const mongoose = require("mongoose");
const Schema2 = mongoose.Schema;
const Slider = new Schema2({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String
});

module.exports=mongoose.model("slider",Slider); //  making new collection slider for our slider file





//schema code
// Slider.create([

    //         {
    //             title:"Welcome to the Tech Builders",
    //             subTitle:"You tech journey begins from here",
    //             imageUrl:"/static/images/slide1.jpg",
    //         },

    //         {
    //          title:"Who are we",
    //          subTitle:"We are the tech enterprenaur who are building the new world tech",
    //          imageUrl:"/static/images/slide3.jpg",
    //         },

    //         {
    //             title:"Our aim",
    //             subTitle:"Our aim is to improve and equip the world with the latest tech",
    //             imageUrl:"/static/images/slide5.jpg",
    //         },

    //     ]); 