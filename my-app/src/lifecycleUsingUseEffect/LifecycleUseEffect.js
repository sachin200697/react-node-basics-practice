import { useEffect, useState } from "react";


export default function LifecycleUseEffect(props){
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    
    useEffect(()=>{
        console.log('Every time');
    });

    //componentDidMount
    useEffect(()=>{
        console.log('One time');
    }, []);

    //componentDidUpdate
    useEffect(()=>{
        console.log('On Update of value 1');
    }, [value1]);

    //componentWillUnmount
    useEffect(()=>{
        console.log('componentDidMount');
        return ()=>{
            console.log('componentWillUnmount');
        }
    })

    const checkUseEffectComeFirstOrRender = () => {
        console.log('render method');
        return <h1>Render method</h1>
    }
    return <div>
        <h1>Lifecycle using useEffect hook</h1>
        <button onClick={e=>setValue1(value1+1)}>Increment value1</button>
        <button onClick={e=>setValue2(value2+1)}>Increment value2</button>
        {checkUseEffectComeFirstOrRender()}
    </div>
}