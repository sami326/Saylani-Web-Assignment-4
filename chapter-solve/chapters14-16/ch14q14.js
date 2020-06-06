let devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("<h3>Devices</h3>");
document.write(devices + "<br>");

document.write("<br><h4>Out:</h4>");
document.write(devices.pop() + "<br>");
document.write("<h4>Out:</h4>");
document.write(devices.pop() + "<br>");
document.write("<h4>Out:</h4>");
document.write(devices.pop() + "<br>");
document.write("<h4>Out:</h4>");
document.write(devices.pop() + "<br>");