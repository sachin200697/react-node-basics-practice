// Hooks only be used in function components
// They should execute in same order in every render, 
//  means we can not use hooks inside an if block, function, loops or any other block

import React, { useState } from "react";

function initialValueIncorrect() {
    console.log('Initial Vlue Incorrect');
    return 14;
}
export default function UseState(props) {
    // const [count, setCount] = useState(0);  //this is incorrect way to provide initial value
    // because this will run every time
    // we can see it by using below code 
    // const [count, setCount] = useState(initialValueIncorrect()); // this wil print 'Initial Vlue Incorrect' everytime
    // when this component renders

    //below is proper way to initialize state
    // we are providing a function refrence (not calling it, useState will call it only one)
    const [count, setCount] = useState(()=>{
        console.log('This is proper way and will run only once');
        return 5;
    });
    // we can also use like below code
    // const [count, setCount] = useState(initialValueIncorrect);   
    //not calling initialValueIncorrent

    // Note: Difference from state updation in class based components
    // if we are using useState and we have an object state with multiple properties
    //  for example {name: 'sachin', age: 12} in that we if we are updating the state then
    //  need to provide all properties to change it otherwise it will override the existing 
    //  object and other properties will be lost


    const incrementCountIncorrentWay = ()=>{
        setCount(count+1);  //this is incorrent way to update it
        setCount(count+1);  // as we used the setCount two times so it should increment
        // count state by 2 but it does not work in this way because it is incorrent way
        // to update state
        // here count is not representing the previous state it is just representing the 
        // state value for the current render means for both times count value will be same
        // and both times setCount will use the same value to update state, means second
        // setCount will use same value not the updated one
    }

    const incrementCount = () => {
        // here setCount is taking previous value instead of current reder value of the state 
        // it means every time it will use update value of the state
        setCount(prevCount=>prevCount+1);
        setCount(prevCount=>prevCount+1);
    }

    const decrementCount = () => {
        setCount(prevCount=>prevCount-1);
    }

    return <React.Fragment>
        <button onClick={incrementCountIncorrentWay}>+ Incorrent way</button>
        <button onClick={incrementCount}>+</button>
        <span> {count} </span>
        <button onClick={decrementCount}>-</button>
    </React.Fragment>

}