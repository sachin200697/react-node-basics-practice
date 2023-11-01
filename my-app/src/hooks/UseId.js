import React, { useId } from 'react';

export default function UseId() {

    return (
        <div>
        <div style={{border: '1px solid black', padding: '10px', margin:'20px'}}>
            <EmailIncorrectWay />
            <p>----------Incorrect------------</p>        
            <EmailIncorrectWay />
            {/* this is second EmailIncorrectWat component but id 'email' is same for
                both the component. If we click on the second component Email label then 
                it will focus on first one only because all have same id
            */}
        </div>
        
        <div style={{border: '1px solid black', padding: '10px', margin:'20px'}}>
            <Email />
            <p>----------Correct------------</p>        
            <Email />
        </div>
        
        </div>
    );
}

function EmailIncorrectWay() {
    return <div>
        <label htmlFor='email'>Email: </label>
        <input id='email' />
    </div>
}

function Email() {
    const id = useId();
    return <div>
        <label htmlFor={`${id}-email`}>Email: </label>
        <input id={`${id}-email`} type='text' placeholder='email'/>
        <br></br>

        <label htmlFor={`${id}-name`} placeholder='email'>Email: </label>
        <input id={`${id}-name`} type='text' placeholder='name' />
    </div>
}
