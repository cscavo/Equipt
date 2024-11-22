import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import NavBarComp from "../components/NavBarComp";

const ProfileScreen = (props) => {
  return (
  <View style={styles.container}>    

    <Text style={styles.text}>Profile</Text>

    <Image style={styles.chooseSkinColor}></Image>
    <Image style={styles.stats}></Image>

    <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            onPressWardrobe={() => {props.navigation.navigate("Closet")}}
            onPressCamera={() => {props.navigation.navigate("AddClothing")}}
            profileIcon={require('../../assets/person_UI.png')} profileIconBox={styles.profileButtonBold}/>

  </View>
  
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 50,
  },
  chooseSkinColor: {
    height: 110,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    margin: 20,
    backgroundColor: 'lightgrey',
  },
  stats: {
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    flex: 1,
    margin: 10,
    backgroundColor: 'lightgrey'
  },
  profileButtonBold: {
    borderWidth: 3,
    borderRadius: 4
  },
  container: {
    flex: 1
  }
});

export default ProfileScreen;
