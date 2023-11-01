import React, { useImperativeHandle, useRef } from 'react';
import './popup.css';

function Popup({}, ref) {   //ref should be the second argument
    const closeRef = useRef();
    const yesRef = useRef();
    const noRef = useRef();
    useImperativeHandle(ref, ()=>{
        return {
            focusCloseBtn: () => {closeRef.current.focus()},
            focusYesBtn: () => {yesRef.current.focus()},
            focusNoBtn: () => {noRef.current.focus()}
        }
    }, []); //third argument is for dependency on which useImperativeHandle will re-run

    const onBtnClick = (msg) => {
        alert(msg);
    }
    return (
        <div ref={ref} className='popup'>
            <h1>Hello, SK</h1> 
            <div>
                <button ref={yesRef} className='focus-btn' onClick={()=>onBtnClick('Yes')}>Yes</button>
                <button ref={noRef} className='focus-btn' onClick={()=>onBtnClick('No')}>No</button>
                <button ref={closeRef} className='focus-btn' onClick={()=>onBtnClick('Close')}>Close</button>
            </div>           
        </div>
    );
}

// we can not use ref for a custom function so to use it we shall have to use 
// forwardRef
export default React.forwardRef(Popup);
