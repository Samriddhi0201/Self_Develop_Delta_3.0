//Solution of Q1
let color = "red";
if (color === "red"){
    console.log(`Stop! light color is ${color}`);
}
if (color === "yellow"){
    console.log(`Slow Down. light color is ${color}`);
}
if (color === "green"){
    console.log(`Go. light color is ${color}`);
}


// Solution of Q2
let size ='L';
if (size === "XL"){
    console.log(`Price of   ${size} PopCorn is Rs.250`);
}
if (size === "L"){
    console.log(`Price of   ${size} PopCorn is Rs.200`);
}
if (size === "M"){
    console.log(`Price of   ${size} PopCorn is Rs.100`);
}
if (size === "S"){
    console.log(`Price of   ${size} PopCorn is Rs.50`);
}


//Solution of Q3

let str = "ambition";
if(str[0] === "a" && str.length > 3){
    console.log(`String ${str} is Good String with ${str.length} `)
}
else{
    console.log(`String ${str} is Bad String with ${str.length} `)
}

// Solution of Q4
let num = 12;
if((num%3 === 0)&& (num+1 ) == 15 || (num-1)==11){
     console.log("safe");
     } 
else {
    console.log("unsafe") ;
}

// Solution of Q5 
let days = 7;
switch(days){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break; 
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;      
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
      console.log("You Have Entered Wrong Number of Day.")
}