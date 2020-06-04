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