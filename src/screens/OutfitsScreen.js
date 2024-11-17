import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import NavBarComp from "../components/NavBarComp";
import WardrobeButtonComp from "../components/WardrobeButtonComp";

//WILL CONTAIN: Outfit Screen, Add outfit, Select clothing type

const OutfitsScreen = (props) => {
  return (

  <View>

    <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                        outfitsButtonBold={styles.outfitsButtonBold}/>

    <Text style={styles.text}>Outfits</Text>

    <TouchableOpacity>
        <Image style={styles.addOutfitIcon} source={require('../../assets/addOutfit_UI.png')} />
    </TouchableOpacity>

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
  outfitsButtonBold: {
    borderWidth: 3,
  },
  addOutfitIcon: {
    position: "absolute",
    height: 80,
    width: 80,
    alignSelf: "flex-end",
    top: 270,
    right: 10
  },
});

export default OutfitsScreen;
