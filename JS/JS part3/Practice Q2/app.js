// Solution of 1

let month = ['january','july','march','august'];
console.log(month);
month.shift();
month.shift();
console.log(month);
month.unshift('june');
month.unshift('july')
console.log(month);

//Solution of Q2

let months = ['january','july','march','august'];
console.log(`Array before Splice ${months}`);
let splicedMonth = months.splice(0, 2,'july','june');
console.log(` After Splice Array will be ${splicedMonth}`);
console.log(` After Splice Array will be ${months}`);

//Solution of Q3

let programmingLang = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(programmingLang);
let newProgrammingLang = programmingLang.reverse().indexOf("javascript");
console.log(`Index of "Javascript" is ${newProgrammingLang}`)


//Solution of Q4
let game =[['X','null','0'] , ['null','X','null'] , ['0','null','X']];
console.log(game);
game[0]
game[0][1]='0';
console.log(game);