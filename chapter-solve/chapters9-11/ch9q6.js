let total = +prompt("Enter total marks: ");

let subject1 = +prompt("Enter Subject 1 Marks: ");
let subject2 = +prompt("Enter Subject 2 Marks: ");
let subject3 = +prompt("Enter Subject 3 Marks: ");

let obtainMarks = subject1 + subject2 + subject3;

if(obtainMarks > total){
    alert("Enter Correct Marks");
}
else{
    let percent = (obtainMarks / total) * 100;
    let grade;
    let remarks;

    if(percent >= 80){
        grade = "A-one";
        remarks = "Excellent";
    }
    else if(percent >= 70){
        grade = "A";
        remarks = "Good";
    }
    else if(percent >= 60){
        grade = "B";
        remarks = "You need to improve";
    }
    else{
        grade = "Fail";
        remarks = "Sorry";
    }

    document.write("<h1>Marks Sheet</h1><hr><br><br>");
    document.write("Total marks: " + total + "<br>");
    document.write("Marks Obtained: " + obtainMarks + "<br>");
    document.write("Percentage: " + percent + "% <br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks);
}