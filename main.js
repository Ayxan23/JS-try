//Task1

//1.Defining a Teacher() constructor function
function Person(name, age, gender, habit) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.habit = habit;
}
Person.prototype.greeting = function () {
  console.log("Hi!" + " my name is " + this.name);
};
function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender);
  this.subject = subject;
}

//2.Creating a Teacher subclass and setting its prototype and constructor reference
Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false, // forbid the usage of 'for in' loop
  writable: true,
});

//3.Giving Teacher() a new greeting() function
Teacher.prototype.greeting = function () {
  console.log("Hi" + " my name is " + this.name + "I teach " + this.subject);
};

let person1 = new Person("Jane", 22, "F", "Sport");
let teacher1 = new Teacher("Jack", 21, "M", "Math");
Teacher.prototype.greeting = function () {
  console.log(
    "Hi, " + " my name is " + this.name + ". I teach " + this.subject
  );
};
console.log(person1.greeting());
console.log(teacher1.greeting());

//Task2

//2.1
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};
console.log(test.func());

//2.2
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());
console.log(obj2.getThis());

const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis());

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis());

function getThisStrict() {
  "use strict";
  return this;
}

Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict());

console.log(typeof getThisStrict());

function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis);

[1, 2, 3].forEach(logThis, { name: "obj" });

const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject);

const obj = { name: "obj" };

console.log(foo.call(obj) === globalObject); 

const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject);

function C() {
    this.a = 37;
  }
  
  let o = new C();
  console.log(o.a);
  
  function C2() {
    this.a = 37;
    return { a: 38 };
  }
  
  o = new C2();
  console.log(o.a);

  class C {
    instanceField = this;
    static staticField = this;
  }
  
  const c = new C();
  console.log(c.instanceField === c); 
  console.log(C.staticField === C); 