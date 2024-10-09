const mongoose = require("mongoose");

const Chat = require("./models/chat.js")

main()
.then(() =>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats =[
    {
    from : "Neha",
    to : "Preeti",
    msg : "send me Notes.",
    created_at : new Date()
    },
    {
        from : "Rohit",
        to : "Raddha",
        msg : "Teach me JS callbacks",
        created_at : new Date()
    },
    {
        from : "Amit",
        to : "Sumit",
        msg : "All the Best.",
        created_at : new Date()
    },
    {
        from : "Anita",
        to : "Ramesh",
        msg : "Bring maths notes for me.",
        created_at : new Date()
    },
    {
        from : "Tony",
        to : "Peter",
        msg : "Drop Me Please.",
        created_at : new Date()
    },

]

Chat.insertMany(allChats)