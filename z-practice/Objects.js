//delete keyword 
function Question1() {
    let fun = (function (a){
        delete a;   //delete keywork works for objects not for local variables, so will not impact anything
        return a;   // will return 5 as passed
    })(5);
    
    console.log(fun);   //5
}

function Question2() {
    let a = {};
    let b = {key: 'b'};
    let c = {key: 'c'};

    a[b] = 10;
    a[c] = 20;
    // for above two statements b and c is an object and it will be converted to 
    // [object object] for the key of a .
    // a[b] = 10 ==> a[[object object]] = 10;
    // a[c] = 20 ==> a[[object object]] = 20;   // it will replace the first statement

    console.log(a); //{ '[object Object]': 20 }
    console.log(a[b]);  //20
    console.log(a[c]);  //20
}

//difference b/w toString and JSON.stringify and JSON.parse()
// frequesntly use case: JSON.stringify and JSON.parse, when we 
// store data in session storage then we use it
function Question3(){
    let obj = {
        name: 'sk',
        age: 15
    };
    let toStringObj = obj.toString();
    let stringifyObj = JSON.stringify(obj);
    let parseObj = JSON.parse(stringifyObj);
    
    console.log(toStringObj);   //[object Object]
    console.log(stringifyObj);  //{"name":"sk","age":15}
    console.log(parseObj);      //{ name: 'sk', age: 15 }

    let obj1 = {
        name: 'sk',
        age: 14,
        add: 'BSR',
        occ: 'SD'
    }

    // second agruments tells that which properties need to stringify
    console.log(JSON.stringify(obj1, ['name', 'add'])); //{"name":"sk","add":"BSR"}
}

function Question4() {
    console.log([...'sachin']); //[ 's', 'a', 'c', 'h', 'i', 'n' ]
}

function Question5() {
    let obj1 = {
        name: 'sk'
    }
    let obj2;
    obj2 = obj1;    //referencing to same obj

    obj2.name = 'pk';
    console.log(obj2, obj1);    //{ name: 'pk' } { name: 'pk' }

    console.log({a:1}=={a:1});  //false
    console.log({a:1}==={a:1}); //false 
    // {a:1}==={a:1}, This condition will always return 'false' since 
    // JavaScript compares objects by reference, not value.

    let person = {name: 'sk'};
    let members = [person]; 
    person = null;
    console.log(members);   //[ { name: 'sk' } ]

    person = {name: 'sk'};
    members = [person]; 
    person.name = 'pk';
    console.log(members);   //[ { name: 'pk' } ]
}

function Question6() {
    const value = {a: 20};

    const multiply = (x= {...value}) => {   
        console.log((x.a*=2));
    };

    multiply(); // here multiply will take value from value object and create a new object
    multiply(); // here multiply will take value from value object and create a new object

    // here we are passing value object so now value object(outside) and multiply 
    //function's x object poining to same object, so it will modify origin object 
    //as well
    multiply(value); 
    multiply(value);
}

function Question7() {
    function changeObject(person) {
        person.name = 'pk';
        person = {
            name: 'dk',
            age: 10
        }
        return person;
    }

    const personObj1 = {
        name: 'sk',
        age: 20
    }

    const personObj2 = changeObject(personObj1);
    console.log(personObj1, personObj2);
}

// shallow copy and deep copy 
function Question8(){
    // shallow copy -> both obj referencing to same 
    // object or at least some of the properties of object 
    function shallowCopy() {
        let obj1 = {
            name: {
                firstName: 'Sachin',
                lastName: 'Kumar'
            },       
            age: 10,        
        }
        let obj2 = obj1;    //shallow copy obj2 is referencing to same object as obj1
        obj2.age = 20;
        console.log(obj1); 
    }
    // shallowCopy();
    //-----------------------
    function deepCopy1() {        
        let obj1 = {
            name: {
                firstName: 'Sachin',
                lastName: 'Kumar'
            },        
            age: 10,        
        }

        // it will make partial deep copy means nested object will be shallow coppied
        let obj2 = {...obj1}; 
        obj2.age = 20;
        obj2.name.firstName = 'Pradeep';
        console.log(obj1);  //{ name: { firstName: 'Pradeep', lastName: 'Kumar' }, age: 10 }
        console.log(obj2);  //{ name: { firstName: 'Pradeep', lastName: 'Kumar' }, age: 20 }
    }
    deepCopy1();
    function deepCopy2() {        
        let obj1 = {
            name: {
                firstName: 'Sachin',
                lastName: 'Kumar'
            },        
            age: 10,        
        }

        // it will make partial deep copy means nested object will be shallow coppied
        let obj2 = Object.assign({}, obj1);   
        obj2.age = 20;
        obj2.name.firstName = 'Pradeep';
        console.log(obj1);  //{ name: { firstName: 'Pradeep', lastName: 'Kumar' }, age: 10 }
        console.log(obj2);  //{ name: { firstName: 'Pradeep', lastName: 'Kumar' }, age: 20 }
    }

    function deepCopy3() {        
        let obj1 = {
            name: {
                firstName: 'Mahander',
                lastName: {
                    middle: 'singh',
                    last: 'dhoni'
                }
            },        
            age: 10,  
            fun: function () {console.log('sk');}
        }

        //it has some limitations. It only works for objects that can be serialized 
        // into JSON, which means it cannot handle functions, dates, regular expressions, 
        // maps, sets, or other complex types. It also cannot handle circular references, 
        // which are objects that refer to themselves or other objects in a loop.
        // if we use this method for objects that has a function then it will not
        // copy the function and that property (for function) will be undefined 
        let obj2 = JSON.parse(JSON.stringify(obj1));
        obj2.age = 20;
        obj2.name.firstName = 'Pradeep';
        obj2.name.lastName.last = 'prashad';
        console.log(obj1);  //{ name: { firstName: 'Mahander', lastName: { middle: 'singh', last: 'dhoni' } }, age: 10, fun: [Function: fun] }
        console.log(obj2);  //{ name: { firstName: 'Pradeep', lastName: { middle: 'singh', last: 'prashad' } }, age: 20 }
    }

    // we can also use lodash => _.cloneDeep(obj) 
    // deepCopy3();
}

Question8();