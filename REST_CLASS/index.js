const express = require('express');
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} =require('uuid');
const methodOverride = require('method-override')


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set("view engine", "ejs"); // Corrected key
app.use(express.json()); 
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// app.use(express.urlencoded({extended: true}))
// app.set("viewengine", "ejs");
// app.set("views",  path.join(__dirname , "views"));

// app.use(express.static(path.join(__dirname , "public")));

let posts = [
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "I Love Coding",
    },
    {
        id : uuidv4(),
        username : "Samriddhi Mishra",
        content : "Hard Work is important to achieve success",
    },
    {
        id :uuidv4(),
        username : "Mohit Sharma",
        content : "I have completed 2-year as a Python-Automation tester",
    }
];


app.get("/posts" , (res, req)=> {
    req.render("index.ejs",{posts});
});

app.get("/posts/new" , (req,res)=>{
    res.render("new.ejs")
})

app.post("/posts" , (req , res) =>{
    let {username , content} = req.body;
    console.log(req.body)
    let id = uuidv4();
    posts.push({id, username , content})
    res.redirect('/posts')
})


app.get("/posts/:id" , (req,res)=>{
    let {id} =req.params;
   let post =posts.find((p) =>id === p.id);
   console.log(post)
    // res.send("Request working")
    res.render("show.ejs", {post})
})

app.patch("/posts/:id" , (req,res)=>{
    let {id} =req.params;
    let newContent = req.body.content;
    let post =posts.find((p) =>id === p.id);
    post.content =newContent;
    console.log(post);
    console.log(newContent);
    console.log(id);
    res.redirect("/posts")
})

app.get("/posts/:id/edit" , (req,res)=>{
    let {id} =req.params;
    let post =posts.find((p) =>id === p.id);
    // console.log(id);
    // console.log(post);
    res.render("edit.ejs", {post} )
})

app.delete("/posts/:id", (req , res)=>{
    let {id} =req.params;
     posts =posts.filter((p) =>id !== p.id);
     res.redirect("/posts")
   
})

app.listen(port , ()=>{
    console.log("Listening to port : 8080");
})