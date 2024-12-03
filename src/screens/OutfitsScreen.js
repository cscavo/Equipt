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
  const [clothingToFilter, setClothingToFilter] = useState("");
  const image = '../../assets/addOutfit_UI.png';
  
  const {addOutfit, deleteOutfit} = useContext(Context);
  const {state} = useContext(ClothingContext);

  const filterByCategory = (category) =>{
    let myFilteredArray = state.filter((state) =>{
      return state.category === category;
    })
    return myFilteredArray;
  }

  const addToState = (category, id) => {
    switch(category){
      case "top" :
        setImagesToDisplay({...imagesToDisplay, top: id});
        break;
      case "bottom" :
        setImagesToDisplay({...imagesToDisplay, bottom: id});
        break;
      case "accessory" :
        setImagesToDisplay({...imagesToDisplay, accessory: id});
        break;
      case "emptyObject" :
        setImagesToDisplay({...imagesToDisplay, top: null, bottom: null, accessory: null});
        break;
      default: {
        return {...imagesToDisplay};
    }

    }
    
  }

  switch(screenState){

    case OUTFIT_SCREEN_STATE:
      whatToDisplay = 

      <View style={styles.flex}>

        <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                        outfitsButtonBold={outfit_styles.outfitsButtonBold}/>

        <Text style={outfit_styles.text}>Outfits</Text>
       
        <OutfitListComp />

        <Image style={styles.flex}/>

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

        <TouchableOpacity onPress={() => {setScreenState(OUTFIT_SCREEN_STATE)}}
          style = {addOutfit_styles.closeButton}>
          <Image style={{width: 45, height: 45}} source={require('../../assets/close-button.png')} />
        </TouchableOpacity>

        <View style={addOutfit_styles.buttonContainer}>

          {imagesToDisplay.top == null
          ? <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                           {setClothingType("Tops")}
                                            setClothingToFilter("top")}}>
            <Image style={addOutfit_styles.clothingButton}></Image>
          </TouchableOpacity>
          : <Text>DISPLAY</Text>
          }

          {imagesToDisplay.bottom == null
          ? <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                           {setClothingType("Bottoms")}
                                            setClothingToFilter("bottom")}}>
            <Image style={addOutfit_styles.clothingButton}></Image>
          </TouchableOpacity>
          : <Text>DISPLAY</Text>
          }

          {imagesToDisplay.accessory == null
          ? <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                           {setClothingType("Accessories")}
                                            setClothingToFilter("accessory")}}>
            <Image style={addOutfit_styles.clothingButton}></Image>
          </TouchableOpacity>
          : <Text>DISPLAY</Text>
          }

          
          <Text>{imagesToDisplay.top}</Text>
          <Text>{imagesToDisplay.bottom}</Text>
          <Text>{imagesToDisplay.accessory}</Text>
          

          

        </View>
        

        <SaveButtonComp onPressSave={() => {setScreenState(OUTFIT_SCREEN_STATE), addOutfit(), addToState("emptyObject")}} saveButtonStyle={addOutfit_styles.saveButton} />

        
      </View>
        
        console.log(imagesToDisplay);
        console.log(clothingToFilter);
      break;

// THE SCREEN WHERE YOU CHOOSE CLOTHING BY CATEOGORY

    case CHOOSECLOTHING_SCREEN_STATE:
      whatToDisplay = 
      <View style={{flex: 1}}>
        
        <TouchableOpacity onPress={() => {setScreenState(ADDOUTFIT_SCREEN_STATE)}}>
          <Image style={chooseClothing_styles.backArrow} source={require('../../assets/backArrow_UI.png')}></Image>
        </TouchableOpacity>

        <Text style={chooseClothing_styles.text}>{clothingType}</Text>
        
        <View style= {chooseClothing_styles.container}> 
          <FlatList 
            data={filterByCategory(clothingToFilter)} 
            numColumns={2}
            KeyExtractor={(clothingItem) => {return clothingItem.id}} 
            renderItem={({item}) => {
              console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.id);
              return <TouchableOpacity onPress = {() => {addToState(clothingToFilter, item.id), setScreenState(ADDOUTFIT_SCREEN_STATE)} }>
        
              <View> 
                <ImageDetail description={item.category} imageSource= {require('../../assets/chiyo_christmas.png')} /> 
              </View>

              </TouchableOpacity>
              }} /> 
    
        </View>

        

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
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: "lightgrey"
  },
  addOutfitIcon: {
    position: "absolute",
    height: 80,
    width: 80,
    alignSelf: "flex-end",
    bottom: 0,
    right: 10
  },
  
});

const addOutfit_styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 65,
    left: 15
  },
  equipText: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 70
  },
  background: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
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
  },
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
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 20,
    width: 340,
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
    flex: {
      flex: 1
    }
});

export default OutfitsScreen;
