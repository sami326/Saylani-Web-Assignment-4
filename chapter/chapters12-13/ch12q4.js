let chr = prompt("Enter a Character: ");

if(chr.length === 1){
    if(chr === 'A' || chr === 'a' || chr === 'E' || chr === 'e' || chr === 'I' || chr === 'i' || chr === 'O' || chr === 'o' || chr === 'U' || chr === 'u') {
        alert("You Entered Vowel Character");
    }
    else{
        alert("The Entered Character is not a Vowel");
    }
}
else{
    alert("I asked for a character not for a String");
}