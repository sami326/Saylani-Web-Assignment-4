let num = +prompt("Enter Number: ");

if(num <= 0){
    num = 5;
}

document.write("Table of " + num);
document.write("<hr>");

for(let i = 1; i < 11; i++){
    document.write(num + " * " + i + " = " + (num*i));
    document.write("<br>");
}