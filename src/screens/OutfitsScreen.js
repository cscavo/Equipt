import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Touchable} from "react-native";
import NavBarComp from "../components/NavBarComp";
import WardrobeButtonComp from "../components/WardrobeButtonComp";

//WILL CONTAIN: Outfit Screen, Add outfit, Select clothing type


const OUTFIT_SCREEN_STATE = "closet";
const ADDOUTFIT_SCREEN_STATE = "addClothing";
const CHOOSECLOTHING_SCREEN_STATE = "chooseclothing";
var whatToDisplay;

const OutfitsScreen = (props) => {

  const [screenState, setScreenState] = useState(OUTFIT_SCREEN_STATE)
  const [clothingType, setClothingType] = useState("");

  switch(screenState){

    case OUTFIT_SCREEN_STATE:
      whatToDisplay = 

      <View>

        <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                        outfitsButtonBold={outfit_styles.outfitsButtonBold}/>

        <Text style={outfit_styles.text}>Outfits</Text>

        <TouchableOpacity onPress={() => {setScreenState(ADDOUTFIT_SCREEN_STATE)}}>
          <Image style={outfit_styles.addOutfitIcon} source={require('../../assets/addOutfit_UI.png')} />
        </TouchableOpacity>

        <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} wardrobeIconBox={outfit_styles.outfitsButtonBold}
              profileIcon={require('../../assets/person_UI.png')}
              onPressCamera={() => {props.navigation.navigate("AddClothing")}}
              onPressProfile={() => {props.navigation.navigate("Profile")}}/>

      </View>

      break;

    case ADDOUTFIT_SCREEN_STATE:
      whatToDisplay = 

      <View>
        <Text style={addOutfit_styles.equipText}>Equip Clothing</Text>
        <Image style={addOutfit_styles.background}></Image>

        <View style={addOutfit_styles.buttonContainer}>

          <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                           {setClothingType("Tops")}}}>
            <Image style={addOutfit_styles.clothingButton}></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                           {setClothingType("Bottoms")}}}>
            <Image style={addOutfit_styles.clothingButton}></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                           {setClothingType("Accessories")}}}>
            <Image style={addOutfit_styles.clothingButton}></Image>
          </TouchableOpacity>

        </View>

        
      </View>
        
        

      break;


    case CHOOSECLOTHING_SCREEN_STATE:
      whatToDisplay = 
      <View>

        <TouchableOpacity onPress={() => {setScreenState(ADDOUTFIT_SCREEN_STATE)}}>
          <Image style={chooseClothing_styles.backArrow} source={require('../../assets/backArrow_UI.png')}></Image>
        </TouchableOpacity>
        <Text style={chooseClothing_styles.text}>{clothingType}</Text>

      </View>
        
      break;

  }

  
  return whatToDisplay;
  
};

const outfit_styles = StyleSheet.create({
  text: {
    fontSize: 35,
    alignSelf: "center",
    paddingTop: 20
  },
  outfitsButtonBold: {
    borderWidth: 3,
    borderRadius: 4
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

const addOutfit_styles = StyleSheet.create({
  equipText: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 20
  },
  background: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 80,
    height: 350,
    width: 400,
    backgroundColor: "lightgrey"
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: "flex-end",
    marginTop: 55,
    right: 40,
    gap: 25
  },
  clothingButton: {
    height: 80,
    width: 80,
    backgroundColor: "slategrey",
  }
});

const chooseClothing_styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 25
  },
  backArrow: {
    height: 70,
    width: 70,
    marginTop: 10,
    position: "absolute"
  }
});


export default OutfitsScreen;
