//Solution of Q1
let num = 120;
if (num % 10 == 0){
    console.log(`${num } is a Good`);
}
else{
    console.log(`${num } is Bad`);
}


//Solution of Q2
let name = prompt("Enter your Full Name.");
let age = prompt("Enter your age.");
alert(`${name} is ${age} years old.`);


//Solution of Q3

let Quarter = 3;
switch(Quarter){
    case 1:
        console.log(`Month in Quarter ${Quarter} : January , Feburary , March`);
        break;
    case 2:
        console.log(`Month in Quarter ${Quarter} : April , May , June`);
        break;
    case 3:
        console.log(`Month in Quarter ${Quarter} : July , August , September`);
        break;    
    case 4:
        console.log(`Month in Quarter ${Quarter} : October , November , December`);
        break;
    default:
        console.log(`Entered wrong Quarter ${Quarter}.`)
}


// Solution of Q4
let str = "Ambition";
if((str[0] === 'A' || str[0] ==='a') && (str.length > 5)){
    console.log(`Entered String ${str} is a Golden String with length ${str.length}`);
}
else{
    console.log(`Entered String ${str} is not a Golden String with length ${str.length}`);
}


//Solution of  Q5
let firstNum = 20;
let secondNum =55;
let thirdNum =35;
if( firstNum > secondNum){
    if( firstNum > thirdNum){
    console.log(`${firstNum} is largest`);
    }
    else{
        console.log(`${thirdNum} is largest`);
    } 
}
else{
    if( secondNum > thirdNum){
        console.log(`${secondNum} is largest`);
        }
        else{
            console.log(`${thirdNum} is largest`);
        } 
}

// Solution of Q6

let num1 =32;
let num2 = 47852;
if((num1 % 10 ) === (num2 % 10)){
    console.log(`${num1} and ${num2} have the same last digit i.e ${num1%10}, ${num2%10}` )
}
else{
    console.log(`${num1} and ${num2} does not have the same last digit i.e ${num1%10}, ${num2%10} ` )
}
