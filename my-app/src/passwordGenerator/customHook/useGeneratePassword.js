import React, { useState } from "react";

function useGeneratePassword() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const generatePassword = (constraints, length) => {        
    let availableCharacters = "";
    let gereratedPassword= '';

    constraints
      .filter((con) => {
        return con.state;
      })
      .forEach((con) => {
        switch (con.title) {
          case "Include Uppercase Letter":
            availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return;
          case "Include Lowercase Letter":
            availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
            return;
          case "Include Numbers":
            availableCharacters += "0123456789";
            return;
          case "Include Symbols":
            availableCharacters += "!@#$%^&*()_+";
            return;
          default:
            return;
        }
      });
      if(availableCharacters.length===0){
        setPassword('');
        setError('Please select at least one constraint');
        return;
    }
    for(let i=0;i<length;i++){
        //Math.random=>return a number greater than or equal to 0 and less than 1
        let index = Math.floor(Math.random()*availableCharacters.length);
        gereratedPassword+=availableCharacters[index];
    }
    setPassword(gereratedPassword);
  };

  return { password, error, generatePassword };
}

export default useGeneratePassword;
