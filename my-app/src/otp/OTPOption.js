import React, { useEffect, useRef, useState } from "react";

function OTPOption({ digits, onOTPSubmit }) {
  const [otpVlaues, setOtpValues] = useState(new Array(digits).fill(''));

//   creating ref to point to event input element to focus on them
const inputRef = useRef([]); //making it an array to store all input elements

  const handleOptChange = (e, index) => {
    alert('change');
    alert(isNaN(e.target.value));
    const otpVal = e.target.value;
    if(isNaN(otpVal) || !otpVal){
        return;
    }
    let newOtpValues = [...otpVlaues];
    newOtpValues[index] = otpVal[otpVal.length-1];

    setOtpValues(previousValue=>newOtpValues);
    const nextInputIndex = ((index + 1) < digits && e.key !=='Backspace') ? (index+1): index;
    const inputToFocus = inputRef.current[nextInputIndex];

    inputToFocus.focus();
    inputToFocus.setSelectionRange(inputToFocus.value.length, inputToFocus.value.length);

    const otpToSumnit = newOtpValues.join('');
    console.log(otpToSumnit);
    if(otpToSumnit.length === digits){
        onOTPSubmit(otpToSumnit)
    }

  };
  const handleClick = (e, index)=>{
    // because input filed can have only one digit we can setSelectionRance(1,1) to 
    // send the curson at last
    inputRef.current[index].setSelectionRange(1,1);

    //focus on first empty input box
    const emptyInputBoxIndex = otpVlaues.indexOf('');    
    console.log(otpVlaues);
    if(emptyInputBoxIndex!==-1)
    {inputRef.current[emptyInputBoxIndex].focus();}
  }
  const handleKeyDown = (e, index) =>{        
    if(e.key === 'Backspace'){
        let newOtpValues = [...otpVlaues];
        newOtpValues[index] = '';
        setOtpValues(previousValue=>newOtpValues);
        if((index-1)>=0){

            inputRef.current[index-1].focus();                
        }
    }
  }  

  useEffect(()=>{   
    console.log('inputref', inputRef.current[0]);
    if(inputRef.current[0]) {
        inputRef.current[0].focus();
    }
  }, []);

  return (
    <div>
      {otpVlaues.map((val, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(input)=>(inputRef.current[index]=input)}
            value={val}
            onChange={(e) => handleOptChange(e, index)}
            onClick={(e)=>handleClick(e, index)}
            onKeyDown={(e)=>handleKeyDown(e, index)}
            className="otp-options"                    
          />
        );
      })}
    </div>
  );
}

export default OTPOption;


// console.log(isNaN(''), isNaN(), isNaN(undefined), isNaN(null), isNaN('123'), isNaN('12e3'), isNaN(12));
// false true true false false false false

