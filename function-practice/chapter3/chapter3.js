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
    let age;
    age = 22;
    alert("I am " + age + " years old");
}

function q2(){
    var n = localStorage.getItem('on_load_counter');

    if (n === null) {
      n = 0;
    }
    n++;
        
    localStorage.setItem("on_load_counter", n);
    N = String(n);

    alert("You have visited this site " + N + " times");
}

function q3(){
    let birthYear = 1997;
    alert("My birth year is " + birthYear + "\nDataType of my declared variable is " + typeof(birthYear)); 
}

function q4(){
    document.getElementById("para").style.display = "none";
    document.getElementsByClassName("heading")[0].innerHTML = "Welcome to XYZ Clothing";
    let name = prompt("Enter your name: ");
    
    if(name != null){
        document.getElementById('name').innerHTML = name;

        let product = prompt("Enter what product you want: ");
        let quantity = prompt("How much you want? ");
        document.getElementById('product').innerHTML = product;
        document.getElementById('quantity').innerHTML = quantity;

        document.getElementById("para").style.display = "block";
    }
}