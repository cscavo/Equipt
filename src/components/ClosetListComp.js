import React, {useState,useContext} from "react";
import { withNavigation } from "react-navigation";
import { Text, StyleSheet,View, Image,Button, FlatList, TouchableOpacity} from "react-native";

import {Context} from '../context/ClothingContext';
import {Feather } from '@expo/vector-icons';
import ImageDetail from './ImageDetail';


const ClosetList = (props) => {

    
  const {state, addClothing, deleteClothing} = useContext(Context);
    
  return <View style= {styles.view}> 
    
    
    
    <FlatList data={state} 
    KeyExtractor={(clothingItem) => {return clothingItem.title}} 
      renderItem={({item}) => {
        console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.id);
        return <TouchableOpacity onPress = {() => {props.navigation.navigate("Closet")}}>
        <View style= {styles.row}> 
          <ImageDetail imageSource= {require('../../assets/chiyo_christmas.png')} /> 
          <Image style={styles.image} source='../../assets/chiyo christmas.png'/>
          

          
            <TouchableOpacity  onPress={() => {deleteClothing(item.id)}}>
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
