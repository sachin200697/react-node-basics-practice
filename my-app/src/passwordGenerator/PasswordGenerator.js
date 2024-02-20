import PasswordConstraints from "./components/PasswordConstraints";
import "./password-generator.css";
import React, { useEffect, useState } from "react";
import useGeneratePassword from "./customHook/useGeneratePassword";
import PasswordStrength from "./components/PasswordStrength";

function PasswordGenerator() {
    const { password, error, generatePassword } = useGeneratePassword();
    const [length, setLength] = useState(4);
    const [copy, setCopy] = useState('Copy');
    const [constraints, setConstraints] = useState([
        {
            id:"uppercase",
            title: 'Include Uppercase Letter',
            state: true
        },
        {
            id:"lowercase",
            title: 'Include Lowercase Letter',
            state: false
        },
        {
            id:"number",
            title: 'Include Numbers',
            state: false
        },
        {
            id:"symbol",
            title: 'Include Symbols',
            state: false
        }
    ])

    const onCopy = ()=>{
        setCopy('Copied');
        setTimeout(()=>{
            setCopy('Copy')
        }, 1000);
        navigator.clipboard.writeText(password);  
        
    }

    const onConstraintChange = (index)=>{
        let toUpdateConstraint = {...constraints[index]};
        let updateConstraints = [...constraints];

        toUpdateConstraint.state = !toUpdateConstraint.state;
        updateConstraints[index] = toUpdateConstraint;
        setConstraints(updateConstraints);
        
    }

    //to generate password automatically in case constraints or length changes
    // useEffect(()=>{
    //     generatePassword(constraints, length);
    // }, [constraints, length]);

    const onGererateClick = ()=>{
        generatePassword(constraints, length);
    }

  return (
    <div className="password-container">
      <div className="password__value">
        <p>{password}</p>
        <button className="password__value-copy" onClick={onCopy}>{copy}</button>
      </div>
      <div className="password__length">
        <p>Character Length</p>
        <p>{length}</p>
      </div>

      <input type="range" min={4} max={20} className="password__range" value={length} onChange={e=>setLength(e.target.value)}/>

      <PasswordConstraints constraints={constraints} onConstraintChange={onConstraintChange}/>

      <PasswordStrength length={length} />

      <button className="password__button" onClick={onGererateClick}>Generate Password</button>
    </div>
  );
}

export default PasswordGenerator;
