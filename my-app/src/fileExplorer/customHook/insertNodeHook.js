export const useCreateNode = () => {

    //tree traversal algorithm
    const insertFolderOrFile = (tree, id, name, isFolder) => {
        if(tree.id === id) {
            tree.items.unshift({id: new Date().getTime(), name, isFolder, items: []});            
        }else {
            if(tree.items.length){
                for(let item of tree.items){
                    insertFolderOrFile(item, id, name, isFolder );
                }
            }
        }
        return tree;
    }

    return {insertFolderOrFile};
}