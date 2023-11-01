import React, { useRef, useState } from 'react';
import Popup from './Popup';

function UseImperativeHandle(props) {
    const [show, setShow] = useState(false);
    const popup = useRef();
    return (
        <div>
            <div>
                <button onClick={()=>setShow(!show)}>Show</button>
                <button onClick={()=>popup.current.focusYesBtn()}>Focus Yes</button>
                <button onClick={()=>popup.current.focusNoBtn()}>Focus No</button>
                <button onClick={()=>popup.current.focusCloseBtn()}>Focus Close</button>
            </div>
            <div>
                {show && <Popup ref={popup}/>}
            </div>
        </div>
    );
}

export default UseImperativeHandle;

