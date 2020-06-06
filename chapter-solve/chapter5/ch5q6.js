let celsius = +prompt("Enter temperature in Celsius: ");
let fahrenheit = (celsius * (9 / 5)) + 32;
document.write("<h2>" + celsius + "&deg;C is " + fahrenheit + "&deg;F" + "</h2>");

fahrenheit = +prompt("Enter temperature in Fahrenheit: ");
celsius = (fahrenheit - 32) * (5 / 9);
document.write("<h2>" + fahrenheit + "&deg;F is " + celsius + "&deg;C" + "</h2>");