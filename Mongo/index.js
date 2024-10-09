const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
})

//Creating collection
const User = mongoose.model("User" , userSchema);
//const Employee = mongoose.model("Employee", userSchema);

// Insert data into collection

// const user1 = new User({
//     name: "Adam",
//     email:"adam@yahoo.in",
//     age: 48,
// });

// const user2 = new User({
//     name: "Eve",
//     email:"eve@yahoo.in",
//     age: 48,
// });

// user1.save();
// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });


// User.insertMany([
//     {name : "Tony" , email:"tony@gmail.com" , age:50},
//     {name :"Bruce" , email:"bruce@gmail.com", age:47},
//     {name:"Peter", email:"peter@gmail.com" , age: 30},
// ]).then((data)=>{
//    console.log(data);
// });


//Find

// User.findById("66fecc1d006161fc7b0241dc")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// })

//Update

User.findByIdAndUpdate({_id: "66fec9c32434150892ebe203"},{age : 58},{new :true}).then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err)
})

User.deleteMany({age: {$gt : 40}}).then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err)
})