//seprate file to control all the routings request like get or post using the express module only and here the other imports are the schema models in the modle folder
const express = require("express");
const { route } = require('express/lib/application'); //this line is not compulsory
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const services= require('../models/Service_boxes');
const Contact = require("../models/Contact");
const Register = require("../models/register");
const register = require("../models/register");

const routes = express.Router();


routes.get("/", async (req,res)=>{ 
    const details= await Detail.findOne({"_id":"6487592187dd82b643136892"})                                                                          
    const slides=await Slider.find()                                      
    const service=await services.find()
    res.render("index",{
        details:details,              
        slides:slides,
        service:service                
    })

});


routes.get("/gallery", async(req,res)=>{
    const details= await Detail.findOne({"_id":"6487592187dd82b643136892"})
    res.render("gallery2",{
        details:details})    
}); 


routes.get("/login", async(req,res)=>{
    const details= await Detail.findOne({"_id":"6487592187dd82b643136892"})
    res.render("loginpage",{
        details:details})    
}); 

routes.get("/register", async(req,res)=>{
    const details= await Detail.findOne({"_id":"6487592187dd82b643136892"})        //thsese lines should be attached to every page coding otherwisse navbar will not work    because navbar things are stored in the database
    res.render("register",{
        details:details})    
});


routes.post("/process-contact-form", async (req,res) => {
    console.log("Your Form Has Been Successfully Submitted");
    

    try
    {
        const data=await Contact.create(req.body);     
        console.log(data)           
        res.redirect("/")            
    }
    catch(e)
    {
        console.log(e)
        res.redirect("/")                 
    }

});

//registration

routes.post("/process-register-form", async (req,res) => {
    
    

    try
    {
        const passsword = req.body.password;            //to check wheater pass ate same or not
        const confirmpass= req.body.confirm;

        if (passsword === confirmpass)
        {
            const data=await Register.create(req.body); 
            console.log("You have succesfully registered");              
            res.redirect("/login");
        } else
        {
            res.send("Passwords are not matching");
        }
            
    }
    catch(e)
    {    
        
        console.log(e);
        res.redirect("/");              
    }

});


//login



module.exports=routes                      