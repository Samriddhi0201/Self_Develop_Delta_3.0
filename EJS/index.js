const express = require('express');
const path = require('path');
const app = express();

const port =8080;
// for static files

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"))
app.get("/",(req , res) =>{
    res.render("home.ejs")
});

app.get("/hello",(req , res) =>{
    res.send("hello")
});

app.get("/rolldice", (req , res) =>{
    let num = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs" , {diceValue:num})
});


//----Activity:- Create a basic template for instagram page
//based on following route /ig/:username-----
 app.get("/ig/:username" , (req , res) =>{
    const followers =["Samriddhi", 'Mohit',"Sakshi","Poonam","Mansi" ,"Anjali"]
    let{ username} = req.params;
    console.log(username);
    res.render("instagram.ejs", {username,followers})
 });


 app.get("/igs/:username" , (req , res) =>{
    let { username }=req.params;
    const instaData =require('./views/data.json')
    const data = instaData[username];
    console.log(data)
    if(data){
    // console.log(instaData)
  
    res.render("instagram_data.ejs", { data :instaData[username] })
    }
    else{
        res.render("error.ejs");
    }
});

app.listen(port , () =>{
    console.log(`listening on port ${port}`)
});