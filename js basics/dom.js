//***************** DOM - document object model


console.log(window);
// window.alert(1);

// **selecting

// single element
const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".container")); // works like jquery
console.log(document.querySelector("h1"));

//multiple ...
console.log(document.querySelectorAll(".item")); // returns node list (like array)
console.log(document.getElementsByClassName("item")); //old stuff
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");

items.forEach(item => {
  console.log(item);
});

// manipulation

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Marek";
ul.children[2].innerHTML = "<h1> Marek 2 </h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

const btn = document.querySelector(".btn");
// btn.addEventListener("click", e => {
//   e.preventDefault();
//   console.log("click");
//   console.log(e);
//   console.log(e.target.className);
// }); // submit flashes .. neeed  prevent default

btn.addEventListener("click", e => {
  //mouseover, mouseout
  e.preventDefault();
  document.querySelector("body").classList.add("bg-dark");
});
