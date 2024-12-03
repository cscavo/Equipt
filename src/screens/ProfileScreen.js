import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import NavBarComp from "../components/NavBarComp";

const ProfileScreen = (props) => {
  return (
  <View style={styles.container}>    

    <Text style={styles.text}>Profile</Text>

    <View style={styles.skincolorContainer}>
      <Text style={styles.skinColorText}>Skin Color</Text>
      <View style={styles.skinRow}>
        <TouchableOpacity>
          <Image style={{height: 40, width: 40, backgroundColor: "black", borderRadius: 6}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{height: 40, width: 40, backgroundColor: "black", borderRadius: 6}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{height: 40, width: 40, backgroundColor: "black", borderRadius: 6}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{height: 40, width: 40, backgroundColor: "black", borderRadius: 6}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{height: 40, width: 40, backgroundColor: "black", borderRadius: 6}}></Image>
        </TouchableOpacity>
        
        
      </View>
    </View>
    

    

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
    paddingTop: 70,
    paddingBottom: 20
  },
  skincolorContainer: {
    height: 130,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    margin: 20,
    backgroundColor: 'lightgrey',
  },
  skinColorBlock: {
    height: 40,
    width: 40,
    backgroundColor: "black",
    borderRadius: 6
  },
  skinRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 10
  },
  skinColorText: {
    fontSize: 20,
    paddingHorizontal: 27,
    marginVertical: 20,
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
