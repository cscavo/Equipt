import React, {useState,useContext} from "react";
import { withNavigation } from "react-navigation";
import { Text, StyleSheet,View, Image,Button, FlatList, TouchableOpacity} from "react-native";

import {Context} from '../context/ClothingContext';
import {Context as OutfitContext} from '../context/OutfitContext';
import {Feather } from '@expo/vector-icons';
import ImageDetail from './ImageDetail';



const ClosetList = (props) => {

    
  const {state, addClothing, deleteClothing} = useContext(Context);

  const clothingItemID = props.navigation.getParam("id");
  


  /*const clothingItem = props.data.find((clothingItem) => {
    return clothingItemID === clothingItem.id;
  })*/
    
    
    
    const filter = <View style= {styles.view}> 
    <FlatList data={props.data} 
    KeyExtractor={(clothingItem) => {return clothingItem.id}} 
      renderItem={({item}) => {
        console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.category);
        return <TouchableOpacity onPress = {props.addToOutfit}>
        <View style= {styles.row}> 
          <Text>
            {item.category}
          </Text>
          <ImageDetail imageSource= {require('../../assets/chiyo_christmas.png')} /> 
        </View>
        </TouchableOpacity>
    }} /> 
    
</View>
//FLATLIST NOT BEING FILTERED
  const noFilter = <View style= {styles.view}> 
    <FlatList data={props.data} 
    KeyExtractor={(clothingItem) => {return clothingItem.id}} 
      renderItem={({item}) => {
        console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.category);
        return <TouchableOpacity onPress = {() => {props.navigation.navigate("Closet")}}>
        <View style= {styles.row}> 
          <Text>
          {item.category}
          </Text>
          <ImageDetail imageSource= {require('../../assets/chiyo_christmas.png')} />  
        </View>
        </TouchableOpacity>
    }} /> 
    
</View>
  
  return props.screenState === "filter"? filter: noFilter;
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
        borderColor: 'red',
        justifyContent: "space-between",
        flexGrow: 1
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

export default withNavigation(ClosetList);
