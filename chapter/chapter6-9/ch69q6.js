let subject1 = prompt("Enter Subject 1: ");
let subject2 = prompt("Enter Subject 2: ");
let subject3 = prompt("Enter Subject 3: ");

let total = +100;

let obtain1 = +prompt("Enter marks of Subject 1: ");
let obtain2 = +prompt("Enter marks of Subject 2: ");
let obtain3 = +prompt("Enter marks of Subject 3: ");

document.getElementById('subject1').innerHTML = subject1;
document.getElementById('subject2').innerHTML = subject2;
document.getElementById('subject3').innerHTML = subject3;

document.getElementById('obtain1').innerHTML = obtain1;
document.getElementById('obtain2').innerHTML = obtain2;
document.getElementById('obtain3').innerHTML = obtain3;

let percent;
document.getElementsByClassName('percent')[0].innerHTML = ((obtain1 / total) * 100) + "%";
document.getElementsByClassName('percent')[1].innerHTML = ((obtain2 / total) * 100) + "%";
document.getElementsByClassName('percent')[2].innerHTML = ((obtain3 / total) * 100) + "%";

for(let i = 0; i < 3; i++){
    document.getElementsByClassName('total')[i].innerHTML = total;
}

let addTotal = total * 3;
document.getElementById('addTotal').innerHTML = addTotal;

let obtainTotal = obtain1 + obtain2 + obtain3;
document.getElementById('obtainTotal').innerHTML = obtainTotal;

document.getElementById('totalPercent').innerHTML = ((obtainTotal / addTotal) * 100) + "%";