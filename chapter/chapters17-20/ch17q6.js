// a
document.write("<h3>Counting: </h3>");
for (let i = 1; i < 16; i++){
    document.write("<span>" + i + ", </span>");
}
document.write("<hr>");


// b
document.write("<h3>Reverse Counting: </h3>");
for (let i = 10; i > 0; i--){
    document.write("<span>" + i + ", </span>");
}
document.write("<hr>");


// c
document.write("<h3>Even: </h3>");
for (let i = 0; i < 21; i++){
    if(i % 2 === 0){
        document.write("<span>" + i + ", </span>");
    }
}
document.write("<hr>");


// d
document.write("<h3>Odd: </h3>");
for (let i = 0; i < 21; i++){
    if(i % 2 !== 0){
        document.write("<span>" + i + ", </span>");
    }
}
document.write("<hr>");


// e
document.write("<h3>Series: </h3>");
for (let i = 0; i < 21; i++){
    if(i % 2 === 0){
        document.write("<span>" + i + "K, </span>");
    }
}
document.write("<hr>");