
// class Car {
// constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }
// const myCar = new Car("Lamborghini, 2022");
// document.getElementById("demo").innerHTML = myCar.name + " " + myCar.year;

// //create a car method named "age", that returns the Car age:

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
  
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   let myCar = new Car("Ford", 2014);
//   document.getElementById("demo1").innerHTML =
//   "My car is " + myCar.age() + " years old.";


  // You can send parameters to Class methods:
  class Car {
      constructor(name, yearar) {
          this.name = name;
          this.year = year;
      }
      age(x) {
          return x - this.year;
      }
  }

  let date = new Date();
  let year = date.getFullYear();

  let myCar = new Car("Ford", 2021);
  document.getElementById("demo2").innerHTML=
  "My car is " + myCar.age(year) + "year old."; 
