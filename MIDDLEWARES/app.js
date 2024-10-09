const express = require("express");
const app = express(); 
const ExpressError = require("./ExpressError");


//middleware send response  it will not aLLOW to send res generated on line 7 

// app.get("/" , (req, res)=>{
//     res.send()
// })

// app.use((req, res, next)=>{
//     console.log("Hi, I am first middleware")
    
//     return  next();  //code should not return after next

// })
// app.use((req, res, next)=>{
//     console.log("Hi, I am second middleware")
    
//     next();
// })

app.use("/random" , (req,res, next)=>{
    console.log("This is a only for random page");
    next();
})

const checkToken = (req, res , next)=>{
    let {token }= req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
};
app.get("/api",checkToken ,(req, res)=>{
    res.send("data")
})

app.get("/err", (req,res)=>{
    abcd=abcd;
});


app.get("/admin", (req,res)=>{
    //name=name;
    throw new ExpressError(403, "Access to Admin is Denied!");
});

app.use((err, req , res , next)=>{
    console.log("-----ERROR-----");
    let { status=500 , message="Some error occur" }= err;
    res.status(status).send(message);
})





app.get("/" , (req, res) =>{
    res.send("Hi, I am a root ")
})

app.get("/random" , (req,res)=>{
    res.send("This is a random page");
})

//logger-morgan
// app.use ((req, res , next)=>{
//     req.time = Date(Date.now()).toString();
//     console.log(req.method, req.hostname , req.path, req.time);
//     next();
// });

// //404
// app.use((req, res) =>{

//     res.status(404).send("Page not found!")
// })

app.listen(8080 , () =>{
    console.log("Server Listening to port 8080");
})