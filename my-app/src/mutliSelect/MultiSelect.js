// dummyjson user api
// https://dummyjson.com/users/search?q=Jo
import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import Pill from "./components/Pill";
import "./multi-select.css";
import axios from "axios";

function MultiSelect() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [uniqueSelectedUsers, setUniqueSelectedUsers] = useState(new Set());
  const inputRef = useRef();  

  const fetchUsers = async (term) => {
    if(!term) {
      setSuggestedUsers([]);
      return;
    }
    const { data } = await axios.get(
      `https://dummyjson.com/users/search?q=${term}`
    );
    setSuggestedUsers(data.users);
  };

  useEffect(() => {
    const timer = setTimeout(()=>{
      fetchUsers(searchTerm);
    }, 1000);

    return ()=>{
      clearTimeout(timer);
    }
  }, [searchTerm]);

  const onSelectUser = (user) =>{
    setSelectedUsers([...selectedUsers, user]);
    setSearchTerm('');
    setSuggestedUsers([]);
    setUniqueSelectedUsers(new Set([...uniqueSelectedUsers, user.email]));
    inputRef.current.focus();
  }

  const onRemoveUser = (email) => {
    const updateUsers = selectedUsers.filter(user=>user.email !==email);
    setSelectedUsers(updateUsers);

    const updateUniqueUsers = new Set([...uniqueSelectedUsers]);
    updateUniqueUsers.delete(email);
    console.log(email);
    setUniqueSelectedUsers(updateUniqueUsers);
  }
  
  const removeUserOnBackspace = (e)=>{
    let length = selectedUsers.length;
    if(e.key === 'Backspace' && !e.target.value && length>0){
      let updateSelectedUsers = selectedUsers.slice(0, length-1);
      let updateUniqueUsers = new Set([...uniqueSelectedUsers]);
      updateUniqueUsers.delete(selectedUsers[length-1].email);
      setSelectedUsers(updateSelectedUsers);
      setUniqueSelectedUsers(updateUniqueUsers);
    }
  }

  return (
    <div>
      <div className="multi-select-container">
        {selectedUsers.map((user) => (
          <Pill
            key={user.id}
            image={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            onClick={onRemoveUser}
            email={user.email}
          />
        ))}
        <div className="multi-select">
          <input
            type="text"
            className="multi-select-container__input"
            placeholder="Search for a user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
            onKeyDown={e=>removeUserOnBackspace(e)}
          />
          <ul className="multi-select-container__suggestion">
            {suggestedUsers.map((user, index) => {

              if(uniqueSelectedUsers.has(user.email)){
                return null;
              }
              return (
                <li
                  key={user.id}
                  className="multi-select-container__suggesteduser"
                  onClick={()=>onSelectUser(user)}
                  tabIndex={index+1}
                >
                  <img src={user.image} alt={user.image} />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;
