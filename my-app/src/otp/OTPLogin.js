import React, { useState } from "react";
import OTPOption from "./OTPOption";
import './otp.css';

function OTPLogin() {
  const [phone, setPhone] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmitMobile = () => {
    // regex to check if thre is any character not equel to numeric digit
    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert("Please enter valid phone no");
      return;
    } else {
      setShowOTP(true);
    }
  };

  const onOTPSubmit = (otp)=> {
    alert(`OTP validated successfully: ${otp}`);
  }
  return (
    <div>
      <h2>OTP Authentication</h2>
      {!showOTP ? (
        <div>
          <input
            type="text"
            value={phone}
            onChange={handlePhone}
            placeholder="enter mobile"
          />
          <button onClick={handleSubmitMobile}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Enter OTP sent to mobile: {phone} </p>
          <OTPOption digits={4} onOTPSubmit={onOTPSubmit}/>
        </div>
      )}
    </div>
  );
}

export default OTPLogin;
