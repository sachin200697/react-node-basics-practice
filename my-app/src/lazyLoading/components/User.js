import React, { useEffect, useState } from 'react';

function LazyUser() {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setUsers([{name: 'sachin', add: 'BSR'}]);
        }, 2000);
    }, []);

    if(Math.random() > .5){
      return new Error('Error occured');
    }
  return (
    <div>      
      <div>
        <ul>
            {/* {users.map((user, index)=>{
                return <li key={index}>
                    name: {user.name}
                </li>
            })} */}
            <li>Hello</li>
        </ul>
      </div>
    </div>
  );
}

export default LazyUser;
