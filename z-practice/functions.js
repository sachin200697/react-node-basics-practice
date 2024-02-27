//1. first class functions -> functions that can be treated as variable

//2. What if IIFE -> immediately invoke function expresstions
(function A() {
    console.log(54);
})();

// function A(...rest){} // this is called rest operation
// a rest parameter should be the last parameter, means 
// function A(a,b, ...rest, c, d) => {} will give error 
// A(...[2,3]) // this is called spread operation

// Difference b/w arrow and normal functionS
// arrow function does not has arguments object
function f(){
    console.log(arguments);
}
const f1 = () => {console.log(arguments);}

// f(1,2,3);   //[Arguments] { '0': 1, '1': 2, '2': 3 }
// f1(1,2,3);  //error


//create a function that will run only once
function callOnce(fun, context) { //context is an object 
    let run;
    return function (){
        if(fun){
            run = fun.apply(context||this, arguments);
            fun = null;
        }else {

            run = null;
        }
        return run;
    }
}
let myFun1 = function (name, address){
    console.log(name, this.age, address);
};

let myFun2 = function (name, address){
    console.log(name, this.age, address);
};

myFun1 = callOnce(myFun1, {age: 12});
myFun2 = callOnce(myFun2);

myFun1('sahcin', 'meerpur');    //sahcin 12 meerpur
myFun1('pradeep', 'meerpur');  

myFun2('Naman', 'BSR'); //Naman undefined BSR
myFun2('pradeep', 'meerpur');
