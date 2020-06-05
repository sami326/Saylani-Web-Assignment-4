let num = +prompt("Enter Number for a Table: ");

document.write("<h3>Table of " + num + "</h3>");

for(let i = 1; i < 11; i++){
    document.write(num + " * " + i + " = " + (num * i));
    document.write("<br>");
}