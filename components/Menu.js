// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

// Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

// <div class="menu">
//   <ul>
//     {each menu item as an <li>}
//   </ul>
// </div>

const menuImg = document.querySelector(".menu-button");

function menuMaker(array) {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const list = document.createElement("ul");
  menu.appendChild(list);
  // since we need to create list items based off the given data, we use a forEach to iterate through the given array and create an li for each item.
  //the paramenter that we pass in can
  array.forEach((elem) => {
    //create the variable in memory
    const li = document.createElement("li");
    li.textContent = elem;
    list.appendChild(li);
  });

  menuImg.addEventListener("click", (event) => {
    menu.classList.toggle("menu--open");
  });

  return menu;
}
// create a newMenu by invoking out menuMaker function
let newMenu = menuMaker(menuItems);
//we are targeting the header class in our document and appending our newMenu
document.querySelector(".header").appendChild(newMenu);

// The 'menuMaker' takes an array of menu items as its only argument.

// Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
// Add those items to the <ul>

// Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

// Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

// Step 5: Don't forget to return your div.menu.

// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
