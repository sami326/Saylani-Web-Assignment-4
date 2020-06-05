document.write("<h1>The Lifetime Supply Calculator</h1><hr><br><br>");

let favSnack = "Cookies";
let age = +23;
let maxAge = +65;
let estimate = +5;

let ageLeft = maxAge - age;
let result = estimate * ageLeft;

document.write("You will need " + result + " " + favSnack + " to last you until the ripe old age of " + maxAge);