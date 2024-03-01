

//Task-2

let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title = 'Current']");
let cls = document.querySelector(".classes-list div");

function addOrRemove(){
    document.querySelectorAll("span").forEach(el => el.remove());
    
    for (let i = 0; i < this.value.trim().split(" ").length; i++){
        if (add.value)
            current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        
        if (remove.value)
        
            current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
    this.value = "";

    if(current.classList.length){
        [...current.classList].sort().forEach(el => {
            let clSpan = document.createElement("span");
            clSpan.textContent = el;
            cls.append(clSpan);
        });
    }else cls.textContent = "No Classes To Show";
}

add.onblur = addOrRemove;
remove.onblur = addOrRemove;



//Task-3


let p = document.getElementsByTagName("p")[0];
let div = document.querySelector(".our-element");
let startDiv = div.cloneNode();
let endDiv = div.cloneNode();

p.remove();

function addAttr (el, ind){
    el.className = ind.toLowerCase();
    el.title = `${ind} element`;
    el.setAttribute("data-value", ind);
    el.textContent = ind;
}
addAttr(startDiv, "Start");
addAttr(endDiv, "End");


div.before(startDiv);
div.after(endDiv);




//Task-5


[...document.body.children].forEach(
    el => (el.onclick = _ => console.log(`This is ${el.localName}`))
);


