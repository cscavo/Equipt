import React, {useContext} from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import NavBarComp from "../components/NavBarComp";
import WardrobeButtonComp from "../components/WardrobeButtonComp";
import ClosetList from "../components/ClosetListComp";
import {Context} from '../context/ClothingContext';


const ClosetScreen = (props) => {
  const {state, addClothing} = useContext(Context);

  const filterByCategory = (category) =>{
    let myFilteredArray = state.filter((state) =>{
      return state.category === category;
    })
    return myFilteredArray;
  }

  return(
    <View style={styles.image}>
      

      <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                          buttonBold={styles.closetButtonBold}/>

      <Text style={styles.text}>Closet</Text>
      

      <View style={styles.closetListContainer}>
        <ClosetList  data= {state}/>
      </View>

      <NavBarComp wardrobeIconBox={styles.wardrobeNavBar}
            onPressCamera={() => {props.navigation.navigate("AddClothing")}}
            onPressProfile={() => {props.navigation.navigate("Profile")}}/>

    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    alignSelf: "center",
    paddingTop: 20,
    color: "#02200E"
  },
  closetButtonBold: {
    height: 80,
    width: 187,
    top: 61,
    position: "absolute",
    //justifyContent: "flex-start",
    //alignItems: "flex-start",
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    //borderColor: "#3B153B",
    //backgroundColor: "#E7D7E7"
    borderColor: "#193625",
    backgroundColor: '#DAE7E0'
  },
  wardrobeNavBar: {
    opacity: 1
  },
  image: {
    flex: 1,
    backgroundColor: "#FFFDF9"
  },
  closetListContainer: {
    flex: 1
  }
});

export default ClosetScreen;
