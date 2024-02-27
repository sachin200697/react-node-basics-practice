import React from 'react';

function Pill({image, firstName, lastName, email, onClick}) {
    const handleOnClick = ()=>{
        onClick(email);
    }
  return (
    <span className='pill-container' onClick={handleOnClick}>
      <img src={image}  alt={`${firstName} ${lastName}`} className='pill-container__img'/>
      <span className='pill-container__name'>{firstName} {lastName}</span>
      <span>❌</span>  
    </span>
  );
}

export default Pill;
