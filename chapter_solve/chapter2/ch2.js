function question4(title){
    window.document.title = title;
    
    let name = "Abdul Raffay Rizwan";
    let age = 22;
    let course = "Certified Mobile Application Development";
    
    alert(name);
    alert(age);
    alert(course);
}

function question5(title){
    window.document.title = title;
    
    var pizza = 'pizza';
    pizza = pizza.toUpperCase();
    alert(pizza  + "\n" + pizza.slice(0, 4) + "\n" + pizza.slice(0, 3) + "\n" + pizza.slice(0, 2) + "\n" + pizza.slice(0, 1));
}

function question6(title){
    window.document.title = title;
    let email = "zaimeali97@gmail.com";

    alert("My email address is " + email);
}

function question7(title){
    window.document.title = title;
    let book = "A smarter way to learn JavaScript";

    alert("I am trying to learn from the book " + book);
}

function question8(title){
    window.document.title = title;

    let content = "Yah! I can write HTML content through JavaScript";
    window.document.getElementById('heading').innerHTML = content;
}

function question9(title){
    window.document.title = title;

    let content = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(content);
}