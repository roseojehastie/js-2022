// scopes determines the acessibilty (visibility) of variables

// js has 3 types of scopes *block scope *fucntion scope *global scope
// let & const key words provide "block scope" 
// variables declared inside { } block can not be acessed from outside the block:
//e.g
/*{
    let x = 2;
}*/
/*
    Variables declared with the var keyword can NOT have block scope.
    {
  let x = 2;
}
// x can NOT be used here

    Variables declared inside a { } block can be accessed from outside the block.
    {
  var x = 2;
}
// x CAN be used here
    */

   /* Local Scope
    Variable declared within javascript function, become LOCAL to the function;
        // code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
    */
   //Local variables have Function Scope: They can only be accessed from within the function.

   /*
    JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:
   */

   /*
    Global JavaScript Variables
    A variable declared outside a function, becomes GLOBAL.
   */
  /*let carName = "Volvo";
 code here can use carName */

    /*function myFunction() {
     code here can also use carName
    } */
    //Example of GLOBAL scope: var x = 2; let x = 2; const x = 2;

    //A GLOBAL variable can be accessed from any script or function.
    let carName = "Volvo";
    myFunction();

    function myFunction() {
        document.getElementById("global-scope").innerHTML =  " I can display " + carName;
    }
    myFunction();

    
    // function myFunction() {
    //     carName = "Volvo"
    // }
    // myFunction();????