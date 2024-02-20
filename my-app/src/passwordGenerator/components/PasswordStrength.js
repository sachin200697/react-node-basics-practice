import React, { useEffect, useState } from 'react';

function PasswordStrength({length}) {
    const [strength, setStrength] = useState('Weak');
    const getStrength = ()=>{
        let updateStrength = '';
        if(length<=8){
            updateStrength='Weak';
        }else if(length<=12){
            updateStrength="Medium";
        }else if(length<=16){
            updateStrength="Strong";
        }else if(length>16){
            updateStrength='Very Strong';
        }
        return updateStrength
    };

  return (
    <div className="password__strength">
        <span>Strength</span>
        <span>{getStrength()}</span>
      </div>
  );
}

export default PasswordStrength;
