// Solution of Q1

let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;
//elements larger than a number num 
function getElements(arr,num){
    for(let i=0 ; i<arr.length ; i++)
    {
        if(arr[i] > num)
        {
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);


// Solution of Q2

let str = "abcdabcdefgggh";
 function uniqueCharacter (str){
    let finalStr = "";
    for (let i =0 ; i < str.length ; i++){
        let newStr= str[i];
        if(finalStr.indexOf(newStr) == -1){
           finalStr += newStr;
        }
    }
    return finalStr;
 }
let uniqueStr = uniqueCharacter(str);
console.log(uniqueStr);

// Solution of Q3

let country =["Australia" ,"Germany" , "United States of America"];
function getLongestCountry(country){
    let idx = 0;
    for (let i = 0 ; i < country.length ; i++){
        let ansLen=country[idx].length;
        let countryLength = country[i].length;
        if(countryLength > ansLen)
        {
            idx = i;
        }
       
    }
    return country[idx];
}
let longestCountry = getLongestCountry(country);
console.log(longestCountry);

// Solution of Q4

let str1="apnacollege";
function countVowels(str) {
    let count=0;
    for(let i=0; i < str.length ; i++){
        if(str.charAt(i)=="a" || str.charAt(i)=="e" || str.charAt(i)=="i" || str.charAt(i)=="o" || str.charAt(i)=="u"){
            count++;
        }
    }
    return count;
} 
let vowelCount = countVowels(str1);
console.log(vowelCount);


// Solution of Q5

let start = 200;
let end = 500;
function generateRandomNo(){
    let diff = end-start;
    let num = Math.floor(Math.random()*diff)+start;
    return num;
}
let generateRandomNumber = generateRandomNo(start,end);
console.log(generateRandomNumber);