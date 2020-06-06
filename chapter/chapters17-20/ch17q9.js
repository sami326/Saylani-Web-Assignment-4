let arr = [24, 53, 78, 91, 12];

document.write("<h3>Array Items: " + arr + "</h3>");

let min = 10000000000000000000;

for (let i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}

document.write("<h3>Smallest Number is " + min + "</h3>");