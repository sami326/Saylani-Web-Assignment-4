document.write("<h1>Shopping Cart</h1><hr>");

let price1 = +650;
document.write("Price of item 1 is " + price1);
document.write("<br>");
let qty1 = +3;
document.write("Quantity of item 1 is " + qty1);
document.write("<br>");

let price2 = +100;
document.write("Price of item 2 is " + price2);
document.write("<br>");
let qty2 = +7;
document.write("Quantity of item 2 is " + qty2);
document.write("<br>");

let ship = +100;
document.write("Shipping Charges " + ship);
document.write("<br>");
document.write("<br>");
document.write("<br>");

let total = (price1 * qty1) + (price2 * qty2) + ship;
document.write("Total cost of your order is " + total);