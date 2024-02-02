import React, { useEffect, useState } from 'react';

export default function Iframe() {
    const [isResponseBack, setIsResponseBack] = useState(false);

    const handleResponse = (data) => {
        if (data && typeof data === 'string') {
            // const responseData = JSON.parse(data);
            // if (responseData || responseData.createSRSResponse) {
            //     console.log(responseData);
            //     window.removeEventListener('message', this.eventHandler, false);                                
            //     setIsResponseBack(true);
            // }
        }
    }
    const getResponseBack = (e) => {
        if(window.location.origin !== e.origin || isResponseBack){
            console.log(window.location.origin, e.origin);
            return;
        }
        console.log(e.data);
        handleResponse(e.data);
    }
    
    useEffect(()=>{
        document.getElementById('iframe-form').submit();
        window.addEventListener('message', getResponseBack, false);
    }, []);
  let renderFields = () => {
    let elements = [];

    for(let i =1; i<5;i++){
        elements.push(
            <input type='hidden' value={i} name={`parm${i}`} key={Math.random()}/>
        )
    }
  }
  return (
    <div>
      <form action='http://localhost:7000/iframe' method='post' target='myiframe' id='iframe-form'>
        {renderFields()}
      </form>

      <iframe name='myiframe' style={{width: '100vw', height: '100vh'}}/>
    </div>
  );
}
