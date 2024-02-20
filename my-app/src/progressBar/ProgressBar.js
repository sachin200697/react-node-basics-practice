import React, { useEffect, useState } from 'react';
import Progress from './components/Progress';

function ProgressBar() {
    const [percentage, setPercentage] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(()=>{
        let interval = setInterval(()=>{
            setPercentage((val)=>val+1);
        }, 50);

        return ()=>{
            clearInterval(interval);
        }
    }, []);

    const onComplete = (value)=>{
        setCompleted(value);
    }
  return (
    <div>
        <h1>Progress Bar</h1>
      <Progress percentage={percentage} maxPercentage={90} onComplete={onComplete}/>
      <div>
        <span>{completed?'Completed':'Loading...'}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
