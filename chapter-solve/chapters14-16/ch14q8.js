let name = [
    "Micheal", 
    "John",
    "Tony"
];

let score = [
    320,
    230,
    480
];

let percent;
let totalMarks = 500;
for (let i = 0; i < 3; i++){
    percent = (score[i] / totalMarks) * 100;
    document.write("Score of " + name[i] + " is " + score[i] + ". Percentage: " + percent + "%");
    document.write("<br>");
}