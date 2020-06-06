var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<label for='mobile'>Mobile Phone Companies: </label>");
document.write("<select id='mobile'>");
    document.write("<option selected disabled>Options...</option>")
    for(let i = 0; i < phone.length; i++){
        document.write("<option>" + phone[i] + "</option>");
    }
document.write("</select>");