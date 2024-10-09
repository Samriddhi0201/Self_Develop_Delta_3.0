for (let i = 1 ; i <= 5 ; i++) {
    console.log(i)
}

//Print all ODD Numbers between 1 to 15
for (let i = 1; i<=15 ; i++){
    if(i%2 == 1)
      console.log(`Odd Number between 1 to 15 is ${i}`)
}

for (let i = 1; i<=15 ; i= i+2){
    console.log(`Odd Number between is ${i}`)
}  


//Even

for( let i =2 ; i<=10 ; i++){
    if(i % 2 == 0)
    console.log(`Evem Number between 2 to 10 is ${i}`);
}

//table
for(let i = 5 ; i <= 50; i=i+5 ){
    console.log(`Multiplication table for 5 is ${i}`);
}

let n = prompt("Enter the Number from which you want table");
n = parseInt(n);
for(let i = n ; i <= n * 10 ; i=i+n ){
    console.log(`Multiplication table of given number ${n}  is ${i}`);
}



//Break
let i;
while(i <= 5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}
console.log("We used break at 3");

//Nested Loop
let heroes =[['Iroman' , 'Spiderman' , 'Thor'] , 
['Superman' , 'WonderWomen' , 'Flash' ,]];
for(let i = 0 ; i< heroes.length ; i++){
    console.log(`List # ${i}`);
    for(let j = 0 ; j< heroes[i].length ; j++){
        console.log(heroes[i][j]);
        
    } 
} 


//For of

let fruits = ["Apple" , "Mango" , "Banana" ,"Grapes"];
for(fruit of fruits){
    console.log(fruit);
}

for (char of "ApnaCollege"){
    console.log(char);
}

//Nested For of

let hero =[['Iroman' , 'Spiderman' , 'Thor'] , 
['Superman' , 'WonderWomen' , 'Flash' ,]];
for(list of hero){
    for(heroes of list){
        console.log(heroes);
    }
}