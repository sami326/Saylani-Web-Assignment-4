let arr = [24, 53, 78, 91, 12];

document.write("<h3>Array Items: " + arr + "</h3>");

let max = 0;

for (let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

document.write("<h3>Largest Number is " + max + "</h3>");