import React, { useEffect, useState } from "react"
export default function StopWatch(props) {  
    const [minute, setMinute] = useState(0);  
    const [second, setSecond] = useState(0);    

    // to get inputs from user to set minutes and seconds
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    // it is for start and stop functionality
    const [isActive, setIsActive] = useState(true);

    // testing only
    const [flag, setFlag] = useState(1);

    useEffect(()=>{        
        let timer = null;            
        if(isActive) {
            timer = setInterval(()=>{
                if(second){
                    setSecond(second-1);
                }else{
                    if(minute){
                        setMinute(minute-1);
                        setSecond(59);
                    }
                }
            }, 100);
        } else if(timer){            
            clearInterval(timer);
        }

        return ()=>{            
            clearInterval(timer);
        }
    });   

    //for testing start
    useEffect(()=>{        
        let timer = setInterval(()=>{
            setFlag(prevFlag=>prevFlag+1);
        }, 1000)        
        return ()=>{            
            clearInterval(timer);
        }
    }, []);
    //for testing end

    const onReset = () =>{
        setMinute(input1?input1:0);
        setSecond(input2?input2:0);
    }

    const startWatch = ()=>{
        setIsActive(true);
    }
    const stopWatch = ()=>{
        setIsActive(false);
    }

    return <React.Fragment>
        <div style={{border: '1px solid black', padding: '10px'}}>
            <h1>Stop Watch</h1>        
            <h3>{minute}:{second}</h3>
            <input type="number" placeholder="minute" value={input1} onChange={(e)=>setInput1(e.target.value)} min={0}/>
            <input type="number" placeholder="second" value={input2} onChange={(e)=>setInput2(e.target.value)} min={0}/>
            <div>
                <button onClick={onReset}>Reset</button>
                <button onClick={startWatch}>Start</button>
                <button onClick={stopWatch}>Stop</button>
            </div>
        </div>
        <br></br><br></br>
        <div style={{border: '1px solid black', padding: '10px'}}>
            <h1>Only for testing how to use setInterval inside useEffect</h1>
            <h3>{flag}</h3>
        </div>
    </React.Fragment>
}