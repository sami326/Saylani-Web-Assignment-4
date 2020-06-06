let password = "Saylani";
let userPass = prompt("Enter Password: ");

if (userPass.length <= 0){
    alert("Please Enter your Password");
}
else{
    if(userPass === password){
        alert("Correct! The password you entered matches the original password");
    }
    else{
        alert("Incorrect Password");
    }
}

