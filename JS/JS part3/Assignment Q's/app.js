// Solution of Q1

let firstArray = [7, 9, 0, -2];
let num =3;
console.log(firstArray);
let newFirstArray = firstArray.slice(0,num);
console.log(newFirstArray);

// Solution of Q2

let array = [7, 9, 0, -2];
let n =3;
console.log(array);
let newArray = array.slice(array.length - n);
console.log(newArray);


// Solution of Q3

let newString = "Samriddhi"
console.log(`Entered String is ${newString}`);
if (newString === ""){
    console.log(`Entered String is blank ${newString}.`);
}
else{
    console.log(`Entered String is not  blank ${newString}.`);
}


// Solution of Q4

let word ="This is Samriddhi MisHra";
console.log(word);
let index = 21;
if(word[index]=== word[index].toLowerCase()){
    console.log(`Entered index character is in lower Case and character at that index will be ${word[index]}`);
}
else{
    console.log(`Entered index character is not in lower Case and character at that index will be ${word[index]}`);
}


// Solution of Q5

let sentence = "   This is my First Assignment of Array and String         ";
let newSentence = sentence.trim();
console.log(`sentence before stripping leading and trailing space from it: ${sentence}`);
console.log(`sentence after stripping leading and trailing space from it:${newSentence}`);


// Solution of Q6
 
let arr = [34 , 54 , 69 , 70 , 78 , 58];
console.log(`Entered Array is ${arr}`);
let findElement =39;

console.log(`Number to be found in array is ${findElement}`);
for(let i = 0 ; i < arr.length ; i++){
    if(findElement == arr[i]){
        console.log(`Number is exist inside array and placed at ${i} and number is ${findElement} `);
        break;
    }
      
}
    console.log(`Number does not exist inside array and number is ${findElement} `);
