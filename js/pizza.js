var numOfPizzas = document.querySelector(".adiv");
let z = 0;
let i = 0;
let types = [['Peperoni', 5.99], ['Sausage', 5.99], ['Cheese', 2.50], ['Meatlover', 8.99], ['Crunchaton', 15.95]];
console.log(i)
function displayNums(){
    for(x = 1; x < 11; x++){
      i += "<option value=' " + x + "'>" + x + "</option>"
       
    
    }
    return i;
}

function displayTypes() {
  for (x = 0; x < types.length; x++) {
   z += "<option value=' " + types[x][0] + "'>" + types[x][0] + " $" + types[x][1] + "</option>"


  }
 return z; 
}

numOfPizzas.innerHTML += "<b id='typeLabel'>Types</b><select name='type' id='type'>" + displayTypes() + "</select>"
numOfPizzas.innerHTML += "<b id='quanityLabel'>Quantity</b><select name='amount' id='nums'>" +  displayNums() +    "</select>"
numOfPizzas.innerHTML += "<input class='submit' type='submit' value='Order Now'></input>"

function calculateTotal(){
  //get price based off of type * quanity
}

console.log(numOfPizzas)