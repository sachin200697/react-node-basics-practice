import React, { useState } from "react";

// Note: to insert icons we can use command => (window + semicolon)
function Folder({ data, onCreate }) {
  const [open, setOpen] = useState(false);
  const [showInput, setShowInput] = useState({
    createFolder: null,
    show: false,
  });

  const showInputRender = (isCreateShow) => {
    setShowInput((prev) => ({ createFolder: isCreateShow, show: true }));
  };

  const createFolderOrFile = (e) => {
    if (e.keyCode === 13 && e.target.value) {
        onCreate(data.id, e.target.value, showInput.createFolder);
        setShowInput({...showInput, show: false});
        alert('folder created')
    }    
  };

  if (data.isFolder) {
    return (
      <div
        style={{ marginBottom: "5px", marginTop: "5px", marginLeft: "20px" }}
      >
        <div
          // to open or close sub folders
          onClick={() => setOpen(!open)}
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
            backgroundColor: "rgba(0,0,0,.2)",
            cursor: "pointer",
          }}
        >
          <span>📁{data.name}</span>

          {/* to create folder or file */}
          <div onClick={(e) => e.stopPropagation()}>
            <button onClick={() => showInputRender(true)}>Folder</button>
            <button onClick={() => showInputRender(false)}>File</button>
          </div>
        </div>
        {showInput.show && (
          <input
            type="text"
            onBlur={(e) => setShowInput({ show: false, createFolder: null })}
            onKeyDown={(e)=>createFolderOrFile(e)}
            autoFocus
          />
        )}
        {open
          ? data.items.map((item) => <Folder key={item.id} data={item} onCreate={onCreate}/>)
          : null}
      </div>
    );
  } else {
    return (
      <div style={{ marginBottom: "5px", marginTop: "5px", marginLeft: "20px" }}>
        <span onClick={() => setOpen(!open)}>📄 {data.name}</span>
      </div>
    );
  }
}

export default Folder;
