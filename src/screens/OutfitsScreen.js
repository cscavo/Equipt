import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBarComp from "../components/NavBarComp";

//WILL CONTAIN: Outfit Screen, Add outfit, Select clothing type

const OutfitsScreen = () => {
  return (

  <View>
    <Text style={styles.text}>OutfitsScreen</Text>

    <NavBarComp closetIcon={require('../../assets/wardrobe_UI.png')} 
                profileButton={require('../../assets/person_UI.png')}
                toProfileButton={() => {props.navigation.navigate("Profile")}}/>


  </View>

  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default OutfitsScreen;
