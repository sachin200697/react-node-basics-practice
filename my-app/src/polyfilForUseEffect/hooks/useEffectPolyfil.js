import React, { useRef } from 'react';

function useEffectPolyfil(effect, dependencies) {
    const effectRef = useRef({dependencies: null, firstTime: true, callback: null});

    if(effectRef.current.firstTime){
        effectRef.current.callback = effect();
        effectRef.current.dependencies = JSON.stringify(dependencies);
        effectRef.current.firstTime = false;
        return;
    }
    
    // console.log(effectRef.current.dependencies, dependencies);
    const nextCall = dependencies ? JSON.stringify(dependencies) !== effectRef.current.dependencies : true;
    effectRef.current.dependencies = JSON.stringify(dependencies);

    if(nextCall){
        if(effectRef.current.callback && typeof effectRef.current.callback === 'function'){
            effectRef.current.callback();
        }
        effectRef.current.callback = effect();
    }

}

export default useEffectPolyfil;
