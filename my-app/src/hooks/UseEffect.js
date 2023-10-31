import React, {useEffect, useState} from "react";

export default function UseEffect(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize)

        // it will execute second time if useEffect executes or on unmount of the component 
        return () => {
            console.log('use effect after first render ');
            window.removeEventListener('resize', handleResize);
        }
    })

    return <React.Fragment>
        <p>window width: {windowWidth}</p>
    </React.Fragment>
}