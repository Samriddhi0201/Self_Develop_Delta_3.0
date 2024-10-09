const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")
const methodOverride =require('method-override');
const ExpressError = require("./ExpressError.js");


app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs")
app.use(express.static(path.join(__dirname ,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))

main()
.then(() =>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

//Insert data

// let chat1 = new Chat({
//     from : "Samriddhi",
//     to : "Mohit",
//     msg : "I have completed all the tasks given by you.",
//     created_at : new Date()
// });

// chat1.save().then((res) =>{
//     console.log(res);
// })


app.listen(8080 , () =>{
    console.log("Server is Listening on port 8080")
});


app.get("/", (req,res) =>{
    res.send("Root is working")
})

//Index Route  to show all data

app.get("/chats", asyncWrap(async(req, res)=>{
   
        let chats = await Chat.find();
       // console.log(chats);
        res.render("index.ejs" , {chats});
    
   
}));

// New Route

app.get("/chats/new", (req , res) =>{
    //throw new ExpressError(404, "Page not Found");
    res.render("new.ejs")
})

//Create Route

app.post("/chats" , asyncWrap(async(req, res , next)=>{
            let { from , to , msg} = req.body;
            let newChat = new Chat({
                from : from ,
                to : to,
                msg : msg,
                created_at : new Date(),
            });
            // console.log(newChat);
            // newChat.save().then((res)=>{
            //     console.log("Chat was Saved");
            // })
            // .catch((err)=>{
            //     console.log(err)
            // })
            await newChat.save();
            res.redirect("/chats");
    
}));

function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res , next).catch((err)=>next(err));
 };
}
//NEw -Show  Route // for this use db name fake whatsapp
app.get("/chats/:id/", asyncWrap(async(req, res,next ) =>{
        let {id} = req.params;

        //console.log("id" ,id)
        let chat = await Chat.findById(id)
        if(!chat){
            next(new ExpressError(404 , "Chat not Found"));
        }
         res.render("show.ejs", { chat })
}));

//Edit Route
app.get("/chats/:id/edit",asyncWrap(async(req, res) =>{
        let {id} = req.params;
        //console.log("id" ,id)
        let chat = await Chat.findById(id)
         res.render("edit.ejs", { chat })
}));

//Update Route

app.put("/chats/:id", asyncWrap(async(req, res) =>{
        let {id} =req.params;
    let { msg:newMsg } = req.body;
    console.log("new ",newMsg)
    let updatedChat =await Chat.findByIdAndUpdate(
        id, 
        { msg : newMsg },
        { runValidators : true , new: true }
    );

    //console.log("update",updatedChat);
    res.redirect("/chats");
}));

//Delete Route

app.delete("/chats/:id" , asyncWrap(async(req, res) =>{
        let {id } = req.params;
    let deletedChat =  await Chat.findByIdAndDelete(id);
    console.log(deletedChat)
    res.redirect("/chats")
}));

const handleValidationErr =(err)=>{
    console.log("This was a validation error.Please follow rules");
    console.dir(err.message);
    return err;
}
app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name == "ValidationError"){
       err = handleValidationErr(err);
    }
    next(err);
});


//Error Handling Middleware
app.use((err , req , res , next)=>{
    let { status=500 , message="Some error occured" }= err;
    res.status(status).send(message);
});