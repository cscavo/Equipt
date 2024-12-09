import React, {useState, useContext} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from "react-native";

import {Context} from "../context/OutfitContext";
import {Context as ClothingContext} from '../context/ClothingContext';
import {Context as SkinColorContext} from '../context/SkinColorContext';

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
  const {skinColorState, changeSkinColor} = useContext(SkinColorContext);
  const image = '../../assets/addOutfit_UI.png';
  
  const {addOutfit, deleteOutfit} = useContext(Context);
  const {state} = useContext(ClothingContext);

  const filterByCategory = (category) =>{
    let myFilteredArray = state.filter((state) =>{
      return state.category === category;
    })
    return myFilteredArray;
  }

  const addToState = (category, imagePath) => {
    switch(category){
      case "top" :
        setImagesToDisplay({...imagesToDisplay, top: imagePath});
        break;
      case "bottom" :
        setImagesToDisplay({...imagesToDisplay, bottom: imagePath});
        break;
      case "accessory" :
        setImagesToDisplay({...imagesToDisplay, accessory: imagePath});
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

      <View style={[styles.flex, styles.backgroundColor]}>

        <WardrobeButtonComp onPressCloset={() => {props.navigation.navigate("Closet")}} onPressOutfits={() => {props.navigation.navigate("Outfits")}}
                        buttonBold={outfit_styles.outfitsButtonBold}/>

        <Text style={outfit_styles.text}>Outfits</Text>
       
        <OutfitListComp />

        <Image style={styles.flex}/>

        
        <TouchableOpacity onPress={() => {setScreenState(ADDOUTFIT_SCREEN_STATE)}}>
          <Image style={outfit_styles.addOutfitIcon} source={require('../../assets/addOutfit_UI.png')} />
        </TouchableOpacity>

        <NavBarComp wardrobeIconBox={outfit_styles.wardrobeNavBar}
              onPressCamera={() => {props.navigation.navigate("AddClothing")}}
              onPressProfile={() => {props.navigation.navigate("Profile")}}/>

      </View>

      break;
      //style= {{backgroundColor: "#DCE4E0", top: 20}}
  // SCREEN WITH MANNEQUIN WHERE YOU SAVE OUTFIT
    case ADDOUTFIT_SCREEN_STATE:
      whatToDisplay = 

      <View style={styles.backgroundColor}>

        <Text style={addOutfit_styles.equipText}>Equip Clothing</Text>
        <Image style={addOutfit_styles.background}></Image>


        <TouchableOpacity onPress={() => {setScreenState(OUTFIT_SCREEN_STATE), addToState("emptyObject")}}
          style = {addOutfit_styles.closeButton}>
          <Image style={{width: 45, height: 45}} source={require('../../assets/close-button.png')} />
        </TouchableOpacity>


        <View >

          <View style={addOutfit_styles.buttonContainer}>

          {imagesToDisplay.top == null
          ? <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                              {setClothingType("Tops")}
                                              setClothingToFilter("top")}}>
            <Image style={addOutfit_styles.clothingButton} source={require('../../assets/top.png')}></Image>
          </TouchableOpacity>
          : <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                              {setClothingType("Tops")}
                                              setClothingToFilter("top")}}>
              <Image style= {addOutfit_styles.clothingButton} source= {imagesToDisplay.top}></Image>
            </TouchableOpacity>
          
          }

          {imagesToDisplay.bottom == null
          ? <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                              {setClothingType("Bottoms")}
                                              setClothingToFilter("bottom")}}>
            <Image style={addOutfit_styles.clothingButton} source={require('../../assets/bottom.png')}></Image>
          </TouchableOpacity>
          : <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                              {setClothingType("Bottoms")}
                                              setClothingToFilter("bottom")}}>
              <Image style= {addOutfit_styles.clothingButton} source= {imagesToDisplay.bottom}></Image>
            </TouchableOpacity>
          }

          {imagesToDisplay.accessory == null
          ? <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                              {setClothingType("Accessories")}
                                              setClothingToFilter("accessory")}}>
            <Image style={addOutfit_styles.clothingButton} source={require('../../assets/acc.png')}></Image>
          </TouchableOpacity>
          : <TouchableOpacity onPress={() => {setScreenState(CHOOSECLOTHING_SCREEN_STATE)
                                              {setClothingType("Accessories")}
                                                setClothingToFilter("accessory")}}>
              <Image style= {addOutfit_styles.clothingButton} source= {imagesToDisplay.accessory}></Image>
            </TouchableOpacity>
          }

          </View>

            <Image style={{position: "absolute", height: 320, width: 120, top: 90, left: 50, backgroundColor: skinColorState.skinColor}}></Image>
            <Image style={styles.mannequin} source={require('../../assets/mannequin.png')}></Image>
          
        </View>


        <SaveButtonComp onPressSave={() => {setScreenState(OUTFIT_SCREEN_STATE), addOutfit(imagesToDisplay), addToState("emptyObject")}} saveButtonStyle={addOutfit_styles.saveButton} />

        
      </View>
        
        console.log(imagesToDisplay);
        console.log(clothingToFilter);
      break;
//
// THE SCREEN WHERE YOU CHOOSE CLOTHING BY CATEOGORY

    case CHOOSECLOTHING_SCREEN_STATE:
      whatToDisplay = 
      <View style={[styles.flex, styles.backgroundColor]}>
        
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
              console.log("RENDERING A CLOTHING ITEM WITH ID: " + item.id + item.imagePath);
              return <TouchableOpacity onPress = {() => {addToState(clothingToFilter, item.imagePath), setScreenState(ADDOUTFIT_SCREEN_STATE)} }>
        
              <View> 
                <ImageDetail imageSource= {item.imagePath} /> 
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
    paddingTop: 20,
    color: "#02200E"
  },
  outfitsButtonBold: {
    height: 80,
    width: 250,
    top: 61,
    left: 188,
    position: "absolute",
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#193625",
    backgroundColor: '#DAE7E0'
  },
  wardrobeNavBar: {
    opacity: 1
  },
  addOutfitIcon: {
    position: "absolute",
    height: 90,
    width: 90,
    alignSelf: "flex-end",
    bottom: 0,
    right: 10
  },
  
});

const addOutfit_styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 85,
    left: 15
  },
  equipText: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 90,
    //marginBottom: 60,
    color: "#02200E"
  },
  background: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 190,
    height: 390,
    width: 400,
    backgroundColor: "#DCE4E0",
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: "flex-end",
    marginVertical: 40,
    top: 60,
    right: 40,
    gap: 25
  },
  clothingButton: {
    height: 90,
    width: 90,
    borderWidth: 2,
  },
  saveButton: {
    top: 120
  },
});

const chooseClothing_styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 70,
    color: "#02200E"
  },
  backArrow: {
    height: 70,
    width: 70,
    marginTop: 55,
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
    },
    backgroundColor: {
    backgroundColor: "#FFFDF9"
    },
    mannequin: {
      position: "absolute",
      height: 350,
      width: 240,
      top: 87
    }
});

export default OutfitsScreen;
