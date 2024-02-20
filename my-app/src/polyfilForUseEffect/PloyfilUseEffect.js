import React, { useEffect, useState } from 'react';
import useEffectPolyfil from './hooks/useEffectPolyfil';

function PloyfilUseEffect() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // useEffect(()=>{
    //     console.log('hello');
    //     return ()=>{
    //         console.log('returned value');
    //     }
    // });

    useEffectPolyfil(()=>{
        console.log('ployfil hello');

        return ()=>{
            console.log('polyfil returned');
        }
    }, [count1]);

  return (
    <div>
      <button onClick={()=>setCount1(count1+1)}>Increment Count1</button>
      <button onClick={()=>setCount2(count2+1)}>Increment Count2</button>
      <br></br>
      <div>
        <p>{count1}</p>
        <p>{count2}</p>
      </div>
    </div>
  );
}

export default PloyfilUseEffect;
