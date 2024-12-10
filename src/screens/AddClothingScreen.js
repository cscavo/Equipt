import React, {useContext, useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import SaveButtonComp from "../components/SaveButtonComp";
import {Context} from '../context/ClothingContext';
import ImageDetail from '../components/ImageDetail';



const randomClothingPiece = () => {
  let clothingImage = [require("../../assets/Clothing/1.jpg"), require("../../assets/Clothing/2.jpg"), require("../../assets/Clothing/3.jpg"), require("../../assets/Clothing/4.jpg"), require("../../assets/Clothing/5.jpg"),
                      require("../../assets/Clothing/6.jpg"), require("../../assets/Clothing/7.jpg"), require("../../assets/Clothing/8.jpg"), require("../../assets/Clothing/9.jpg"), require("../../assets/Clothing/10.jpg"),
                      require("../../assets/Clothing/11.jpg"), require("../../assets/Clothing/12.jpg"), require("../../assets/Clothing/13.jpg"), require("../../assets/Clothing/14.jpg"), require("../../assets/Clothing/15.jpg"),
                      require("../../assets/Clothing/16.jpg"), require("../../assets/Clothing/17.jpg"), require("../../assets/Clothing/18.jpg"), require("../../assets/Clothing/19.jpg"), require("../../assets/Clothing/20.jpg"),
                      require("../../assets/Clothing/21.jpg"), require("../../assets/Clothing/22.jpg"), require("../../assets/Clothing/23.jpg"), require("../../assets/Clothing/24.jpg"), require("../../assets/Clothing/25.jpg"),
                      require("../../assets/Clothing/26.jpg"), require("../../assets/Clothing/27.jpg"), require("../../assets/Clothing/28.jpg"), require("../../assets/Clothing/29.jpg"), require("../../assets/Clothing/30.jpg"),
                      require("../../assets/Clothing/31.jpg"), require("../../assets/Clothing/32.jpg"), require("../../assets/Clothing/33.jpg"), require("../../assets/Clothing/34.jpg"), require("../../assets/Clothing/35.jpg"),
                      require("../../assets/Clothing/36.jpg"), require("../../assets/Clothing/37.jpg"), require("../../assets/Clothing/38.jpg"), require("../../assets/Clothing/39.jpg"), require("../../assets/Clothing/40.jpg"),
                      require("../../assets/Clothing/41.jpg"), require("../../assets/Clothing/42.jpg"), require("../../assets/Clothing/43.jpg"), require("../../assets/Clothing/44.jpg"), require("../../assets/Clothing/45.jpg"),
  ];
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