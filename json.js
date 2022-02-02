 
// let text = '{"empolyees":[' + 
// '{"firstName":"John","lastName":"Doe" }, ' +
// '{"firstName":"Eke","lastName":"Oje" },' +
// '{"firstName":"Ebuka","lastName":"Debio" }]}';

// const obj = JSON.parse(text);
// document.getElementById("demo1").innerHTML = 
// obj.employees[1].firstName + " " +
// obj.employees[1].lastName;

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;