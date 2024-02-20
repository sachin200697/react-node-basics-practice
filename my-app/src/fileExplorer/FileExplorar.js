import React, { useState } from 'react';
import { fileExplorarData } from './data/Data';
import Folder from './Folder';
import { useCreateNode } from './customHook/insertNodeHook';

function FileExplorar() {
    const [data, setData] = useState(fileExplorarData);
    const {insertFolderOrFile} = useCreateNode();

    const onCreate = (id, name, isFolder) => {
        const tree = insertFolderOrFile(data, id, name, isFolder);
        setData(tree);
    }
  return (
    <div>
      File Explorar
      <Folder data={data} onCreate={onCreate} />
    </div>
  );
}

export default FileExplorar;
