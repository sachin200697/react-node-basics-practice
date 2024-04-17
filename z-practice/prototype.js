function q1() {
  let a = 12;
  console.log(a.__proto__);
  console.log(a.__proto__ === Number.prototype);

  console.log(Object.prototype);
  console.log(a.__proto__.__proto__ === Object.prototype);

  console.log(a.__proto__.__proto__.__proto__); //null
}

// q1();

function q2() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.increment = function () {
    console.log("age", age); //age 20
    age++; //it will do nothing because it does not know whose age it needs
    // to increment, to tell it we need to use this keyword
    this.age++;
  };

  let p1 = Person("sk", 21); //p1 is undefined as Person is not returning anything
  let p2 = Person("pk", 20); //p2 is undefined as Person is not returning anything
  // p2.increment(); // TypeError: Cannot read properties of undefined (reading 'increment')
  // this error comes because p2 and p1 don't know that they have access to method increment
  // to tell them we need to use new keywork while creating p1 and p2.

  console.log(p1, p2); //undefined undefined

  let p3 = new Person("dk", 22);
  p3.increment();
  console.log(p3); //Person { name: 'dk', age: 23 }
}

// q2();

function q3() {
  let Person = {
    name: "sachin",
  };
  let Teacher = {
    experience: 12,
    __proto__: Person, //instead of using like this, we can
    // Object.setPrototypeOf(Teacher, Person);
  };

  // Object.setPrototypeOf(Teacher, Person);
  console.log(Teacher.name); //sachin
  console.log(Teacher.__proto__); //{ name: 'sachin' }
  console.log(Teacher.__proto__ === Object.prototype); //false
}

function q4() {
  
}
q4();
