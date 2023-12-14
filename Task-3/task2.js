


//التكليف 01

// Add Variables Here
var NumberOne = 10;
var NumberTwo = 20;

// Output
console.log("10"+"20"); // Normal Concatenate => 1020
console.log(typeof("10"+"20")); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`); // Template Literals Way => String

console.log("20"+"\n"+"10");
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberTwo}
${NumberOne}`);
/*
  Template Literals Way
  20
  10
*/





//التكليف 02

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object



//التكليف 03

console.log(`\`${"I'm In"}
${"\\\\"}
${"love \\\\ \"\"\" \'\'\'"}
${"++ with ++"}
${"\\\"\"\"\\\"\"\""}
${"\"\"JavaScript\"\""}\``);




//التكليف 04
let a = 21;
let b = 20;

console.log("_"+a+"_"+b+a+"_"+b+a+"_"+b+a+"_"+b); // _21_2021_2021_2021_20_