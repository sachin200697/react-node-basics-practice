// Disadvantage of using useMemo: 
// 1. It will call and aditional function
// 2. Will store the result somewhere, so will eat some memory
import React, { useEffect, useMemo, useState } from "react";

export default function UseMemo(props){
    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    // this will block the process for 2 seconds
    // but it should only happen when we change number state
    // in this case it will also execute if we change darkTheme as well
    // to overcome from this issue we can use useMemo hook
    // const doubleNumber = slowDouble(number);

    const doubleNumber = useMemo(()=>{
        return slowDouble(number);
    }, [number]);   //first argument is a callback function and second is an array of the 
    // elemnets on which if depends similar to useEffect dependency array

    // here we are not using useMemo and useEffect is depend upon this style object
    // it means useEffect with execute once style object changes
    // but problem is this, if we change theme then style object will change, so it is ok
    // but if numer also changes then component will re-render and it will again initialize
    // style object, so it again changes and useEffect will execute again but that will cause
    // performance issues, so to over come with this we can use useMemo again
    // const style = {
    //     backgroundColor: darkTheme? 'black': 'white',
    //     color: darkTheme?'white':'black',
    //     padding: '5px'
    // };

    const style = useMemo(()=>{
            return {
                backgroundColor: darkTheme? 'black': 'white',
                color: darkTheme?'white':'black',
                padding: '5px'
            }
        }, [darkTheme]);

    useEffect(()=>{
        console.log('style changed');
    }, [style]);

    return <React.Fragment>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>setDarkTheme(!darkTheme)}>Change Theme</button>
        <p style={style}>{doubleNumber}</p>
    </React.Fragment>
}

function slowDouble(number) {
    let i = 0;
    while(i<1000000000){i++;}
    return number*2;
}