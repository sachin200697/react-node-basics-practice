import React, { useEffect, useState } from 'react';

const getInitialValue = (key, value) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }
    if(value instanceof Function){
        return value();
    } 
    return value;
}

export default function useCustom(key, name) {
  const [value, setValue] = useState(()=>{
    return getInitialValue(key, name);
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  
  return [value, setValue];
}
