let remaining = +prompt("Enter Remaining Fuel: ");

if(remaining < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("You're good to go");
}