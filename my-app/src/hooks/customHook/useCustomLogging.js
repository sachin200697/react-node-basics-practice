import React, { useEffect } from 'react';

export default function useCustomLogging(value) {
  useEffect(()=>{
    console.log('Logger', value);
  }, [value])
}
