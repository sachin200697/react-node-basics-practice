// useRef return an object with current property and change of this object will
//  not cause re-render of component
// most common use ref to use it to represent an dom element
import React, { useEffect, useRef, useState } from "react";

export default function UseRef(props){
    const [name, setName] = useState('');

    /*
    /// to show infinity render problem
    const [renderCount, setRenderCount] = useState(0);

    //because if we update renderCount then it will cause component to update and useEffect
    // will run again then it again update renderCount, so it will cause infinity loop 
    useEffect(()=>{
        setRenderCount(renderCount+1);
    });

    /// to show infinity render problem
    */

    const renderCount = useRef(0);
    // useRef will return an object that has a current property with value = 0
    // ex: renderCount = { current: 0 }

    useEffect(()=>{
        // we can also use ref objects to remember the previous state values
        renderCount.current += 1;
    });

    const inputElement = useRef(null);

    const handleClick = () => {
        inputElement.current.focus();
        // Note:
        // we should not use ref to appendChild or to update the html element value
        // or to change any other attribute of html element
    }
    return <React.Fragment>
        <input type="text" ref={inputElement} value={name} onChange={e=>setName(e.target.value)} />
        <p>My name is {name}</p>
        {/* <p>This component rendered {renderCount} times</p> */}
        <p>This component rendered {renderCount.current} times</p>
        <button onClick={handleClick}>Write Name</button>
    </React.Fragment>
}