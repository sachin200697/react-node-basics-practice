import React, { useEffect, useRef } from 'react';

function isChanged (prevDependencies, newDependencies) {
    if(!prevDependencies) return true;
    
    for(let i = 0; i<prevDependencies.length; i++){
        if(prevDependencies[i] !== newDependencies[i]){
            return true;
        }
    }
    return false;
}

function usePolyfilMemo(callback, dependencies) {
  // 1. something to store values
  //we can not use useState as it will not remain same on unmount also can not use
  // normal variable as it will be lost on re-render of component
  const ref = useRef(null);
  
  // 2. Change the value
  if(!ref.current || isChanged(ref.current.dependencies, dependencies)) {
    ref.current = {
        value: callback(),
        dependencies
    }
  }

  // 3. Cleanup on unmount
  useEffect(()=>{
    return ()=>{
        ref.current = null;
    }
  }, []);

  // 5. return value
  return ref.current.value;
}

export default usePolyfilMemo;
