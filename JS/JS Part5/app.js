const  student = {
    name: "Samriddhi",
    age :23,
    marks: 94.4,
    city: "Gurugram"
};
console.log(student);
console.log(student.city);
student.city ="Kanpur";
console.log(student.city);
console.log(student);
student.gender;
 student.gender = "female";
 console.log(student);
 console.log(student.gender);
 student.marks = "A";
 console.log(student);


const item = {
    price :100,
    discount: 50,
    colors: ["red" ,"pink"]
};
console.log(item )

const post = {
    username : "@samriddhimishra",
    content : "This is my #firstpost",
    likes : 150,
    repost :50,
    tags : ["@apnacollege", "@delta"] 
};
console.log(post);
console.log(post["likes"])
console.log(post.username);



const obj = {
    1: "a",
    2: "b",
    true : "c",
    null : "d",
    undefined: "e"
};
console.log(obj)
console.log(obj[1])



const ClassInfo = {
    aman:{
        grade : "A+",
        city :"delhi"
    },
    sharddha:{
        grade:"A",
        city:"Pune" 
    },
    Rahul:{
        grade : "B+",
        city : "Lucknow"
    }
}
console.log(ClassInfo);
console.log(ClassInfo.sharddha);


const ClassData = [
    {
        name: "Samriddhi",
        grade: "A+",
        city :"Gurugram"
    },
    {
        name: "Mohit",
        grade:"A",
        city:"Pune" 
    },
    {
        name: "Sakshi",
        grade : "B+",
        city : "Lucknow"
    }
]
console.log(ClassData);

//Ranom Integers

let num  = Math.random ();  //Step 1
console.log(num);
num = num *10;   //Step2
console.log(num);
num = Math.floor(num);  //Step3
console.log(num);
num = num +1   //Step4
console.log(num)

let num1 = Math.floor(Math.random() * 10) + 1 ;
console.log(num1);