import React from 'react';
import useCustom from './useCustom';
import useCustomLogging from './useCustomLogging';

export default function CustomHookExample() {
 const [name, setName] = useCustom('name', '');
 useCustomLogging(name);
  return (
    <div>
      <input type='text' onChange={e=>setName(e.target.value)} />

      <br></br>
      <span>{name}</span>
    </div>
  );
}
