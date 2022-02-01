
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + //"this" keyword refers to an object
        this.lastName;                //this keyword refers to different objects
                                      // depending on how it is used:
    }
};

document.getElementById("person").innerHTML = person.fullName();

