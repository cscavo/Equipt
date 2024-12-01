import React, {useState, useContext} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from "react-native";

import {Context} from "../context/OutfitContext";
import {Context as ClothingContext} from '../context/ClothingContext';

import NavBarComp from "../components/NavBarComp";
import WardrobeButtonComp from "../components/WardrobeButtonComp";
import SaveButtonComp from "../components/SaveButtonComp";
import OutfitListComp from "../components/OutfitListComp";
import ClosetList from "../components/ClosetListComp";
import ImageDetail from '../components/ImageDetail';


//WILL CONTAIN: Outfit Screen, Add outfit, Select clothing type


const OUTFIT_SCREEN_STATE = "closet";
const ADDOUTFIT_SCREEN_STATE = "addClothing";
const CHOOSECLOTHING_SCREEN_STATE = "chooseclothing";
var whatToDisplay;

const OutfitsScreen = (props) => {

  const [screenState, setScreenState] = useState(OUTFIT_SCREEN_STATE)
  const [clothingType, setClothingType] = useState("");
  const [imagesToDisplay, setImagesToDisplay] = useState({});
  const image = '../../assets/addOutfit_UI.png';
  
  const {addOutfit, deleteOutfit} = useContext(Context);
  const {state} = useContext(ClothingContext);

  const filterByCategory = (category) =>{
    let myFilteredArray = state.filter((state) =>{
      return state.category === category;
    })
    return myFilteredArray;
  }

  switch(screenState){

    case OUTFIT_SCREEN_STATE:
      whatToDisplay = 

      <View style={outfit_styles.image}>

        <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                        outfitsButtonBold={outfit_styles.outfitsButtonBold}/>

        <Text style={outfit_styles.text}>Outfits</Text>
       <OutfitListComp/>
        <Image style={outfit_styles.image}/>

        <TouchableOpacity onPress={() => {setScreenState(ADDOUTFIT_SCREEN_STATE)}}>
          <Image style={outfit_styles.addOutfitIcon} source={require('../../assets/addOutfit_UI.png')} />
        </TouchableOpacity>

        <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} wardrobeIconBox={outfit_styles.outfitsButtonBold}
              profileIcon={require('../../assets/person_UI.png')}
              onPressCamera={() => {props.navigation.navigate("AddClothing")}}
              onPressProfile={() => {props.navigation.navigate("Profile")}}/>

      </View>

      break;

  // SCREEN WITH MANNEQUIN WHERE YOU SAVE OUTFIT
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
        <Text>
        {imagesToDisplay.top}
        </Text>
        <SaveButtonComp onPressSave={() => {setScreenState(OUTFIT_SCREEN_STATE), addOutfit()}} saveButtonStyle={addOutfit_styles.saveButton}/>

        
      </View>
        
        

      break;

// THE SCREEN WHERE YOU CHOOSE CLOTHING BY CATEOGORY

    case CHOOSECLOTHING_SCREEN_STATE:
      whatToDisplay = 
      <View>
        
        <TouchableOpacity onPress={() => {setScreenState(ADDOUTFIT_SCREEN_STATE)}}>
          <Image style={chooseClothing_styles.backArrow} source={require('../../assets/backArrow_UI.png')}></Image>
        </TouchableOpacity>
        <Text style={chooseClothing_styles.text}>{clothingType}</Text>
        
        <View style= {styles.view}> 
    <FlatList data={filterByCategory("top")} 
    KeyExtractor={(clothingItem) => {return clothingItem.id}} 
      renderItem={({item}) => {
        console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.id);
        return <TouchableOpacity onPress = {() => {setImagesToDisplay({...imagesToDisplay, top: item.id}), setScreenState(ADDOUTFIT_SCREEN_STATE)} }>
        <View style= {styles.row}> 
          <Text>
            {item.category}
          </Text>
          <ImageDetail imageSource= {require('../../assets/chiyo_christmas.png')} /> 
        </View>
        </TouchableOpacity>
    }} /> 
    
</View>
        
        <TouchableOpacity onPress={() => {setScreenState(ADDOUTFIT_SCREEN_STATE)}}>
          <Image style={chooseClothing_styles.dummyClothing}></Image>
        </TouchableOpacity>
        

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
    bottom: 0,
    right: 10
  },
  image: {
    flex: 1
  }
  
});

const addOutfit_styles = StyleSheet.create({
  equipText: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 50
  },
  background: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 110,
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
  },
  saveButton: {
    top: 140
  }
});

const chooseClothing_styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 45
  },
  backArrow: {
    height: 70,
    width: 70,
    marginTop: 30,
    position: "absolute"
  }, 
  dummyClothing: {
    height: 150,
    width: 150,
    top: 80,
    left: 30,
    backgroundColor: "slategrey",

  }
});
const styles = StyleSheet.create({
  text: {
      fontSize: 20,
      paddingVertical: 20
      
  
    },
    listText:{
        fontSize: 15,
        paddingVertical: 20
    },
    roster: {
      alignItems: "center",
      
    },
    view: {
      flexDirection: "column",
      borderColor: 'red',
      justifyContent: "space-between",
      flexGrow: 1
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'grey',
      
    },
    icon: {
      fontSize: 40
    },
});

export default OutfitsScreen;
