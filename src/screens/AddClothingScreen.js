import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import SaveButtonComp from "../components/SaveButtonComp";

//Note for myself (Natalia): X in a box icon will go in this screen to return to the previous screen

const AddClothingScreen = (props) => {
  const {navigation} = props;
  const previousScreen = navigation.getParam("previousScreen", "Closet");
  return(
    <View>

        <Text style={styles.photo}>[photo]</Text>

      <TouchableOpacity onPress={() => navigation.navigate(previousScreen)}
        style = {styles.closeButton}>
        <Image style={{width: 45, height: 45}} source={require('../../assets/close-button.png')} />
      </TouchableOpacity>

        <Text style={styles.categoryText}>Category</Text>

        <TouchableOpacity style={styles.categoryContainer}>
            <Text style={styles.category}>top</Text>
            <Text style={styles.category}>bottom</Text>
            <Text style={styles.category}>accessory</Text>
        </TouchableOpacity>
        
        <View style = {styles.saveButtonContainer}>
          <SaveButtonComp onPressSave={() => {props.navigation.navigate("Closet")}}/>
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
  saveButtonContainer: {
    top: 100
  }

});

export default AddClothingScreen;