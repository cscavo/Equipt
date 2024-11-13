import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBarComp from "../components/NavBarComp";

const ProfileScreen = (props) => {
  return (
  <View>    

    <Text style={styles.text}>ProfileScreen</Text>

    <NavBarComp closetIcon={require('../../assets/wardrobe_UI.png')} 
                toClosetButton={() => {props.navigation.navigate("Closet")}}
                profileIcon={require('../../assets/person_UI.png')}/>

  </View>
  
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ProfileScreen;
