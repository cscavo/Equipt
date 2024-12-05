import React, {useReducer} from "react";
import createDataContext from "./createSkinColorDataContext"


const skinColorgReducer = (skinColorState, action) => {
    switch(action.type){
         case 'change_skin_color':
            return {...skinColorState, skinColor: action.payload.skinColor}
        default:
            return state;
        
        
    }   
}
const changeSkinColor = (dispatch) => {
    return async (skinColor, callback) =>{
  
    dispatch({type: 'change_skin_color', payload: {skinColor: skinColor}})
    callback();
    }
}


export const {Context, Provider} = createDataContext(skinColorgReducer,
                                    {changeSkinColor}, 
                                    {skinColor: "efdb0"});

