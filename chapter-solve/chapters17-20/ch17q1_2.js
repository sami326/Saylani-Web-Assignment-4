// Question 1
var matrix1 = [
    [],
    [],
    []
];



// Question 2
let matrix2 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 0; i < matrix2.length; i++){
    for (let j = 0; j < matrix2[i].length; j++){
        document.write("<strong>" + matrix2[i][j] + "</strong> ");
    }
    document.write("<br>");
}