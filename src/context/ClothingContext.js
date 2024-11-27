import React, {useReducer} from "react";
import createDataContext from "./createDataContext"

const generateClothing = () => {
    let clothing = {};
     clothing.id = Math.floor(Math.random()* 9999);
     clothing.imagePath = '../../assets/chiyo christmas.png';

     return clothing
}
const clothingReducer = (state, action) => {
    switch(action.type){
         case 'add_clothing':
            return [...state, generateClothing()]
            case 'delete_clothing':
                return state.filter((clothingItem) => {
                    return clothingItem.id !== action.payload
                })

        
        default:
            return state;
        
        
    }   
}
const addClothing = (dispatch) => {
    return async (title, content, callback) =>{
  
    dispatch({type: 'add_clothing', payload: {}})
    callback();
    }
}
const deleteClothing = (dispatch) => {
    return (id) =>{
    dispatch({type: 'delete_clothing', payload: id })
}
}

export const {Context, Provider} = createDataContext(clothingReducer,
                                    {addClothing, deleteClothing}, 
                                    [{title: "TEST TITLE", imagePath: '../../assets/chiyo christmas.png', id: 1}]);
