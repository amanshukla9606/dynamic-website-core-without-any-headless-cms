//main file for all the important work
//importing all the required modules
const hbs = require("hbs");
const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
//schema models
const Detail = require("./models/Detail"); 
const Slider = require("./models/Slider"); 
const Services= require("./models/Service_boxes"); 


const app = express();


app.use(bodyParser.urlencoded({           
    extended:false                       
}));


const routes = require('./routes/main');
app.use('',routes);


app.use("/static" ,express.static("public"));


app.set('view engine','hbs');


app.set("views","views");


hbs.registerPartials("views/partials");


mongoose.connect("mongodb://0.0.0.0/website_tut");
    //schema creation should be done here only
    

//for checking if the database is connected or not
const conn= mongoose.connection;
conn.once('open', () => {
    console.log('successfully connected to the local mongodb')
});
conn.on('error', ()=> {
    console.log('error connecting to the database') 
});


// listning our site por like localhost:5556 
app.listen(80,()=>{
    console.log('the server has been started')

});

