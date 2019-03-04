// The div where all the options will go
var numOfPizzas = document.querySelector(".adiv");
var contact = document.querySelector(".contact");
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
  let something = types[1];
   typeHolder += "<option class='op' value=' " + types[x][1] + "'>" + types[x][0] + " $" + types[x][1] + "</option>"


  }
 return typeHolder; 
}
// Missouri tax is 7.6%
let tax = 0.076;
// Setting the total value to the default selected option
let total = " $" + parseFloat((types[0][1] * 1) + (types[0][1] * tax)).toFixed(2);
// Creation of the form
numOfPizzas.innerHTML += "<label class='nameLabel' for='name'>Name</label><input  type='text' name='name' placeholder='Enter your name' id='names' ></input>"
numOfPizzas.innerHTML += "<label class='emailLabel' for='email'>E-mail</label><input type='text' name='email' placeholder='Enter your E-mail' id='email' ></input>"
numOfPizzas.innerHTML += "<b id='typeLabel'>Types</b><select name='typePrice' id='type'>" + displayTypes() + "</select>"
numOfPizzas.innerHTML += "<b id='quanityLabel'>Quantity</b><select name='amount' id='nums'>" +  displayNums() +    "</select>"
numOfPizzas.innerHTML += "<input id='total' type='text' value='Total:"+ total + "' readonly></input>"
numOfPizzas.innerHTML += "<button class='submit' type='button' >Order Now</button>"
// delclaring detail variables
let submit = document.querySelector(".submit");
let details = document.querySelector(".details");
let names = document.querySelector("#names");
let type = document.querySelector("#type");
let nums = document.querySelector("#nums");
let email = document.querySelector("#email");
submit.addEventListener("click", function () {
  console.log(names.value);
  details.style.display = "block";
  getDetails();
});

// displayed after submit button is clicked
function getDetails(){

details.innerHTML = `<h1 style="text-align: center">Contact Details</h1><br><h3 style='text-align:center'> Thank you for choosing Cheech's Pizza, ${names.value}! An e-mail has been sent to ${email.value} confirming ${nums.value} pizza's on the way!</h3>`;

}

// total textbox
let valueT = document.getElementById("total");
// calculate total value
function calculateTotal() {
  let price = document.querySelector("form").elements.namedItem("typePrice").value;
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




