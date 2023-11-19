// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Prototype methods
Person.prototype.greet = function () {
    console.log('Hello, my name is ' + this.name);
};

Person.prototype.getAge = function () {
    return this.age;
};

// Create instances
const john = new Person('John', 25);
const alice = new Person('Alice', 30);

// Access instance properties
console.log(john.name); 
console.log(alice.age); 

// Call prototype methods
john.greet(); 
console.log(alice.getAge()); 

// Inheritance using prototypes
function Student(name, age, school) {
    Person.call(this, name, age);
    this.school = school;
}

// Inherit prototype methods
Student.prototype = Object.create(Person.prototype);

// Add additional methods
Student.prototype.study = function () {
    console.log(this.name + ' is studying at ' + this.school);
};

// Create Student instance
const bob = new Student('Bob', 20, 'XYZ University');

// Access inherited and additional properties/methods
bob.greet();
console.log(bob.getAge()); 
bob.study(); 