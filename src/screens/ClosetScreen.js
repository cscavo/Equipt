import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import NavBarComp from "../components/NavBarComp";
import WardrobeButtonComp from "../components/WardrobeButtonComp";

//WILL CONTAIN: Closet Screen, Add clothing piece

const ClosetScreen = (props) => {
  return (

    <View>

      <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                          closetButtonBold={styles.closetButtonBold}/>

      <Text style={styles.text}>Closet</Text>


      <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            profileIcon={require('../../assets/person_UI.png')}
            toProfileButton={() => {props.navigation.navigate("Profile")}}/>

    </View>
  
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    alignSelf: "center",
    paddingTop: 20
  },
  closetButtonBold: {
    borderWidth: 3,
  },
});

export default ClosetScreen;
