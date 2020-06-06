let chr = prompt("Enter Character: ");

if(+chr > 0){
    alert("You Enter the Number");
}
else if(chr.charCodeAt(0) > 64 && chr.charCodeAt(0) < 91){
    alert("You Enter UpperCase Letter");
}
else if(chr.charCodeAt(0) > 96 && chr.charCodeAt(0) < 123){
    alert("You Enter LowerCase Letter");
}
else{
    alert("You Enter the wrong character");
}