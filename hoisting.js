x = 5;
elem = document.getElementById("hoist");
elem.innerHTML = x;
var x;

y = 10;
elem = document.getElementById("hoist1");
elem.innerHTML = y;

a = 12;
elem = document.getElementById("hoist2");
elem.innerHTML = a;

var c;
c = 5;
elem = document.getElementById("hoist3");
elem.innerHTML = c;

try {
    carName = "Saab";
    let carName = "Volvo";
  }
  catch(err) {
    document.getElementById("hoist3").innerHTML = err;
  }


