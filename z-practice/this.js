function Question1() {
    const person = {
        name: 'sachin',
        printName() {
            console.log(this.name);
        }
    }

    person.printName(); //sachin

    //callback will be called by other obj so this will be different
    setTimeout(person.printName, 1000); //undefined

    // how to point to same name in setTimeout
    setTimeout(()=>{
        person.printName()  //sachin
    }, 1000);

    // or 
    setTimeout(person.printName.bind(person), 1000);    //sachin
}


function Question2() {
    let user = {
        name: 'sachin', 
        print1() {
            const printName = () => {
                // for arrow function this points to parent function's this obj or 
                // to window(in browser) or global( in nodejs) object
                console.log(this.name); //sahcin
            } 
            printName();
        },
        print2() {
            console.log(this);  //pointing to user object
        },
        print3 : () => {
            console.log(this);  // global or wondow object
        }
    }

    // user.print1();
    // user.print2();
    user.print3();
}


function Question3() {
    let obj = {
        read: function () {
            // prompt will work only in browser
            this.a = +prompt('a=', 0);  // + is used to convert string to number
            this.b = +prompt('b=', 0);  
        },
        sum() {
            console.log(this.a+this.b);
        }
    }

    obj.read(); // if give input as 2, 5
    obj.sum();  // 7
}

function Question4() {
    var length = 4;
    function callBack() {
        console.log('length is:', this.length);
    }

    const obj = {
        length: 5,
        myFun(cb) {
            cb();
        }
    }

    obj.myFun(callBack);    
    //in browser output = 4 (because var variables goes to window object and 
    // here callBack this will point to window object

    //but in case of node length will not be added to global obj so will print undefined
}

function Question5() {
    var status = 's1';  //will be added inside window object     
    setTimeout(()=>{
        const status = 's2';

        const obj = {
            status: 's3',
            getStatus(){
                console.log(this.status);
            }
        }

        obj.getStatus();    //s3
        obj.getStatus.call(this);   // in broser it will print s1 (as this = window)

        // globalThis.status = 's8';
        // obj.getStatus.call(this);   //s8  (inside nodejs here this will point to globalThis object)
        
    })
}

function Question6() {
    const animals = [
        {name: 'lion', legs: 4},
        {name: 'ostrich', legs: 2},        
    ]

    function printAnimal(i) {
        this.print = function() {
            console.log(`${i}: name: ${this.name} has ${this.legs} legs`);
        } 
        this.print();
    }

    //call printAnimal to print animals array objects
    animals.forEach((item, index)=>{
        printAnimal.call(item, index);
    });
}

//concate arrays using apply
function Question7() {
    let arr1 = [1,2,3,4];
    let arr2 = [5,6,7,8];

    arr1.push.apply(arr1, arr2);
    console.log(arr1);

    const max = Math.max.apply(null, arr1); // we can also use like Math.max(...arr1)
    console.log(max);
}

function Question8() {
    function f() {
        console.log(this);
    }

    const obj = {
        // because we are passing null and bind pass context like passedObject || this 
        // so passing null means this will be either window or global object
        fn: f.bind(null)
    }
    obj.fn();   //global object (or window object)
}

//bind chaining does not work
function Question9() {
    function fun() {
        console.log(this.name);
    }
    const user = {
        name: 'john'
    }

    //once a function is bind to some object then it will remain bind to same 
    // object for forever, it means if we bind a function multiple time then
    // function will be bind to first object only and ignore the next objects
    const fun1 = fun.bind(user).bind({name: 'sachin'});
    
    fun1(); //john 
}

function Question10() {
    function fun() {
        const print = () => {console.log(this)};
        print();
    }

    const fun1 = () => {
        console.log(this);
    }
    const user = {
        name: 'john'
    }

    // bind, apply and call does not affect arrow functions 
    // they will behave like they behave without bind, apply and call
    fun.bind(user)();   //{ name: 'john' }
    
    fun1.bind(user)(); //global or window object 
}

// polyfil
function Question11() {
    Function.prototype.myCall = function (context, ...args) {
        // here this -> is the function that needs to be called 
        if(typeof this !== 'function') {
            throw new Error('myCall can be called only for function');
        }

        //context is the object that should work like this object for function
        context.fun = this;
        context.fun(...args);
    }

    const fun = function() {
        console.log(this.name);
    }

    fun.myCall({name: 'john'});
}

// polyfil for apply
function Question12() {
    Function.prototype.myApply = function (context, args) {
        // here this -> is the function that needs to be called 
        if(typeof this !== 'function') {
            throw new Error('myApply can be called only for function');
        }

        if(!Array.isArray(args)){
            throw new Error('Arguments should be passed as an array object');
        }

        //context is the object that should work like this object for function
        context.fun = this;
        context.fun(...args);
    }

    const fun = function(a, b) {
        console.log(this.name, (a+b));
    }

    fun.myApply({name: 'john'}, [10, 20]);
}

function Question13() {    
    Function.prototype.myBind = function (context, ...args){
        // here this -> is the function that needs to be called 
        if(typeof this !== 'function') {
            throw new Error('myBind can be called only for function');
        }

        context.fun = this;

        return function(...rest) {
            context.fun(...args, ...rest);
        }
    }

    const fun = function(a, b) {
        console.log(this.name, (a+b));
    }

    const fun2 = fun.myBind({name: 'john'}, 10);
    fun2(20);

}

Question13();

