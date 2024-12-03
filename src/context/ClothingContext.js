import React, {useReducer} from "react";
import createDataContext from "./createDataContext"


const generateClothing = (category, image) => {
    let clothing = {};
    //let clothingTagArray = ["Top", "Bottom", "Accessory"]
     clothing.id = Math.floor(Math.random()* 9999);
     clothing.imagePath = image;
     clothing.category = category;

     return clothing;
}
const clothingReducer = (state, action) => {
    switch(action.type){
         case 'add_clothing':
            return [...state, generateClothing(action.payload.category)]
            case 'delete_clothing':
                return state.filter((clothingItem) => {
                    return clothingItem.id !== action.payload
                })

        
        default:
            return state;
        
        
    }   
}
const addClothing = (dispatch) => {
    return async (category, image, callback) =>{
  
    dispatch({type: 'add_clothing', payload: {category, image}})
    callback();
    }
}

/*(const deleteClothing = (dispatch) => {
    return (id) =>{
    dispatch({type: 'delete_clothing', payload: id })
}
}*/

export const {Context, Provider} = createDataContext(clothingReducer,
                                    {addClothing}, 
                                    [{category: "top", imagePath: '../../assets/chiyo christmas.png', id: 1}]);

