import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBarComp from "../components/NavBarComp";

//WILL CONTAIN: Closet Screen, Add clothing piece

const ClosetScreen = (props) => {
  return (

    <View>
      <Text style={styles.text}>ClosetScreen</Text>

      <NavBarComp closetIcon={require('../../assets/wardrobe_UI.png')} 
                  profileIcon={require('../../assets/person_UI.png')}
                  toProfileButton={() => {props.navigation.navigate("Profile")}}/>
      
    </View>
  
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ClosetScreen;
