import React, {useReducer} from "react";
import createDataContext from "./createDataContext"

var stateLength = 0;

const outfitReducer = (state, action) => {
    switch(action.type){
         case 'add_outfit':
            stateLength++;
            let idMath = stateLength;
            return [...state, {top: action.payload.outfit.top, bottom: action.payload.outfit.bottom, accessory: action.payload.outfit.accessory, id: idMath}]
            case 'delete_outfit':
                return state.filter((outfitItem) => {
                    return outfitItem.id !== action.payload
                })
            case 'change_skin_color':
                return state.map((outfitItem) =>{
                    if (outfitItem.id === action.payload.id){
                        return{...state, id:0, skinColor: action.payload.skinColor}
                    }
                }) 
        default:
            return state;
        
        
    }   
}
const addOutfit = (dispatch) => {
    return async (outfit,callback) =>{
  
    dispatch({type: 'add_outfit', payload: {outfit}})
    callback();
    }
}
const deleteOutfit = (dispatch) => {
    return (id) =>{
    dispatch({type: 'delete_outfit', payload: id })
}
}
const changeSkinColor = (dispatch) => {
    return (id,skinColor) => {
        dispatch({type: 'change_skin_color', payload:{id: 0, skinColor: skinColor}})
    }
}


export const {Context, Provider} = createDataContext(outfitReducer,
                                    {addOutfit, deleteOutfit, changeSkinColor}, 
                                    [{}]);

