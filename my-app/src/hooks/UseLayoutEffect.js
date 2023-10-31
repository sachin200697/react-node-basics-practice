// The useLayoutEffect function is triggered synchronously before the 
//  DOM mutations are painted. However, the useEffect function is called after 
//  the DOM mutations are painted.

// It has same signature as useEffect

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';

export default function UseLayoutEffect() {
    const [show, setShow] = useState(false);
    const button = useRef();
    const popup = useRef();
    useLayoutEffect(()=>{
        // we can use when we want to get the position of an html element lets A.
        // because there are other elements as well inside html dom, so it may possible
        // then initially A might not exist or can have different position based on the 
        // other elements
        // So if we use useEffect then we might get the position in between the dom is 
        // being painted, so can get different position then actually
        // in this case we can use useLayoutEffect to get the element A position only
        // after dom is painted totally

        if(button.current && popup.current){
            const {bottom} = button.current.getBoundingClientRect();
            popup.current.style.top = `${bottom + 25}px`;
        }

    }, [show]);

    // we can see the difference by uncommenting the code below
    // it will show 'I am popup' text twice at two positions very quickly
    // useEffect(()=>{
    //     // we can use when we want to get the position of an html element lets A.
    //     // because there are other elements as well inside html dom, so it may possible
    //     // then initially A might not exist or can have different position based on the 
    //     // other elements
    //     // So if we use useEffect then we might get the position in between the dom is 
    //     // being painted, so can get different position then actually
    //     // in this case we can use useLayoutEffect to get the element A position only
    //     // after dom is painted totally

    //     if(button.current && popup.current){
    //         const {bottom} = button.current.getBoundingClientRect();
    //         popup.current.style.top = `${bottom + 25}px`;
    //     }

    // }, [show]);

    return (
        <div>
            <button ref={button} onClick={()=>setShow(!show)}>Show</button>        
            {show && <div ref={popup} style={{position: 'absolute'}}>I am popup</div>}        
        </div>
    );
}
