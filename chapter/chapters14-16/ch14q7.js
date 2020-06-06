let qualification = ['SSC', 'HSC', 'BCS', 'BS', 'B-COM', 'MS', 'M.Phil.', 'PhD'];

document.write("<h3>Qualifications:</h3>");

document.write("<ul>");
for (let i = 0; i < qualification.length; i++){
    document.write("<li>" + qualification[i] + "</li>");
}
document.write("</ul>");