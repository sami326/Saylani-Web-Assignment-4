let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Welcome to ABC Bakery. What do you want Sir/Ma'am");

let flag = false;

for (let i = 0; i < A.length; i++){
    if(userInput === A[i] && flag === false){
        alert(userInput + " is available at index " + i + " in our bakery");
        flag = true;
    }
}

if(flag === false){
    alert("We are sorry. " + userInput + " is not available in our bakery");
}