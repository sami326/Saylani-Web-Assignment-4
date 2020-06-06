var n = localStorage.getItem('on_load_counter');
if (n === null) {
  n = 0;
}
n++;
        
localStorage.setItem("on_load_counter", n);
N = String(n);

alert("You have visited this site " + N + " times");