const {faker} = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = "8080";
const path = require('path');
const methodOverride =require('method-override');

const { v4: uuidv4 } = require("uuid");



const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'delta_app',
    password : 'Mohit@737692'
});

app.set("viewengine", "ejs");
app.set("views" , path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}))

let getRandomUser =() => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// let q ="SHOW TABLES";

// //Insert data
// let q1 ="INSERT INTO user (id, username , email, password) VALUES ? ";
// let users = [
//     ["125", "125_newuser" , "abcde@gmail.com", "abcde"],["124", "124_newuser" , "abcd@gmail.com","abcd"]];


// let data =[];
// for(let i =0 ; i<=100; i++){
//     data.push(getRandomUser());
// }


//---Fetch and show total number of user
app.get('/' , (req, res) =>{
    let q = "SELECT count(*) FROM user ";
    try{
        connection.query(q , (err, result) =>{
            if (err)  throw err;
            console.log(result[0]["count(*)"]);
            let count =result[0]["count(*)"];
            res.render("home.ejs",{count});
            // console.log(result.length);
            // console.log(result[0]);
            // console.log(result[1]);
        })
        }
        catch(err){
            console.log(err);
            res.send("Some error in databse");
        }
});


// Fetch and show details
app.get('/user' , (req, res) =>{
    let q = "SELECT * FROM user ";
    try{
        connection.query(q , (err, users) =>{
            if (err)  throw err;
           
          
            res.render("users.ejs",{ users });
            // console.log(result.length);
            // console.log(result[0]);
            // console.log(result[1]);
        })
        }
        catch(err){
            console.log(err);
            res.send("Some error occured in database");
        }
})


//Edit Route

app.get('/user/:id/edit' , (req, res) =>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q , (err, result) =>{
            if (err)  throw err;
            let user =result[0]
           console.log("abc", result);
          console.log(id)
            res.render("edit.ejs",{ user });
       
        })
        }
        catch(err){
            console.log(err);
            res.send("Some error occured in database");
        }
    console.log(id)
    }) 

//UPDATE ROUTE

app.patch('/user/:id' ,(req , res) =>{
    let { id } = req.params;
    console.log("aa", id)
    let q = `SELECT * FROM user WHERE id='${id}'`;
   let {password : formPass, username: newUsername} =req.body;
    try{
        connection.query(q , (err, result) =>{
            if (err)  throw err;
            let user =result[0]
            if(formPass != user.password){
                res.send("Wrong Password");
            }
            else{
                let q2 =`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                console.log(q2)
                connection.query(q2, (err, result) =>{
                     if (err) throw err;
                     res.redirect("/user");
                })

            }
           res.send(user)   
        })  
    }
    catch(err){
            console.log(err);
            res.send("Some error occured in database");
    }
   
})


// New USer

app.get("/user/new", (req, res) => {
    res.render("new.ejs");
  });
app.post("/user/new" , (req , res) =>{
    let { username, email, password } = req.body;
    let id = uuidv4();
    let q =`INSERT INTO user (id, username , email, password) VALUES ('${id}','${username}','${email}','${password}')  `;
    try{
        connection.query(q , (err, users) =>{
            if (err)  throw err;
            console.log("added new user");
            console.log(users)
             res.redirect("/user");
        
        })
        }
        catch(err){
            console.log(err);
            res.send("Some error occured in database");
        }
})

//Delet user

app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });

app.listen(port , ()=>{
    console.log("Listening to port : 8080");
})
