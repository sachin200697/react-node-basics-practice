import React, { useEffect, useMemo, useState } from 'react';
import usePolyfilMemo from './hooks/usePolyfilMemo';

function PolyfilUserMemmo() {
    const [increment, setIncrement] = useState(()=>0);
    const [decrement, setDecrement] = useState(()=>100);

    // const obj = {
    //     counter: increment
    // };

    const getIncrementValue = (value) => {
      console.log('getIncrementValue called');
      return {
        counter: value
      }
    }

    //useMemo will not effect ExternalComponent component log, 
    // it only effect on the function that passed as first agrument to useMemo
    // const obj1 = useMemo(()=>{
    //   return getIncrementValue(increment);
    // }, [increment]);

    const obj2 = usePolyfilMemo(()=>getIncrementValue(increment), [increment]);
    
  return (
    <div>
        <button onClick={()=>setIncrement(increment+1)}>Increment</button>
        <button onClick={()=>setDecrement(decrement-1)}>Decrement</button>
        <div>
          {/* it will console.log 'getIncrementValue called' even if decrement changes */}
        {/* <ExternalComponent counter={obj} />  */}

        {/* it will console.log 'getIncrementValue called' only if increment changes */}
        {/* <ExternalComponent counter={obj1} /> */}

        {/* it will console.log 'getIncrementValue called' only if increment changes */}
        <ExternalComponent counter={obj2} />
        </div>
    </div>
  );
}

function ExternalComponent({counter}) {
    //useMemo will not effect this log, it only effect on the function that passed as
    // first agrument to useMemo
    console.log('Rendered'); //it will be logged every time because of assignment 

    return <h1>{counter.counter}</h1>;
}

export default PolyfilUserMemmo;
