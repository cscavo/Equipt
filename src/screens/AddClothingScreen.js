import React, {useContext, useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import SaveButtonComp from "../components/SaveButtonComp";
import {Context} from '../context/ClothingContext';
import ImageDetail from '../components/ImageDetail';



const randomClothingPiece = () => {
  let clothingImage = [require("../../assets/adaptive-icon.png"), require("../../assets/favicon.png")];
  let image = clothingImage[Math.floor(Math.random() * clothingImage.length)];
  return image;
}

const AddClothingScreen = (props) => {
  const {navigation} = props;
  const previousScreen = navigation.getParam("previousScreen", "Closet");
  const {state, addClothing} = useContext(Context);
  const [category, setCategory] = useState(" ");
  const [randomClothing,setRandomClothing] = useState({});

  useEffect(() => {
    let tempRandom = randomClothingPiece();
    setRandomClothing({...randomClothing, uri: tempRandom});
  }, [])
  
  return(
    <View style={styles.container}>


      <Image source={randomClothing.uri} style={styles.photo}></Image>

      <TouchableOpacity onPress={() => navigation.navigate(previousScreen)}
        style = {styles.closeButton}>
        <Image style={{width: 45, height: 45}} source={require('../../assets/close-button.png')} />
      </TouchableOpacity>


      <Text style={styles.categoryText}>Category</Text>


      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() => {setCategory("top")}}>
          {category==="top" ? <Text style={styles.categoryClicked}>top</Text> : <Text style={styles.category}>top</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setCategory("bottom")}}>
          {category==="bottom" ? <Text style={styles.categoryClicked}>bottom</Text> : <Text style={styles.category}>bottom</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setCategory("accessory")}}>
          {category==="accessory" ? <Text style={styles.categoryClicked}>accessory</Text> : <Text style={styles.category}>accessory</Text>}
        </TouchableOpacity>
      </View>
        
        <View style = {styles.saveButtonContainer}>
          <SaveButtonComp onPressSave={() => {addClothing(category, randomClothing.uri), props.navigation.navigate("Closet")}}/>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  photo: {
    height: 350,
    width: 350,
    alignSelf: "center",
    paddingHorizontal: 100,
    paddingVertical: 120,
    marginTop: 90,
    marginBottom: 70,
    borderWidth: 2,
    top: 70,
    borderColor: "#02200E"
  },
  closeButton: {
    position: 'absolute',
    top: 65,
    left: 15
  },
  categoryText: {
    fontSize: 30,
    marginLeft: 30,
    marginTop: 70,
    marginBottom: 20,
    color: "#02200E"
    //top: 90
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    //paddingVertical: 10,
    //marginBottom: 25,
    gap: 17,
    //top: 100,
  },
  category: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    borderColor: "#02200E",
    color: "#02200E"
  },
  categoryClicked: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#193625",
    overflow: "hidden",
    color: "#FFFDF9"
  },
  saveButtonContainer: {
    top: 80,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFDF9"
  },

  

});

export default AddClothingScreen;