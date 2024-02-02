import React, { useEffect } from 'react';

export default function IframeResult() {
  useEffect(()=>{
    window.parent.postMessage({name: 'sk', value:'21'}, window.location.origin);
  }, []);
  return (
    <div>
      <h1>Hello Iframe</h1>
    </div>
  );
}
