// evaluate('sum')(4)(2) => 6
// evaluate('mul')(4)(2) => 8
// evaluate('div')(4)(2) => 2
// evaluate('sub')(4)(2) => 2

function Question1() {
    function evaluate(type) {
        return function (a) {
            return function (b) {
                if(type === 'sum') return a+b;
                else if (type === 'mul') return a*b;
                else if(type === 'div') return a/b;
                else if(type === 'sub') return a-b;
                else return 'Invalid operation';
            }
        }
    }
    
    console.log(evaluate('sum')(4)(2));
    console.log(evaluate('mul')(4)(2));
    console.log(evaluate('div')(4)(2));
    console.log(evaluate('sub')(4)(2));
    
    //can also use like this
    let mul = evaluate('mul');
    console.log(mul(4,5));
    console.log(mul(10,5));
    
}

//infinite currying
function Question2() {
    function fun(a) {
        return function (b) {
            if(b) return fun(a+b);
            else return a;
        }
    }

    console.log(fun(1)());
    console.log(fun(1)(2)());
    console.log(fun(1)(2)(3)());
    console.log(fun(1)(2)(3)(4)());

}

//currying vs partial application
function Question3() {
    // currying -> not of return function depends upon the no. of arguments passed
    //ex:
    function fun(a){
        return (b) => {
            return (c) =>{
                return a+b+c;
            }
        }
    }
    console.log(fun(1)(2)(3));

    // partial application -> transform a function to another function with a small
    // arity(arity is the no of operands or arguments that a function receives)
    // ex:
    function sum(a){
        return (b,c) => {
            return a+b+c;
        }
    }

    console.log(sum(1)(2,3));
    
}

//real application example to use currying
function Question4() {
    function changeContent(id){
        return (content)=>{
            document.getElementById(id).textContent = content;
        }
    }

    const updateTitle = changeContent('image-heading');
    updateTitle('Car image');
}

//write a function that converts a functin into a currying function
function Question5() {
    const sum = (a,b,c)=>a+b+c;
    console.log(sum.length);    //it will be equal to the arguments function sum takes

    function convertCurry(fun){
        return function resultFun(...args) {
            if(args.length >= fun.length){
                return fun(...args);
            }else {
                return function middleFunctin(...rest){
                    return resultFun(...args, ...rest);
                }
            }
        }
    }

    let curryingSum = convertCurry(sum);
    console.log(curryingSum(1)(2)(3));
    
    let fun1 = curryingSum(1);
    let fun2 = fun1(2);
    let fun3 = fun2(3);

    console.log(fun1, fun2, fun3);  //[Function: middleFunctin] [Function: middleFunctin] 6
}

Question5();
