
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const service = new Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String,
});






// Services.create([
    //     {
    //         icon:'fa-brands fa-accusoft fa-fade service_icon',
    //         title:'Provide Best Courses',
    //         description:'We provide courses to help our student to gain theory as well as practical knowledge',
    //         linkText:'https://www.google.com',
    //         link:'Check',
    //     },
    //     {
    //         icon:'fa-solid fa-circle-info fa-fade',
    //         title:'Learn with us',
    //         description:'We provide courses to help our student to gain theory as well as practical knowledge',
    //         linkText:'https://www.google.com',
    //         link:'More',
    //     },
    //     {
    //         icon:'fa-solid fa-folder fa-fade',
    //         title:'Our Courses',
    //         description:'We provide courses to help our student to gain theory as well as practical knowledge',
    //         linkText:'https://www.google.com',
    //         link:'Check',
    //     },

        
    // ])

module.exports=mongoose.model("service",service);