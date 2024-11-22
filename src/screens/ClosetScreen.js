import React, {useState} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import NavBarComp from "../components/NavBarComp";
import WardrobeButtonComp from "../components/WardrobeButtonComp";


const ClosetScreen = (props) => {

  return(
    <View style={styles.image}>

      <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                          closetButtonBold={styles.closetButtonBold}/>

      <Text style={styles.text}>Closet</Text>

      <Image style={styles.image}/>

      <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} wardrobeIconBox={styles.closetButtonBold}
            profileIcon={require('../../assets/person_UI.png')}
            onPressCamera={() => {props.navigation.navigate("AddClothing")}}
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
