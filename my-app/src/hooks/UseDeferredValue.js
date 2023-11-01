import React, { useDeferredValue, useMemo, useState } from 'react';

export default function UseDeferredValue() {
    const [text, setText] = useState('');
    return (
        <div>
            <input type='text' value={text} onChange={e=>setText(e.target.value)} />
            <List value={text}/>
        </div>
    );
}

function List({value}) {
    //useDeferredValue is used to get the debouncing or throttling effect means
    //if value changes then it wait for sometime and after that it will change 
    //the actual value
    
    const LIST_SIZE = 20000;

    // if we don't use useDeferredValue then it will take much time to update
    // but if we use then it will wait for sometime to update the actual value
    const deferredValue = useDeferredValue(value);
    //instead of deferredValue if we use value only then our application will be block for
    //sometime because to create a list of value it will take some time, and in this time
    //we can't see the entered input in input element as well

    let list = useMemo(()=>{
        let list = [];
        for(let i=0;i<LIST_SIZE;i++){
            list.push(<div key={i}>{deferredValue}</div>)
        }
        return list;
    }, [deferredValue]);

    return list;
}
