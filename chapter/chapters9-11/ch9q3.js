var color = prompt("Enter Traffic Signal Color: ");

if(color === 'Red' || color === 'red'){
    alert('Must Stop');
}
else if(color === 'Yellow' || color === 'yellow'){
    alert('Ready to Move');
}
else if(color === 'Green' || color === 'green'){
    alert('Move Now');
}
else{
    alert('Enter Correct Color');
}