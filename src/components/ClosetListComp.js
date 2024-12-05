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
    
    
  //CURRENTLY NOT BEING USED
    const filter = <View style= {styles.view}> 
    <FlatList 
    data={props.data} 
    numColumns={2}
    KeyExtractor={(clothingItem) => {return clothingItem.id}} 
      renderItem={({item}) => {
        console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.category);
        return <TouchableOpacity onPress = {props.addToOutfit}>
        <View> 
          <Text style={styles.text}>
            {item.id}
          </Text>
          <ImageDetail imageSource= {item.imagePath} /> 
        </View>
        </TouchableOpacity>
    }} /> 
    
</View>


//FLATLIST NOT BEING FILTERED
  const noFilter = <View style= {styles.container}> 
    <FlatList 
    data={props.data} 
    numColumns={2}
    KeyExtractor={(clothingItem) => {return clothingItem.id}} 
      renderItem={({item}) => {
        console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.category);
        return <View> 
            <ImageDetail description={item.category} imageSource= {item.imagePath} />  
          </View>
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
        padding: 20
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
      image: {
        height: 200,
        width: 200,
      },
      container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        top: 20,
        width: 340,
        bottom: 90,
      }
});

export default withNavigation(ClosetList);
