import React, {useState,useContext} from "react";
import { withNavigation } from "react-navigation";
import { Text, StyleSheet,View, Image,Button, FlatList, TouchableOpacity} from "react-native";


import {Context} from '../context/OutfitContext';
import {Context as SkinColorContext} from '../context/SkinColorContext';
import {Feather } from '@expo/vector-icons';
import ImageDetail from './ImageDetail';



const OutfitListComp = (props) => {

  const {skinColorState, changeSkinColor} = useContext(SkinColorContext);
  const {state, addOutfit, deleteOutfit} = useContext(Context);
  
    
  return <View style= {styles.view}> 
    
    
    
    <FlatList 
      data={state} 
      KeyExtractor={(outfitItem) => {return outfitItem.title}} 
      renderItem={({item}) => {
        console.log("RENDERING A OUTFIT ITEM WITH ID: " + item.id + " " + item.top + " " + item.bottom + " " + item.accessory);
        console.log("skinColor " + skinColorState.skinColor)
        return <View style= {{backgroundColor: skinColorState.skinColor}}> 
            
          <View style= {styles.row}> 

            <TouchableOpacity  onPress={() => {deleteOutfit(item.id)}}>
                 <Feather name = "trash" style={styles.icon}/>
             </TouchableOpacity>

            <Image style= {{height: 100, width: 100, borderWidth: 2}} source= {item.top}></Image>
            <Image style= {{height: 100, width: 100, borderWidth: 2}} source= {item.bottom}></Image>
            <Image style= {{height: 100, width: 100, borderWidth: 2}} source= {item.accessory}></Image>

          </View>
          </View>

        
    }} /> 
    
</View>
  
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        paddingVertical: 20
        
    
      },
      listText:{
          fontSize: 15,
          paddingVertical: 20
      },
      roster: {
        alignItems: "center",
        
      },
      view: {
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        paddingVertical: 20,
        //height: -10
      },
      row:{
        flexDirection: 'row',
        gap: 12,
        //alignItems: "stretch",
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomWidth: 7,
        borderColor: "white",
      },
      icon: {
        fontSize: 28,
        left: 8,
        bottom: 12
      },
});

export default withNavigation(OutfitListComp);
