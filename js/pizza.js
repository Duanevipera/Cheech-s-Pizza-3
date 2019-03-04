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
   typeHolder += "<option class='op' value='" + x + "'>" + types[x][0] + " $" + types[x][1] + "</option>"
    

  }
 return typeHolder; 
}

// Setting subtotal to default selected option
let subtotal = parseFloat([types[0][1]]);
// Setting the total value to the default selected option
let total = parseFloat((types[0][1] * 1) + (types[0][1] * 0.076));
// Missouri tax is 7.6%
let tax = (parseFloat(0.076) * parseFloat(total)).toFixed(2);

// Creation of the form
numOfPizzas.innerHTML += "<label class='nameLabel' for='name'>Name</label><input  type='text' name='name' placeholder='Enter your name' id='names' ></input>"


numOfPizzas.innerHTML += "<label class='emailLabel' for='email'>E-mail</label><input type='text' name='email' placeholder='Enter your E-mail' id='email' ></input>"


numOfPizzas.innerHTML += "<b id='typeLabel'>Types</b><select name='typePrice' id='type'>" + displayTypes() + "</select>"

numOfPizzas.innerHTML += "<b id='quanityLabel'>Quantity</b><select name='amount' id='nums'>" +  displayNums() +    "</select>"

numOfPizzas.innerHTML += "<input id='subtotal' type='text' value='Total:$"+ subtotal + "' readonly></input>"

numOfPizzas.innerHTML += "<input id='tax' type='text' value='Tax:$"+ tax + "' readonly></input>"

numOfPizzas.innerHTML += "<input id='total' type='text' value='Total:$"+ total.toFixed(2) + "' readonly></input>"

numOfPizzas.innerHTML += "<button class='submit' type='button' >Order Now</button>"
// delclaring detail variables
let submit = document.querySelector(".submit");
let details = document.querySelector(".details");
let names = document.querySelector("#names");
let pizzaType = document.querySelector("#type");

let nums = document.querySelector("#nums");
let email = document.querySelector("#email");
submit.addEventListener("click", function () {
  details.style.display = "block";
  console.log(types[pizzaType.value][1])
  getDetails();
});



// total textbox
let valueT = document.getElementById("total");
let valueTax = document.getElementById("tax");
let valueS = document.getElementById("subtotal");
// calculate total value
function calculateTotal() {
  
  let price = parseFloat(types[pizzaType.value][1]);
  console.log(price);
  
  console.log(nums.value);
  subtotal = parseFloat(price) * parseFloat(nums.value); // this would be the subtotal
  console.log("subtotal:" + subtotal);
  tax = subtotal * 0.076;
  console.log(tax);
  total = tax + subtotal;
  console.log(total);
  // This will set the total value to the correct value after you switch any option
  valueS.setAttribute("value","Subtotal: $" + subtotal.toFixed(2));
  valueTax.setAttribute("value","Tax: $" + tax.toFixed(2));
  valueT.setAttribute("value","Total: $" + total.toFixed(2));
}
// This updates the total box without refreshing
let optionChanger = document.querySelectorAll("select");
for(let k = 0; k < optionChanger.length; k++){
optionChanger[k].addEventListener("change", calculateTotal);
}



// displayed after submit button is clicked
function getDetails(){
if(nums.value == 1){
  details.innerHTML = `<h1 style="text-align: center">Contact Details</h1><br><h3 style='text-align:center'> Thank you for choosing <b>Cheech's <span style="color: darkred;">${types[pizzaType.value][0]}</span> Pizza,</b> <b>${names.value}</b>!<br>  An e-mail has been sent to <b>${email.value}</b> confirming there's <b>${nums.value}</b> pizza on the way!<br>The total will be <i>$${total.toFixed(2)}</i>.</h3>`;
}
else{
  details.innerHTML = `<h1 style="text-align: center">Contact Details</h1><br><h3 style='text-align:center'> Thank you for choosing Cheech's ${types[pizzaType.value][0]} Pizza, ${names.value}!<br>  An e-mail has been sent to ${email.value} confirming there's <b>${nums.value}</b> pizzas on the way!<br>The total will be $${total.toFixed(2)}.</h3>`;
}
  }
