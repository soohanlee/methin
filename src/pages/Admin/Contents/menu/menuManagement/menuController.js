export function makeTreeToLinear(tree, parentNode = null)
{
    let arr = [];

    tree.forEach((node)=> {
        const linearNode = {
            id : node.key,
            full_name : node.name,
            isDisplay : node.isDisplay,
            parent_id : parentNode !== null ? parentNode.id : null,
            root_parent_id : parentNode !== null ? parentNode.parent_id : null
        }
        arr.push(linearNode);

        if(node.children)
        {
            const children = makeTreeToLinear(node.children, linearNode);
            arr.push(...children);    
        }    
    });
    return arr;
}

export function compareMenuItem(a,b)
{
    if(
        a && b &&
         a.id === b.id && 
        a.parent_id === b.parent_id && 
        a.root_parent_id === b.root_parent_id && 
        a.full_name == b.full_name && 
        a.isDisplay === b.isDisplay)
    {
        return true
    }
    else
    {
        return false;
    }    
}