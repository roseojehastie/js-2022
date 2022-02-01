
// let myFunction = (a, b) => a * b;
// document.getElementById("demo").innerHTML = myFunction(4, 5);

let myFunction = (a, b) => a * b;
document.getElementById("demo1").innerHTML = myFunction(4, 5);

hello = function() {
    return "Hello World!";
  }
  document.getElementById("demo").innerHTML = hello();
  
  hello = () => "Helloooo World!"; //This example shows an Arrow Function without the brackets or the return keyword.
  document.getElementById("demo3").innerHTML = hello();

  //Arrow Function with parameters

  var hello;

  hello = (val) => "Hello " + val; 
  document.getElementById("demo4").innerHTML = hello("Universe!");
  
 //Arrow Function Without Parentheses: 
 //In fact, if you have only one parameter, you can skip the parentheses as well:
 
  var hello;

  hello = val => "Hello " + val;
  
  document.getElementById("demo5").innerHTML = hello("Universe!");

//JavaScript "this"
//This example demonstrate that in Arrow Functions, the "this" keyword represents the object that owns the function, no matter who calls the function
var hello;

hello = function() {
    document.getElementById("demo6").innerHTML += this;

    //The window object calls the function:
    window.addEventListener("load", hello);
}

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
  