let color = [];
document.write("<p>Initialize Color Array and Elements are: " + color + "</p>");
document.write("<hr>");

// a
let beginning = prompt("Add Color in the Beginning: ");
if(beginning.length > 0){
    color.unshift(beginning);
    document.write("<h3>Beginning:</h3>");
    document.write("<p>" + color + "</p>");
    document.write("<hr>");
}

// b
let end = prompt("Add Color in the End: ");
if(end.length > 0){
    color.push(end);
    document.write("<h3>End:</h3>");
    document.write("<p>" + color + "</p>");
    document.write("<hr>");
}

// c
document.write("<h4>Add Two Color in the Beginning:</h4>");
let one = prompt("First Color: ");
if(one.length > 0){
    let two = prompt("Second Color: ");
    color.unshift(two);
    document.write("<p>" + color + "</p>");
    color.unshift(one);
    document.write("<h3>After Two Color Added:</h3>");
    document.write("<p>" + color + "</p>");
    document.write("<hr>");
}

// d
document.write("<h3>Delete First Item from the Array</h3>");
color.shift();
document.write("<p>" + color + "</p>");
document.write("<hr>");

// e
document.write("<h3>Delete Last Item from the Array</h3>");
color.pop();
document.write("<p>" + color + "</p>");
document.write("<hr>");

// f
let addIndex = +prompt("To Add color\nEnter the Index/Position: ");
let addColor = prompt("Enter Color: ");
    // 0 because we don't want to remove any element from the array
color.splice(addIndex, 0, addColor);
document.write("<h3>Color Added into the Array, where Position is " + addIndex + "</h3>");
document.write("<p>" + color + "</p>");
document.write("<hr>");


// g
let removeColor = +prompt("To remove color(s)\nEnter the Index/Position: ");
let numRemove = +prompt("How many color you want to remove: ");
color.splice(removeColor, numRemove);
document.write("<h3>Color(s) Removed from the Array, where Position is " + removeColor + " and number of color to be removed " + numRemove + "</h3>");
document.write("<p>" + color + "</p>");
document.write("<hr>");
