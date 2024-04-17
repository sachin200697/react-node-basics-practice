import React, { useCallback, useMemo, useState } from 'react';

function Practice() {
    let [count1, setCount1] = useState(1);
    let [count2, setCount2] = useState(2);
    let [count3, setCount3] = useState(3);

    // const val = (()=>{
    //     slow();
    //     return 5;
    // })();

    const val = useMemo(()=>{  
        slow();      
        return 5;
    }, [count1]);
    
    const fun = useCallback(()=>{
        return 5;
    }, [count1]);

  return (
    <div>
        <div>
        <button onClick={()=>setCount1(count1+1)}>Count 1: {count1}</button>
        <button onClick={()=>setCount2(count2+1)}>Count 2: {count2}</button>
        <button onClick={()=>setCount3(count3+1)}>Count 3: {count3}</button>
        </div>
      {val> 0 ? <ChildMemo val={val} /> : null}
      {/* <ChildCallback fun={fun} /> */}
      <ChildCallbackPure fun={fun}/>
    </div>
  );
}

function slow(){
    for(let i = 0 ;i<100000000;i++);
}
function ChildMemo({val}) {
    console.log('render memo');    
  return (
    <div>
      <span>{val}</span>
    </div>
  );
}

function ChildCallback({fun}) {
    console.log('render callback');
    let val = fun();    
  return (
    <div>
      <span>{val}</span>
    </div>
  );
}

var ChildCallbackPure = React.memo(ChildCallback);



export default Practice;
