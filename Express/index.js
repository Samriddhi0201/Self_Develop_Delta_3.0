const express = require('express');
const app = express();

//console.dir(app)

let port =8080;

//-------connecting with server--------

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`)
});


//--------handling Request-------------

// app.use((req , res) =>{     //listen all the request 
//  //   console.log(req);
//     console.log("Request Recieved");

// //----------Sending a Response----------


//    // res.send("This is a basic response");
//    //Json Format
//     // res.send({
//     //     name: "Apple",
//     //     color: "red",
//     // });
//     //html format

//     let code ="<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li><li>Orange</li><li>Banana</li></ul>"
//     res.send(code);
// });





// listen single request 
app.get("/" ,(req , res) => {
    res.send("hello i am root");

});
app.get("/:username/:id" ,(req , res) => {
    let {username , id } = req.params;
    console.log(req.params);
    console.log(`Welcome to @ ${username} with id:- ${id}`)
    res.send("hello i am root");

});

app.get("/search", (req , res)=>{
    console.log(req.query);
    let { q } =req.query;
    if(!q){
       res.send(`<h1>Nothing search</h1>`) 
    }
    res.send(`<h1>search results for query : ${q}</h1>`);
});
// app.get("/banana" ,(req , res) => {
//     res.send("You contacted banana path");

// });
// app.get("/apple" ,(req , res) => {
//     res.send("You contacted apple path");

// });
// app.get("/mango" ,(req , res) => {
//     res.send("You contacted mango path");

// });
// app.get("*" ,(req , res) => {
//     res.send("This path does not exists");

// });

// app.post("/" ,(req , res) => {
//     res.send("You sent a post request to root path");

// });