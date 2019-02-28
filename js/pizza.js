var dropDown = document.querySelector(".adiv");
let x = 0;
let i = 0;
console.log(i)
function displayNums(){
    for(x = 1; x < 11; x++){
      i += "<option value=' " + x + "'>" + x + "</option>"
       
    
    }
    return i;
}

dropDown.innerHTML += "<select name='amount' id='nums'>" +  displayNums() +    "</select>"
dropDown.innerHTML += "<h1>firejf9eiofk</h1>"
console.log(dropDown.innerHTML)