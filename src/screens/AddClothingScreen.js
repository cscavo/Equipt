import React, {useContext, useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import SaveButtonComp from "../components/SaveButtonComp";
import {Context} from '../context/ClothingContext';

//Note for myself (Natalia): X in a box icon will go in this screen to return to the previous screen

const AddClothingScreen = (props) => {
  const {navigation} = props;
  const previousScreen = navigation.getParam("previousScreen", "Closet");
  const {state, addClothing} = useContext(Context);
  const [category, setCategory] = useState(" ");


  var [ isPressTop, setIsPressTop ] = useState(false);
  var [ isPressBottom, setIsPressBottom ] = useState(false);
  var [ isPressAcc, setIsPressAcc ] = useState(false);

/*
  var touchProps = {
    activeOpacity: 1,
    underlayColor: 'grey',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
  };
  */
  
  return(
    <View styles={styles.container}>

        <Text style={styles.photo}>[photo]</Text>

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
          <SaveButtonComp onPressSave={() => {addClothing(category), props.navigation.navigate("Closet")}}/>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  photo: {
    fontSize: 35,
    alignSelf: "center",
    paddingHorizontal: 100,
    paddingVertical: 120,
    marginTop: 60,
    marginBottom: 30,
    backgroundColor: 'lightgrey',
    borderWidth: 2,
    top: 70
  },
  closeButton: {
    position: 'absolute',
    top: 65,
    left: 15
  },
  categoryText: {
    fontSize: 30,
    marginLeft: 30,
    top: 90
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 25,
    gap: 17,
    top: 100
  },
  category: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15
  },
  categoryClicked: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "grey"
  },
  saveButtonContainer: {
    top: 100
  },
  container: {
    flex: 1,
  },

  

});

export default AddClothingScreen;