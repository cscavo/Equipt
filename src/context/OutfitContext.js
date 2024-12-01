import React, {useReducer} from "react";
import createDataContext from "./createDataContext"

var stateLength = 0;

const outfitReducer = (state, action) => {
    switch(action.type){
         case 'add_outfit':
            stateLength++;
            let idMath = stateLength;
            return [...state, {id: idMath}]
            case 'delete_outfit':
                return state.filter((outfitItem) => {
                    return outfitItem.id !== action.payload
                })

        case 'add_TopToOutfit':
                return state.map((outfitItem) => {
                    if (outfitItem.id === action.payload.id) {
                        {
                           
                           

                            return {...state, top: action.payload.top } ;
                        }   
                    }
            
                    else{
                        return blogPost;
                    }
                })
        case 'add_BottomToOutfit':
                return state.map((outfitItem) => {
                    if (outfitItem.id === action.payload.id) {
                        {
                            return {...state, bottom: action.payload.top } ;
                        }  
                    }
            
                    else{
                        return blogPost;
                    }
                })
        case 'add_AccessoryToOutfit':
                return state.map((outfitItem) => {
                    if (outfitItem.id === action.payload.id) {
                        {
                           
                           

                            return {...state, accessory: action.payload.top } ;
                        }


                       
                        
                    }
            
                    else{
                        return blogPost;
                    }
                })

        
        default:
            return state;
        
        
    }   
}
const addOutfit = (dispatch) => {
    return async (title, content,callback) =>{
  
    dispatch({type: 'add_outfit', payload: {}})
    callback();
    }
}
const deleteOutfit = (dispatch) => {
    return (id) =>{
    dispatch({type: 'delete_outfit', payload: id })
}
}
const addToptoOutfit = () =>{
    return (id, top) =>{
        dispatch({type: 'add_TopToOutfit', payload: {top: top, id: id}})
    }
}
const addBottomtoOutfit = () =>{
    return (id, bottom) =>{
        dispatch({type: 'add_BottomToOutfit', payload: {bottom: bottom, id: id}})
    }
}
const addAccessorytoOutfit = () =>{
    return (id, accessory) =>{
        dispatch({type: 'add_AccessoryToOutfit', payload: {accessory: accessory, id: id}})
    }
}

export const {Context, Provider} = createDataContext(outfitReducer,
                                    {addOutfit, deleteOutfit, addToptoOutfit, addBottomtoOutfit, addAccessorytoOutfit}, 
                                    [{}]);

