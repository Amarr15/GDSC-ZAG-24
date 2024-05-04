// Assignment 1-1

let setOfNumbers = new Set();

setOfNumbers.add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);


// Assignment 2-1

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newFriends = new Set(myFriends.sort());

console.log(newFriends);


// Assignment 3-1

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let newMap = new Map(Object.entries(myInfo));

console.log(newMap);
console.log(newMap.size);
console.log(newMap.has("role"));


// Assignment 4-1

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

// Assignment 2-1

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRe = /(\d+|\D+)+/ig;

console.log(ip.match(ipRe));


// Assignment 2-1

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesRe = /\b(Os)\d*O/g;

console.log(specialNames.match(specialNamesRe));


// Assignment 3-1

let phone = "+(995)-123 (4567)";

let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRe));