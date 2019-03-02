// The div where all the options will go
var numOfPizzas = document.querySelector(".adiv");
// Declaring static variables for a return within functions
let typeHolder = 0;
let quanityHolder = 0;
// multidemonsial array of each type and their prices
let types = [['Peperoni', 5.99], ['Sausage', 5.99], ['Cheese', 2.50], ['Meatlover', 8.99], ['Crunchaton', 15.95]];

// Gets the amount of pizzas and puts it in a option dropdown
function displayNums(){
    for(x = 1; x < 11; x++){
      quanityHolder += "<option value=' " + x + "'>" + x + "</option>"
       
    
    }
    return quanityHolder;
}
// Gets the type of pizzas and puts them in a option dropdown
function displayTypes() {
  for (x = 0; x < types.length; x++) {
   typeHolder += "<option class='op' value=' " + types[x][1] + "'>" + types[x][0] + " $" + types[x][1] + "</option>"


  }
 return typeHolder; 
}
// Missouri tax is 7.6%
let tax = 0.076;
// Setting the total value to the default selected option
let total = " $" + parseFloat((types[0][1] * 1) + (types[0][1] * tax)).toFixed(2);
// Creation of the form
numOfPizzas.innerHTML += "<b id='typeLabel'>Types</b><select name='price' id='type'>" + displayTypes() + "</select>"
numOfPizzas.innerHTML += "<b id='quanityLabel'>Quantity</b><select name='amount' id='nums'>" +  displayNums() +    "</select>"
numOfPizzas.innerHTML += "<input class='submit' type='submit' value='Order Now'></input>"
numOfPizzas.innerHTML += "<input id='total' type='text' value='Total:"+ total + "' readonly></input>"

// total textbox
let valueT = document.getElementById("total");
// calculate total value
function calculateTotal() {
  let price = document.querySelector("form").elements.namedItem("price").value;
  let quanity = document.querySelector("form").elements.namedItem("amount").value;
  total = parseFloat(price) * parseFloat(quanity); // this would be the subtotal
  total += (tax*total);
  // This will set the total value to the correct value after you switch any option
  valueT.setAttribute("value","Total: $" + total.toFixed(2));
}
// This updates the total box without refreshing
let optionChanger = document.querySelectorAll("select");
for(let k = 0; k < optionChanger.length; k++){
optionChanger[k].addEventListener("change", calculateTotal);
}




