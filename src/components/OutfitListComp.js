import React, {useState,useContext} from "react";
import { withNavigation } from "react-navigation";
import { Text, StyleSheet,View, Image,Button, FlatList, TouchableOpacity} from "react-native";


import {Context} from '../context/OutfitContext'
import {Feather } from '@expo/vector-icons';
import ImageDetail from './ImageDetail';


const OutfitListComp = (props) => {

    
  const {state, addOutfit, deleteOutfit} = useContext(Context);

    
  return <View style= {styles.view}> 
    
    
    
    <FlatList 
      data={state} 
      KeyExtractor={(outfitItem) => {return outfitItem.title}} 
      renderItem={({item}) => {
        console.log("RENDERING A OUTFIT ITEM WITH ID: " + item.id);
        return <TouchableOpacity onPress = {() => {addOutfit()}}>
          <View style= {styles.row}> 
            <Text>{item.id}</Text>

            <TouchableOpacity  onPress={() => {deleteOutfit(item.id)}}>
                 <Feather name = "trash" style={styles.icon}/>
             </TouchableOpacity>

          </View>
        </TouchableOpacity>
        
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
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
        
      },
      icon: {
        fontSize: 40
      },
});

export default withNavigation(OutfitListComp);
