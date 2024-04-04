
//Task-1-1



// let num = prompt("Print Number From – To", "Example: 5-20");
// let num1 = num.split("-").sort((a ,b) => a - b);
// for(let i = num1[0]; i <= num1[1]; i++){
//     console.log(`${[i]}`);
// }



//Task-1-2



// let parent = document.createElement("div");
// let heading = document.createElement("h1");
// let text = document.createElement("p");
// let btn = document.createElement("button");

// function popup(){
//     heading.textContent = "Welcome";
//     text.textContent = "welcome to elzero web school";
//     btn.textContent = "X";

//     parent.append(heading, text, btn);
//     document.body.append(parent);

//     btn.addEventListener("click", function(){
//         btn.parentElement.remove();
//     });

//     document.body.style.cssText = "font-family: arial, Tahoma";
//     parent.style.cssText = "background-color: #eee; border: 1px solid #ccc; padding 20px; text-align: center; position: relative; width: 350px; height: 150px; margin: 20px auto;";
//     btn.style.cssText = "background-color: red; color: white; font-weight: bold; border: none; width: 30px; height: 30px; border-radius: 50%; position: absolute; top: -10px; right: -10px"
// }
// setTimeout(popup, 5000);



//Task-1-3



// let div = document.querySelector("div");

// function countdown(){
//     div.innerHTML -= 1;
//     if(div.innerHTML === "0"){
//         clearInterval(counter);
//     }

// }

// let counter = setInterval(countdown, 1000);



//Task-1-4



// let div = document.querySelector("div");

// function countdown(){
//     div.innerHTML -= 1;
//     if(div.innerHTML === "0"){
//         location.href = "https://elzero.org/";
//     }

// }

// let counter = setInterval(countdown, 1000);



//Task-1-5



// let div = document.querySelector("div");

// function countdown(){
//     div.innerHTML -= 1;
//     if(div.innerHTML === "5"){
//         open("https://elzero.org/","_blank","width:400")
//     }
//     if(div.innerHTML === "0"){
//         clearInterval(counter)
//     }

// }

// let counter = setInterval(countdown, 1000);



//Task-2-1

// let font = document.querySelector("#font");
// let color = document.querySelector("#color");
// let size = document.querySelector("#size");

// font.onchange = function(){
//     window.localStorage.setItem("font", font.value);
//     document.body.style.fontFamily = font.value;
// }
// color.onchange = function(){
//     window.localStorage.setItem("color", color.value);
//     document.body.style.color = color.value;
// }
// size.onchange = function(){
//     window.localStorage.setItem("size", size.value);
//     document.body.style.fontSize = size.value;
// }

// document.body.style.fontFamily = window.localStorage.getItem("font");
// document.body.style.color = window.localStorage.getItem("color");
// document.body.style.fontSize = window.localStorage.getItem("size");

// font.value = window.localStorage.getItem("font");
// color.value = window.localStorage.getItem("color");
// size.value = window.localStorage.getItem("size");


// //Task-2-2


// let input1 = document.querySelector("#one");
// let input2 = document.querySelector("#two");
// let input3 = document.querySelector("#three");
// let select = document.querySelector("#select");

// input1.oninput = function(){
//     window.sessionStorage.setItem("input1", input1.value);
// }
// input2.oninput = function(){
//     window.sessionStorage.setItem("input2", input2.value);
// }
// input3.oninput = function(){
//     window.sessionStorage.setItem("input3", input3.value);
// }
// select.onchange = function(){
//     window.sessionStorage.setItem("select", select.value);
// }

// input1.value = window.sessionStorage.getItem("input1");
// input2.value = window.sessionStorage.getItem("input2");
// input3.value = window.sessionStorage.getItem("input3");
// select.value = window.sessionStorage.getItem("select");


//Task-3-1


// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// let [a,,,,e] = myNumbers;
// console.log(a * e); // 5



//Task-3-2


// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// let [a, b, c, [d, e, [f, g]]] = mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel




//Task-3-3


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let[, a, b, c] = arr3.concat(arr1);
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed



//Task-3-4
















