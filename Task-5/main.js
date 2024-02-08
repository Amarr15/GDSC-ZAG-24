



//Task-1: Currency Formatter
let a = parseFloat(prompt("Enter a positive number: "));
console.log(a.toFixed(2) + "$");






//Task-2: Check for Prime Number
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}



//Task-3: Reverse a Number
let text = "12345678";
console.log(text.split("").reverse());





//Task-4: Generate Random Number within a Range
console.log(Math.floor(Math.random() * 100));





//Task-5: Capitalize Each Word
let myText = "amar yasser frag";
let array = myText.split(" ");
let index = array[0].charAt(0).toUpperCase() + array[0].slice(1);
let ondex = array[1].charAt(0).toUpperCase() + array[1].slice(1);
let endex = array[2].charAt(0).toUpperCase() + array[2].slice(1);
console.log(index + ondex + endex);




//Task-6: Grade Calculator (With if statement)
let y = parseFloat(prompt("Enter a positive number: "));
if(y>=90 && y<=100){
    console.log("A");
}else if(y>=80 && y<=89){
    console.log("B");
}else if(y>=70 && y<=79){
    console.log("C");
}else if(y>=60 && y<=69){
    console.log("D");
}else{
    console.log("F");
}



//Task-7: Temperature Adviser (with ternary operator)
let z = parseFloat(prompt("Enter the degree: "));
z<=10 ? console.log("recommend wearing a coat.") : z>10 && z<=20 ? console.log("recommend wearing a sweater.") : z>20 ? console.log("recommend wearing a T-shirt.") : console.log("unknown");




//Task-8: Calculator (with switch)
let result;
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator ( +, -, * or / ): ');


switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
