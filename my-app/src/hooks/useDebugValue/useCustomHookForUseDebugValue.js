// we can only use useDebugValue hook inside custom hook
// we can see the debug value using react devtool extension -> inspent -> developer tools -> components

import React, { useDebugValue, useState } from 'react';

export default function useCustomHookForUseDebugValue(initialValue) {
    const [value, setValue] = useState(initialValue);
    useDebugValue(value);   //we can give only single value
    useDebugValue('Hello');
    useDebugValue({name:'sachin'});

    //useDebugValue(slowFunction(value)); // it will slow down the application, 
    //so we can use below version of this hook
    useDebugValue(value, v => slowFunction(v)); // we can pass second argument as 
    // function, this function will take v (that will be equal to value means first argument)
    // and will pass in slowFunction
    // but second agrument function will be called if it takes less time otherwise it will
    // not execute on prod or even in development

    // to check the dubug value:
    // -> developer tools -> Component -> Click on UseDebugValue component
    // right side you can see props, hooks and render by
    // -> hooks -> expand CustomHookForUseDebugValue (name can be different based on code)
    // all debug value will be inside an array

    const onChange = (changedValue) => {
        alert(changedValue);
        setValue(changedValue);
    }
    return [value, onChange];
}

function slowFunction(value){
    for(let i=0;i<200000;i++){        
    }
    return value;
}