import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBarComp from "../components/NavBarComp";

const ProfileScreen = (props) => {
  return (
  <View>    

    <Text style={styles.text}>Profile</Text>

    <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            toWardrobeButton={() => {props.navigation.navigate("Closet")}}
            profileIcon={require('../../assets/person_UI.png')}/>

  </View>
  
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center"
  },
});

export default ProfileScreen;
