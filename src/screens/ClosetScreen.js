import React, {useContext} from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import NavBarComp from "../components/NavBarComp";
import WardrobeButtonComp from "../components/WardrobeButtonComp";
import ClosetList from "../components/ClosetListComp";
import {Context} from '../context/ClothingContext';


const ClosetScreen = (props) => {
  const {state, addClothing} = useContext(Context);

  return(
    <View style={styles.image}>

      <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                          closetButtonBold={styles.closetButtonBold}/>

      <Text style={styles.text}>Closet</Text>
      
      <Image style={styles.image}/>

      <ClosetList/>

      <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} wardrobeIconBox={styles.closetButtonBold}
            profileIcon={require('../../assets/person_UI.png')}
            onPressCamera={() => addClothing()}
            onPressProfile={() => {props.navigation.navigate("Profile")}}/>

    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    alignSelf: "center",
    paddingTop: 20
  },
  closetButtonBold: {
    borderWidth: 3,
    borderRadius: 4
  },
  image: {
    flex: 1
  }
});

export default ClosetScreen;
