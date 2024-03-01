

//Task-1

// Create Your Object Here
let member={
    //properties
    name:"Elzero",
    age:38,
    country:"Egypt",
    //method
    fullDetails:function(){
        return`My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
    }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//Task-3

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject = Object.assign({a},threeNums,twoNums)

console.log(finalObject);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/


//Task-2-2

let img = document.images;

for(i = 0; i < img.length; i++){
    img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    img[i].alt = "Elzero Logo";
}



//Task-2-3

let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

input.oninput = function(){
    result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`
}


//Task-2-6

let elNum = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
results = document.querySelector(".results");

form[0].onsubmit = function(el){
    el.preventDefault();
    document.querySelectorAll(".box").forEach(el => el.remove());

    for(let i = 1; i <= elNum.value; i++){
        let myEl = document.createElement(type.value);
        let myText = document.createTextNode(text.value);

        myEl.className = "box";
        myEl.title = "Element";
        myEl.id = `id-${i}`;

        myEl.style.display = "inline-block";
        myEl.style.width = "200px";
        myEl.style.margin = "20px";
        myEl.style.padding = "10px";
        myEl.style.color = "white";
        myEl.style.backgroundColor = "blue";
        myEl.style.textAlign = "center";
        myEl.style.borderRadius = ".5rem";

        myEl.appendChild(myText);
        results.appendChild(myEl);
    }
};

let inputs = document.querySelectorAll(".input");
submit = document.querySelector("[type= 'submit']");
box = document.querySelectorAll(".box");

for(let i = 0; i < inputs.length; i++){
    input[i].style.display = "block";
    input[i].style.boxSizing = "border-box";
    input[i].style.width = "250px";
    input[i].style.padding = "10px";
    input[i].style.margin = "15px auto";
    input[i].style.borderRadius = ".5rem";
    input[i].style.border = "1px solid black";
}

submit.style.backgroundColor = "gray";
submit.style.display = "block";
submit.style.width = "250px";
submit.style.padding = "10px";
submit.style.borderRadius = ".5rem";
submit.style.border = "none";
submit.style.margin = "15px auto";
submit.style.color = "white";


//Task-3-


