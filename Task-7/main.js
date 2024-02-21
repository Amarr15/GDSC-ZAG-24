
//Task-1-1

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
      return `${zName.slice(0, zName.indexOf(" "))}${zName.substr(zName.indexOf(" "), 2).toUpperCase()}.,`
      
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
  }
  namePattern();

  function ageWithMessage() {
      return ` Your Age Is ${parseInt(zAge)},`;
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
  }
  ageWithMessage();

  function countryTwoLetters() {
      return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
  }
  countryTwoLetters();

  function fullDetails() {
      // Write Your Code Here
      return `Hello ${namePattern()} ${ageWithMessage()} ${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


//Task-1-2


itsMe=()=> {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

urlCreate=(protocol, web, tld)=> {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


//Task-1-3

checker = (zName) => {
  return  (status) =>{
    return  (salary) =>{
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


//Task-1-4

function specialMix(...data) {
  // Your Code Here
  let result = 0;
  for(let i = 0; i < data.length; i++){
      if(isNaN(parseInt(data[i])) === false){
          result += parseInt(data[i]);
      }
  }
  if(result === 0){
      return `All Is Strings`;
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings




//Task-2-1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let arr = mix.map(function(ele){
  return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function(acc, current){
  return acc + current;
});

console.log(arr);
// Elzero


//Task-2-2

let myString = "EElllzzzzzzzeroo";

let x = myString.split("").filter(function(ele, index){
    return  myString.indexOf(ele) === index;
}).reduce(function(acc, current){
    return acc + current;
});

console.log(x);

// Elzero

//Task-2-3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function(acc, current){
  return acc.concat(current);
}).split("").filter(function(ele){
  return ele !== ",";
}).reduce(function(acc, current){
  return acc + current;
});

console.log(newArray);

// Elzero

//Task-2-4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNums = numsAndStrings.filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function(ele){
    return -ele;
})

console.log(newNums);
// [-1, -10, 10, 20, -5, -3]

//Task-2-4

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNum = nums.reduce(function(acc, current){
    return current % 2 === 0 ? acc * current : acc + current;
}, 1)

console.log(newNum);
