import React, {useState,useContext} from "react";
import { withNavigation } from "react-navigation";
import { Text, StyleSheet,View, Image,Button, FlatList} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Context} from '../context/BlogContext';
import {Feather } from '@expo/vector-icons';
import ImageDetail from '.../ImageDetail';


const ClosetListComp = (props) => {

    
    const {state,} = useContext(Context);
    
  return <View style= {styles.view}> 
    
    
    
    <FlatList data={state} 
    KeyExtractor={(blogPost) => {return blogPost.title}} 
      renderItem={({item}) => {
        console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.id);
        return <TouchableOpacity onPress = {() => {props.navigation.navigate("Closet"), item.id}}>
        <View style= {styles.row}> 
          <ImageDetail /> 
          

          
            <TouchableOpacity  onPress={() => {}}>
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

export default withNavigation(ClosetListComp);
