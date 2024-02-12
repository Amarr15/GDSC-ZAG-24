


//task-1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
let x = myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//method 3
myFriends.length = num;
console.log(myFriends)




//task-2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]



//task-3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]



//task-4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO





//task-5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)){
    console.log("found");
}

if(needle === haystack[1]){
    console.log("found");
}

if(haystack.indexOf(needle)){
    console.log("found");
}



//task-2-1

let start = 10;
let end = 100;
let exclude = 40;

for(i = start;i <= end; i += start){
    if(i === exclude){
        continue;
    }
    console.log(i);
}



//task-2-2

let startv = 10;
let endv = 0;
let stop = 3;

for(j = startv;j > endv; j--){
    if(j<startv){
        console.log(endv+`${j}`);
    }else{
        console.log(j);
    }
    if(j === stop){
        break;
    }
}


//task-2-3

let startk = 1;
let endk = 6;
let breaker = 2;

for(k = startk; k <= endk; k++){
    console.log(k);
    for(s = breaker; s < endk; s+=breaker)
    console.log(`--${breaker}`);
    console.log(`--${breaker+breaker}`);
}


//task-3-1

function sayHello(theName, theGender) {
    if(theGender === "Male"){
        console.log(`Hello Mr ${theName}`);
    }else if(theGender === "Female"){
        console.log(`Hello Miss ${theName}`);
    }else{
        console.log(`Hello ${theName}`);
    }
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"


//task-3-2

function calculate(firstNum, secondNum, operation) {
    if(secondNum === undefined){
        console.log("Second Number Not Found");
    }else if(operation === undefined){
        console.log(firstNum + secondNum);
    }else{
        if(operation === 'add'){
            console.log(firstNum + secondNum);
        }else if(operation === 'subtract'){
            console.log(firstNum - secondNum);
        }else{
            console.log(firstNum * secondNum);
        }
    }
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600



//task-3-3

function ageInTime(theAge) {
    if(theAge < 10 || theAge >100){
        console.log("Age Out Of Range")
    }else{
        console.log(`years ${theAge}`);
        console.log(`month ${theAge*12}`);
        console.log(`weeks ${theAge*12*4}`);
        console.log(`days ${theAge*12*4*7}`);
        console.log(`hours ${theAge*12*4*7*24}`);
        console.log(`minutes ${theAge*12*4*7*24*60}`);
        console.log(`seconds ${theAge*12*4*7*24*60*60}`);
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

