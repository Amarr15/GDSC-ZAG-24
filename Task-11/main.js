
//task-1-1

class Car{
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        return `Car Is Running Now`;
    }
    stop(){
        return `Car Is Stopped`;
    }
}
let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("bmw", 2024, 300000);
let carThree = new Car("mercedes", 2023, 50000);

  // Needed Output

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carThree.run());


//task-2-1


class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name, serial, price, size){
        super(name, serial, price);
        this.size = size || "Unknown";
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    }
}
// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown



//task-3-1


class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    creditCard(){
        return  this.#c.toString().match(/\d{4}/g).join("-");
    }
    get showData(){
        return `Hello ${this.u} Your Credit Card Number Is ${this.creditCard()}`
    }
}

  // Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined



//task4-1


// Write Your Code Here
String.prototype.addLove = function(){
    return `I Love ${this} School`;
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School



//task1-2


let dateOne = new Date();
let birthDate = new Date("Jun 15 2004");
let dateDiff = dateOne - birthDate;

console.log(`${(dateDiff / 1000).toFixed()} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed()} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 365).toFixed()} Years`);



//task2-2

// Needed Output

let dateTwo = new Date();
dateTwo.setTime(0);
dateTwo.setFullYear(1980);
dateTwo.setHours(0);
dateTwo.setSeconds(1);
console.log(dateTwo);
"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"



//task3-2


// Needed Output
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateThree = new Date();
dateThree.setDate(0);
console.log(dateThree);
console.log(`"Previous Month Is ${months[dateThree.getMonth()]} And Last Day Is ${dateThree.getDate()}"`);

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"


//task4-2

// Needed Output
let birthday1 = new Date("2004 06 15");
console.log(birthday1);
let birthday2= new Date("06/15/2004");
console.log(birthday2);
let birthday3 = new Date("06-15-2004");
console.log(birthday3);

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

