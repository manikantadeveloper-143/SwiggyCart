
export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

//// remove items /////
export const DLT =(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

////individual item remove  CARD DETAILS///
export const REMOVE =(item)=>{
    return{
        type:"RMV_ONE",
        payload:item
    }
}
