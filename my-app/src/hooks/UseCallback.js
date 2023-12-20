import React, { useCallback, useEffect, useState } from 'react';

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  //even if we change the theme then this function will be re-created due to 
  // assignment and will cause NumberList to re-render
//   const getNumberList = () => {
//     return [number, number+1, number+2];
//   }

const getNumberList = useCallback(() => {
    return [number, number+1, number+2];
    }, [number]);


  // even function declaration also cause re-render if theme changes
  function getNumberListWithFunctionDeclaration() {
      return [number, number+1, number+2];
  }

  const style = {
    backgroundColor: theme? 'black': 'white',
    color: theme? 'white': 'black'
  };
  return (
    <div>
        <input type='number' onChange={e=>setNumber(parseInt(e.target.value))} value={number} />
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        <div style={style}>
            <NumberList getNumberList={getNumberList} />
        </div>
        <div>
          <NumberListWithFunctionDeclaration getNumberList={getNumberListWithFunctionDeclaration} />
        </div>
    </div>
  );
}




function NumberList({getNumberList}) {
  const [list, setList] = useState(null);
  useEffect(()=>{
    console.log('NumberList rendered');
    setList(getNumberList());
  }, [getNumberList]);
  return (
    <div>
      {list && list.map((item, index)=><p key={index}>{item}</p>)}
    </div>
  );
}


function NumberListWithFunctionDeclaration({getNumberList}) {
  const [list, setList] = useState(null);
  useEffect(()=>{
    console.log('NumberList with function declaration rendered');
    setList(getNumberList());
  }, [getNumberList]);
  return (
    <div>
      {list && list.map((item, index)=><p key={index}>{item}</p>)}
    </div>
  );
}
