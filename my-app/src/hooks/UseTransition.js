import React, { useState, useTransition } from 'react';

export default function UseTransition() {
    const [isPending, startTransition] = useTransition();

    const [value, setValue] = useState('');
    const [list, setList] = useState([]);    

    const LIST_SIZE = 20000;

    //here becuase creating the arr array will take much time 
    // but react try to run all state change together so that it will render
    // component at last to optimise it (react try to reduce re-rendering due to state changes)
    // so setValue will also take time and we shall be block on screen for this time
    const handleChange = (e)=>{
        setValue(e.target.value);
        let arr = [];
        for(let i=0; i<LIST_SIZE; i++){
            arr.push(e.target.value);
        }
        setList(arr);
    }

    //To solve above issue we can use useTransition 
    // by default all state changes have high priority, using useTransition we can make 
    // it's priority low, so that high priority state chagne will execute first then 
    // low priority state change will execute
    // Disadvantage of it -> Now it will increate re-rendering because high priority
    // state changes will execute first and will cause re-render of component
    // then low priority state change will execute and cause re-render again

    const handleChangeWithUseTransition = (e)=>{
        setValue(e.target.value);
        
        startTransition(()=>{
            let arr = [];
            for(let i=0; i<LIST_SIZE; i++){
                arr.push(e.target.value);
            }
            setList(arr);
        });
    }
    console.log(isPending, list.length);
    return (
        <div>
            {/* <input type='text' value={value} onChange={handleChange} /> */}
            <input type='text' value={value} onChange={e=>handleChangeWithUseTransition(e)} />
            {isPending? "Pending......" : list.map((num, index)=><p key={index}>{num}</p>)}
        </div>
    );
}
