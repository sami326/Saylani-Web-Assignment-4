let secret = 7;
let guess = +prompt("Guess the number: ");

if(secret === guess){
    alert("Bingo! Correct answer");
}
else if((guess + 1) === secret){
    alert("Close enough to the correct answer");
}
else{
    alert("Wrong Answer");
}