var a = 2, b = 1;
document.write("<p>a is: " + a + "</p>");
document.write("<p>b is: " + b + "</p>");
document.write("<hr>");

document.write("--a: 1 <br>");
document.write("--a - --b: 1 - 0 = 1 <br>");
document.write("--a - --b + ++b: 1 + 1 = 2 <br>");
document.write("--a - --b + ++b + b--: 2 + 1 = 3 <br>");

document.write("<hr>");
var result = --a - --b + ++b + b--;
document.write("<p>result is: " + result + "</p>");