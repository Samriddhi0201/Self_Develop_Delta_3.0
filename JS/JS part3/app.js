// string Methods

let msg = "  Hello "
console.log(msg)
messTrim = msg.trim();
console.log(messTrim);


let name = "Samriddhi Mishra"
console.log(name);
let upper =name.toUpperCase();
let lower =name.toLowerCase();
console.log(`Name in UpperCase ${upper}`);
console.log(`Name in lowerCase ${lower}`);



let str ="ILoveCoding"
let index= str.indexOf("Love");
let index1= str.indexOf("j");
console.log(`Index of love in string ${index}`);
console.log(`Index of j in string ${index1}`);

let message = "   Hello   "
console.log(message)
let newMessage = message.toUpperCase().trim();
console.log(newMessage)

let mess = "Samriddhi"
let slicedMess =mess.slice(3)
console.log(`slice string is ${slicedMess}`)


let  string = "I Love Coding"
console.log(string)
replacedString = string.replace('Coding' , 'India');
console.log(`Replace string is ${replacedString}`);


let  repString = "Mango"
console.log(repString)
repeatedString = repString.repeat(5);
console.log(`Replace string is ${repeatedString}`);





//Arrays
 
let students = ['samriddhi','sammu','mohit','sakshi','mansi'];
console.log(students)
let len = students.length;
console.log(len)
console.log([1,2,3,4].length)
console.log(students[0])
console.log(students[3][4])

let fruits = ["apple","mango","grapes"];
console.log(`Original fruit array ${fruits}`);
fruits[3] = "litchi";
console.log(`Changed fruit array ${fruits}`);
fruits[12] ="guava";
console.log(`Changed fruit array ${fruits}`);
fruits[0]="banana";
console.log(`Changed fruit array ${fruits}`);


let cars =["Audi","BMW","XUV","Maruti"]
console.log(cars)
cars.push("Ferrari")
console.log(`After Push array is ${cars}`)
cars.push("Toyota", "Hyundai")
console.log(`After Push array is ${cars}`)
cars.pop()
console.log(`After pop array is ${cars}`)
cars.unshift("Hyundai")
console.log(`After Unshift array is ${cars}`)
cars.shift()
console.log(`After shift array is ${cars}`)


//array method
let colors = ['red','blue','green', 'pink'];
console.log(colors);
//indexOf
let ind = colors.indexOf('pink');
let inde = colors.indexOf('PINK');
console.log(`index of pink  color is ${ind}`);
console.log(`index of pink  color is ${inde}`);
//includes
let presence =colors.includes('pink');
console.log(`Presence of pink  color is ${presence}`);
let presences =colors.includes('yellow');
console.log(`Presence of yellow  color is ${presences}`);
//concat
let color = ['yellow', 'cyan','white'];
let combineColor =colors.concat(color);
console.log(`Concatenated color array is ${combineColor}`);
//reverse
let reverseColor =combineColor.reverse();
console.log(`Reversed color array is ${reverseColor}`);
//slice
let sliceColor = combineColor.slice(2);
console.log(`Sliced color array is ${sliceColor}`);
let slicedColor =combineColor.slice(-2);
console.log(`Sliced color array is ${slicedColor}`);

//splice

let Color =['red','yellow','blue','green', 'orange','pink'];
console.log(Color)
let splicedColor = Color.splice(0,1,"blue","green")
console.log(`Spliced color array is ${splicedColor}`);

//sort
let squares= [25,16,4,49,36,9];
console.log(squares)
let sortedSquare= squares.sort();
console.log(`Sorted Square is ${sortedSquare}`)



//Nested Arrays

let num = [[1,2],[3,4],[5,6]]
console.log(num)
console.log(`Element at 00 is ${num[0][0]}`)
