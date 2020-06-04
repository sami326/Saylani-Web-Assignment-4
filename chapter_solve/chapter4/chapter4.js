function question(chapter, question){
    window.document.title = chapter + " | " + question;

    document.getElementsByClassName("chapter")[0].innerHTML = chapter;
    document.getElementsByClassName("chapter")[1].innerHTML = chapter;
    document.getElementsByClassName("question")[0].innerHTML = question;
    document.getElementsByClassName("question")[1].innerHTML = question;


    if(question === 'Question 1'){
        q1();
    }

    else if(question === "Question 2"){
        q2();
    }

    else if(question === "Question 3"){
        q3();
    }

    else if(question === "Question 4"){
        q4();
    }
}

function q1(){
    
}