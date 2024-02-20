//Module pattern -> returning only relivent methods and not all the methods

let Module = (function(){
    function privateMethod(name){
        console.log('Private helper method with name:', name);        
    }

    function publicMethod(name){
        privateMethod(name);
    }

    return {
        publicMethod
    };
})();

Module.publicMethod('Sachin');  //Private helper method with name: Sachin
// Module.privateMethod('pk'); //TypeError: Module.privateMethod is not a function